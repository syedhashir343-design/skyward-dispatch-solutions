import { createFileRoute } from "@tanstack/react-router";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const SYSTEM_PROMPT = `You are the AI assistant for Skywards Solutions, a truck dispatch and logistics company.

You help visitors with three things:
1. Answer questions about our services (truck dispatching, load booking, rate negotiation, carrier setup, back-office support, compliance).
2. Guide carriers through onboarding — explain the carrier setup form, what documents they'll need (MC number, DOT number, W-9, insurance certificate), and what happens after they submit.
3. Qualify leads — if a visitor is interested in working with us, politely ask for their name, company, MC number (if a carrier), email, and phone so our team can follow up. Point them to the Contact form or Carrier Setup form on the site.

Keep replies short, friendly, and professional. Use plain language. If asked something outside dispatch/logistics/Skywards, briefly redirect. Never invent pricing or guarantees — say a team member will follow up with specifics.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as {
            messages?: ChatMessage[];
          };
          if (!Array.isArray(messages) || messages.length === 0) {
            return new Response(JSON.stringify({ error: "messages required" }), {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "AI not configured" }), {
              status: 500,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const trimmed = messages.slice(-20).map((m) => ({
            role: m.role,
            content: String(m.content ?? "").slice(0, 4000),
          }));

          const resp = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Lovable-API-Key": apiKey,
              },
              body: JSON.stringify({
                model: "google/gemini-3-flash-preview",
                messages: [
                  { role: "system", content: SYSTEM_PROMPT },
                  ...trimmed,
                ],
              }),
            },
          );

          if (!resp.ok) {
            const text = await resp.text();
            console.error("AI gateway error", resp.status, text);
            const status =
              resp.status === 429 || resp.status === 402 ? resp.status : 500;
            const message =
              resp.status === 429
                ? "The assistant is busy right now. Please try again in a moment."
                : resp.status === 402
                  ? "AI credits exhausted. Please contact the site owner."
                  : "The assistant is unavailable right now.";
            return new Response(JSON.stringify({ error: message }), {
              status,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const data = (await resp.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const reply = data.choices?.[0]?.message?.content ?? "";
          return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          });
        } catch (err) {
          console.error("chat route error", err);
          return new Response(JSON.stringify({ error: "Unexpected error" }), {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          });
        }
      },
    },
  },
});
