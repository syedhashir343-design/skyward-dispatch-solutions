import { createFileRoute } from "@tanstack/react-router";

type Strategy = "mobile" | "desktop";

const SITE_URL = "https://skyward-dispatch-solutions.lovable.app";

async function runPageSpeed(url: string, strategy: Strategy) {
  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", strategy);
  api.searchParams.append("category", "PERFORMANCE");
  const key = process.env.PAGESPEED_API_KEY;
  if (key) api.searchParams.set("key", key);

  const res = await fetch(api.toString());
  if (!res.ok) throw new Error(`PSI ${strategy} ${res.status}: ${await res.text()}`);
  const json: any = await res.json();
  const audits = json.lighthouseResult?.audits ?? {};
  const score = json.lighthouseResult?.categories?.performance?.score;
  return {
    performance_score: score != null ? Math.round(score * 100) : null,
    lcp_ms: Math.round(audits["largest-contentful-paint"]?.numericValue ?? 0) || null,
    cls: audits["cumulative-layout-shift"]?.numericValue ?? null,
    fcp_ms: Math.round(audits["first-contentful-paint"]?.numericValue ?? 0) || null,
    tbt_ms: Math.round(audits["total-blocking-time"]?.numericValue ?? 0) || null,
    si_ms: Math.round(audits["speed-index"]?.numericValue ?? 0) || null,
  };
}

export const Route = createFileRoute("/api/public/hooks/pagespeed")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authHeader = request.headers.get("apikey") ?? request.headers.get("authorization")?.replace("Bearer ", "");
        if (!authHeader) {
          return new Response(JSON.stringify({ error: "missing apikey" }), { status: 401, headers: { "Content-Type": "application/json" } });
        }

        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
          auth: { autoRefreshToken: false, persistSession: false },
        });

        const results: Array<{ strategy: Strategy; ok: boolean; error?: string }> = [];
        for (const strategy of ["mobile", "desktop"] as Strategy[]) {
          try {
            const m = await runPageSpeed(SITE_URL, strategy);
            const { error } = await supabase.from("perf_metrics").insert({ url: SITE_URL, strategy, ...m });
            if (error) throw error;
            results.push({ strategy, ok: true });
          } catch (e: any) {
            console.error("pagespeed", strategy, e?.message ?? e);
            results.push({ strategy, ok: false, error: String(e?.message ?? e) });
          }
        }

        return new Response(JSON.stringify({ ok: true, results }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});