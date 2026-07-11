CREATE TABLE public.client_reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text,
  quote text NOT NULL,
  approved boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT client_reviews_name_len CHECK (char_length(name) BETWEEN 2 AND 80),
  CONSTRAINT client_reviews_role_len CHECK (role IS NULL OR char_length(role) <= 120),
  CONSTRAINT client_reviews_quote_len CHECK (char_length(quote) BETWEEN 10 AND 600)
);

GRANT SELECT, INSERT ON public.client_reviews TO anon;
GRANT SELECT, INSERT ON public.client_reviews TO authenticated;
GRANT ALL ON public.client_reviews TO service_role;

ALTER TABLE public.client_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON public.client_reviews FOR SELECT
  USING (approved = true);

CREATE POLICY "Anyone can submit a review"
  ON public.client_reviews FOR INSERT
  WITH CHECK (approved = true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.client_reviews;
ALTER TABLE public.client_reviews REPLICA IDENTITY FULL;