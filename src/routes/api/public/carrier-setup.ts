import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

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

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendNotificationEmail(payload: z.infer<typeof submissionSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[carrier-setup] RESEND_API_KEY not set — skipping email notification");
    return;
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

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Skywards Solution <notify@skywardssolution.com>",
      to: [NOTIFY_TO],
      reply_to: payload.email,
      subject: `Carrier Setup — ${payload.fullName} (${payload.company})`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`[carrier-setup] Resend send failed [${res.status}]: ${body}`);
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
        } catch (err) {
          console.error("[carrier-setup] email send threw:", err);
          // Email failure must not fail the submission — data is already saved.
        }

        return Response.json({ ok: true });
      },
    },
  },
});