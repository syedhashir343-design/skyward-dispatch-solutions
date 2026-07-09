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
          const flat = parsed.error.flatten();
          const fieldMessages = Object.entries(flat.fieldErrors)
            .filter(([, msgs]) => msgs && msgs.length)
            .map(([field, msgs]) => `${field}: ${(msgs as string[]).join(", ")}`);
          const detail = [...(flat.formErrors ?? []), ...fieldMessages].join("; ");
          return Response.json(
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

        return Response.json({ ok: true });
      },
    },
  },
});