import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

type Review = {
  id: string;
  name: string;
  role: string | null;
  quote: string;
  created_at: string;
};

export function LiveReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    supabase
      .from("client_reviews")
      .select("id,name,role,quote,created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(24)
      .then(({ data }) => {
        if (mounted && data) setReviews(data as Review[]);
      });

    const channel = supabase
      .channel("client_reviews_live")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "client_reviews" },
        (payload) => {
          const r = payload.new as Review;
          if (!(payload.new as { approved?: boolean }).approved) return;
          setReviews((prev) => [r, ...prev.filter((p) => p.id !== r.id)].slice(0, 24));
        },
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "client_reviews" },
        (payload) => {
          const r = payload.new as Review & { approved: boolean };
          if (!r.approved) return;
          setReviews((prev) => [r, ...prev.filter((p) => p.id !== r.id)].slice(0, 24));
        },
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const n = name.trim();
    const r = role.trim();
    const q = quote.trim();
    if (n.length < 2 || n.length > 80) return setError("Please enter your full name.");
    if (q.length < 10 || q.length > 600) return setError("Review must be 10–600 characters.");
    if (r.length > 120) return setError("Role is too long.");

    setStatus("sending");
    const { error: insertError } = await supabase
      .from("client_reviews")
      .insert({ name: n, role: r || null, quote: q, approved: false });

    if (insertError) {
      setStatus("error");
      setError("Couldn’t submit right now. Please try again.");
      return;
    }
    setStatus("sent");
    setName("");
    setRole("");
    setQuote("");
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <form
        onSubmit={submit}
        className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md"
        aria-label="Leave a review"
      >
        <h3 className="text-xl font-semibold text-white">Leave a review</h3>
        <p className="mt-1 text-sm text-white/70">
          Share your experience with Skywards Solution. Your review appears live below.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Name</span>
            <input
              type="text"
              required
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/70 outline-none focus:border-white/50"
              placeholder="Full name"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Role (optional)</span>
            <input
              type="text"
              maxLength={120}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/70 outline-none focus:border-white/50"
              placeholder="e.g. Owner-Operator · Reefer · Ohio"
            />
          </label>
        </div>

        <label className="mt-3 block">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Your review</span>
          <textarea
            required
            minLength={10}
            maxLength={600}
            rows={4}
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="mt-1 w-full resize-y rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/70 outline-none focus:border-white/50"
            placeholder="Tell other carriers what your experience with Skywards has been like."
          />
          <span className="mt-1 block text-right text-xs text-white/75">{quote.length}/600</span>
        </label>

        {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
        {status === "sent" && (
          <p className="mt-2 text-sm text-emerald-300">
            Thanks — your review was submitted and will appear here after a quick admin approval.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-gradient-brand text-brand-foreground mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold shadow-elegant transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Submitting…" : "Post review"}
        </button>
      </form>

      <div>
        <div className="mb-4 flex items-center gap-2 text-white/80">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest">
            Live · {reviews.length} recent review{reviews.length === 1 ? "" : "s"}
          </span>
        </div>

        {reviews.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-7 text-sm text-white/70">
            No reviews yet — be the first to share your experience.
          </div>
        ) : (
          <ul className="grid max-h-[520px] gap-4 overflow-y-auto pr-1 sm:grid-cols-2">
            {reviews.map((r) => (
              <li
                key={r.id}
                className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md"
              >
                <blockquote className="text-sm leading-relaxed text-white/90">“{r.quote}”</blockquote>
                <div className="mt-4 border-t border-white/15 pt-3 text-white">
                  <div className="text-sm font-semibold">{r.name}</div>
                  {r.role && <div className="text-xs text-white/80">{r.role}</div>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}