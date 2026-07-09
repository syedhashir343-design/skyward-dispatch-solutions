import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import nodemailer from "nodemailer";

const submissionSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(160),
  phone: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(200),
  mc: z.string().trim().min(1).max(40),
  dot: z.string().trim().min(1).max(40),
  truckType: z.string().trim().min(1).max(60),
  lanes: z.string().trim().max(500).optional().default(""),
  notes: z.string().trim().max(2000).optional().default(""),
});

const NOTIFY_TO = "sam@skywardssolution.com";
const FROM_EMAIL = "Skywards Solution <sam@skywardssolution.com>";

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendNotificationEmail(payload: z.infer<typeof submissionSchema>) {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const missing = [
    !host && "SMTP_HOST",
    !portRaw && "SMTP_PORT",
    !user && "SMTP_USER",
    !pass && "SMTP_PASS",
  ].filter(Boolean) as string[];
  if (missing.length) {
    throw new Error(`SMTP configuration missing: ${missing.join(", ")}`);
  }
  const port = Number(portRaw);
  if (!Number.isFinite(port) || port <= 0) {
    throw new Error(`SMTP_PORT is invalid: "${portRaw}"`);
  }

  const rows = [
    ["Full Name", payload.fullName],
    ["Company", payload.company],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["MC Number", payload.mc],
    ["DOT Number", payload.dot],
    ["Truck Type", payload.truckType],
    ["Preferred Lanes", payload.lanes || "—"],
    ["Notes", payload.notes || "—"],
  ];

  const html = `
    <h2>New Carrier Setup Submission</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600">${escapeHtml(k)}</td><td style="padding:6px 12px;border:1px solid #eee">${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  console.info(`[carrier-setup] sending SMTP notification to: ${NOTIFY_TO} via ${host}:${port}`);

  const transporter = nodemailer.createTransport({
    host: host!,
    port,
    secure: port === 465, // STARTTLS on 587, implicit TLS on 465
    auth: { user: user!, pass: pass! },
  });

  try {
    await transporter.verify();
  } catch (err) {
    console.error("[carrier-setup] SMTP connection/auth verification failed:", err);
    throw new Error(
      `SMTP connection or authentication failed: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  try {
    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to: NOTIFY_TO,
      replyTo: payload.email,
      subject: `Carrier Setup — ${payload.fullName} (${payload.company})`,
      html,
    });
    if (!info.accepted?.includes(NOTIFY_TO)) {
      console.error(`[carrier-setup] SMTP did not accept ${NOTIFY_TO}`, info);
      throw new Error(`SMTP server did not accept recipient ${NOTIFY_TO}`);
    }
    console.info(`[carrier-setup] SMTP accepted notification for ${NOTIFY_TO}`, {
      messageId: info.messageId,
      response: info.response,
    });
  } catch (err) {
    console.error("[carrier-setup] SMTP send failed:", err);
    throw new Error(
      `SMTP send failed: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

export const Route = createFileRoute("/api/public/carrier-setup")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const parsed = submissionSchema.safeParse(json);
        if (!parsed.success) {
          return Response.json(
            { error: "Validation failed", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }
        const data = parsed.data;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("carrier_submissions").insert({
          full_name: data.fullName,
          company: data.company,
          phone: data.phone,
          email: data.email,
          mc_number: data.mc,
          dot_number: data.dot,
          truck_type: data.truckType,
          preferred_lanes: data.lanes || null,
          notes: data.notes || null,
        });

        if (error) {
          console.error("[carrier-setup] insert failed:", error);
          return Response.json({ error: "Failed to save submission" }, { status: 500 });
        }

        try {
          await sendNotificationEmail(data);
        } catch (emailError) {
          console.error("[carrier-setup] notification email failed:", emailError);
          return Response.json(
            { error: "We could not send the carrier setup notification. Please try again." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});