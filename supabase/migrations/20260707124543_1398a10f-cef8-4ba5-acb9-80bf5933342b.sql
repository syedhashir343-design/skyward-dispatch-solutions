
CREATE TABLE public.carrier_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  mc_number TEXT NOT NULL,
  dot_number TEXT NOT NULL,
  truck_type TEXT NOT NULL,
  preferred_lanes TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.carrier_submissions TO service_role;

ALTER TABLE public.carrier_submissions ENABLE ROW LEVEL SECURITY;
-- No public policies: inserts happen via the server route using service_role.
