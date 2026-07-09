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

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, Accept, Origin",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(body: unknown, init?: ResponseInit) {
  return Response.json(body, {
    ...init,
    headers: {
      ...corsHeaders,
      ...(init?.headers ?? {}),
    },
  });
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function b64url(input: string) {
  // btoa handles Latin-1; encode UTF-8 first.
  const utf8 = unescape(encodeURIComponent(input));
  return btoa(utf8).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sendGmailNotification(data: {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  mc: string;
  dot: string;
  truckType: string;
  lanes: string;
  notes: string;
}) {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const gmailKey = process.env.GOOGLE_MAIL_API_KEY;
  if (!lovableKey || !gmailKey) {
    console.error("[carrier-setup] Missing Gmail gateway credentials");
    throw new Error("Email is not configured");
  }

  const to = "sam@skywardssolution.com";
  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Email", data.email],
    ["MC Number", data.mc],
    ["DOT Number", data.dot],
    ["Truck Type", data.truckType],
    ["Preferred Lanes", data.lanes || "—"],
    ["Notes", data.notes || "—"],
  ];

  const html = `<h2>New Carrier Setup Submission</h2>
<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600">${escapeHtml(k)}</td><td style="padding:6px 12px;border:1px solid #eee">${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`,
  )
  .join("")}
</table>`;

  const mime = [
    `To: ${to}`,
    `Reply-To: ${data.email}`,
    `Subject: New Carrier Setup Submission — ${data.company}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
    "",
    html,
  ].join("\r\n");

  const res = await fetch(
    "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gmailKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: b64url(mime) }),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    console.error(`[carrier-setup] Gmail send failed [${res.status}]: ${text}`);
    throw new Error("Email could not be sent");
  }
}

export const Route = createFileRoute("/api/public/carrier-setup")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        let body: unknown;
        try {
          const contentType = request.headers.get("content-type") ?? "";
          if (contentType.includes("application/json")) {
            body = await request.json();
          } else {
            const formData = await request.formData();
            body = Object.fromEntries(formData.entries());
          }
        } catch {
          return jsonResponse({ error: "Invalid submission body" }, { status: 400 });
        }

        const parsed = submissionSchema.safeParse(body);
        if (!parsed.success) {
          const flat = parsed.error.flatten();
          const fieldMessages = Object.entries(flat.fieldErrors)
            .filter(([, msgs]) => msgs && msgs.length)
            .map(([field, msgs]) => `${field}: ${(msgs as string[]).join(", ")}`);
          const detail = [...(flat.formErrors ?? []), ...fieldMessages].join("; ");
          return jsonResponse(
            {
              error: detail
                ? `Please fix the following fields — ${detail}`
                : "The submission was rejected: one or more required fields are missing or invalid.",
              issues: flat,
            },
            { status: 400 },
          );
        }
        const data = parsed.data;

        try {
          await sendGmailNotification(data);
        } catch (err) {
          console.error("[carrier-setup] Email notification error:", err);
          return jsonResponse(
            { error: "Carrier setup could not be sent. Please call us at (614) 209-0850." },
            { status: 500 },
          );
        }

        try {
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

          if (error) console.error("[carrier-setup] insert failed:", error);
        } catch (err) {
          console.error("[carrier-setup] save skipped after email sent:", err);
        }

        return jsonResponse({ ok: true });
      },
    },
  },
});