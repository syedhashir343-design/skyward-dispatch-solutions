CREATE TABLE public.perf_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  strategy text NOT NULL CHECK (strategy IN ('mobile','desktop')),
  performance_score numeric,
  lcp_ms integer,
  cls numeric,
  fcp_ms integer,
  tbt_ms integer,
  si_ms integer,
  raw jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.perf_metrics TO authenticated;
GRANT ALL ON public.perf_metrics TO service_role;
ALTER TABLE public.perf_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read perf" ON public.perf_metrics FOR SELECT TO authenticated USING (true);
CREATE INDEX perf_metrics_created_at_idx ON public.perf_metrics (created_at DESC);