// Vercel Node.js Serverless Function — Gmail SMTP via Nodemailer.
// Runs on Vercel's Node runtime (supports raw TCP), not Cloudflare Workers.
import nodemailer from "nodemailer";

export const config = { runtime: "nodejs" };

function escapeHtml(v = "") {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const required = ["fullName", "company", "phone", "email", "mc", "dot", "truckType"];
  const missing = required.filter((k) => !body[k] || !String(body[k]).trim());
  if (missing.length) {
    return res.status(400).json({ error: `Missing fields: ${missing.join(", ")}` });
  }

  const {
    SMTP_HOST = "smtp.gmail.com",
    SMTP_PORT = "465",
    SMTP_SECURE = "true",
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO = "sam@skywardssolution.com",
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[carrier-email] Missing SMTP_USER or SMTP_PASS env vars");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const rows = [
    ["Full Name", body.fullName],
    ["Company", body.company],
    ["Phone", body.phone],
    ["Email", body.email],
    ["MC Number", body.mc],
    ["DOT Number", body.dot],
    ["Truck Type", body.truckType],
    ["Preferred Lanes", body.lanes || "—"],
    ["Notes", body.notes || "—"],
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

  const port = Number(SMTP_PORT);
  const secure = String(SMTP_SECURE).toLowerCase() === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    const info = await transporter.sendMail({
      from: `Skywards Solution <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: body.email,
      subject: "New Carrier Setup Submission",
      html,
    });
    console.info("[carrier-email] Sent:", { messageId: info.messageId, response: info.response, accepted: info.accepted });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[carrier-email] SMTP send failed:", err);
    return res.status(502).json({ error: `SMTP send failed: ${err?.message || String(err)}` });
  }
}