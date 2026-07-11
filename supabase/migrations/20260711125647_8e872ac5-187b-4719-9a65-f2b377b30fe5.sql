
-- 1. carrier_submissions: explicit deny for public/anon/authenticated inserts.
-- Real submissions go through the server route using the service role (which bypasses RLS).
CREATE POLICY "Block public inserts to carrier submissions"
  ON public.carrier_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

-- 2. perf_metrics: admin-only read
DROP POLICY IF EXISTS "auth read perf" ON public.perf_metrics;

CREATE POLICY "Admins can read perf metrics"
  ON public.perf_metrics FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 3. has_role: remove anon/public execute; keep for authenticated so RLS policies can call it
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
