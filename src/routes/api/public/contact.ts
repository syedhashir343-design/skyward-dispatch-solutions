import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(1).max(2000),
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
  const utf8 = unescape(encodeURIComponent(input));
  return btoa(utf8).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sendContactNotification(data: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const gmailKey = process.env.GOOGLE_MAIL_API_KEY;

  if (!lovableKey || !gmailKey) {
    console.error("[contact] Missing Gmail gateway credentials");
    throw new Error("Email is not configured");
  }

  const to = "sam@skywardssolution.com";
  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.company || "—"],
    ["Message", data.message],
  ];

  const html = `<h2>New Website Contact Message</h2>
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
    `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(`New Contact Form Message - ${data.fullName}`)))}?=`,
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
    console.error(`[contact] Gmail send failed [${res.status}]: ${text}`);
    throw new Error("Email could not be sent");
  }
}

export const Route = createFileRoute("/api/public/contact")({
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

        const parsed = contactSchema.safeParse(body);
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
                : "Please complete the required fields.",
              issues: flat,
            },
            { status: 400 },
          );
        }

        try {
          await sendContactNotification(parsed.data);
        } catch (err) {
          console.error("[contact] Email notification error:", err);
          return jsonResponse(
            { error: "Message could not be sent. Please call us at (614) 209-0850." },
            { status: 500 },
          );
        }

        return jsonResponse({ ok: true });
      },
    },
  },
});