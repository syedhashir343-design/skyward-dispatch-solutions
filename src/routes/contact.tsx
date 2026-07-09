import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Skywards Solution — Truck Dispatch in Toledo, Ohio" },
      {
        name: "description",
        content:
          "Get in touch with Skywards Solution. Call (614) 209-0850, email sam@skywardssolution.com or visit our office at 317 Locust St, Toledo, OH 43604.",
      },
      { property: "og:title", content: "Contact Skywards Solution" },
      {
        property: "og:description",
        content:
          "Reach our Toledo, Ohio dispatch team — phone, email, address and 24/7 carrier support.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Skywards Solution",
          url: "https://skyward-dispatch-solutions.lovable.app",
          image: "https://skyward-dispatch-solutions.lovable.app/favicon.ico",
          telephone: "+1-614-209-0850",
          email: "sam@skywardssolution.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "317 Locust St",
            addressLocality: "Toledo",
            addressRegion: "OH",
            postalCode: "43604",
            addressCountry: "US",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          areaServed: { "@type": "Country", name: "United States" },
        }),
      },
    ],
  }),
  component: Contact,
});

function getContactEndpoint() {
  if (typeof window === "undefined") return "/api/public/contact";

  const hostname = window.location.hostname;
  const isPreviewHost = hostname.includes("lovableproject.com") || hostname.startsWith("id-preview--");

  return isPreviewHost
    ? "https://skyward-dispatch-solutions.lovable.app/api/public/contact"
    : "/api/public/contact";
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setReady(true);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch(getContactEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let message = "Message failed. Please try again or call us.";
        try {
          const body = await res.json();
          if (body?.error) message = String(body.error);
        } catch {
          /* ignore */
        }
        setSubmitStatus({ type: "error", message });
        toast.error(message);
        return;
      }

      const successMessage = "Thank you! Your message has been sent successfully.";
      setSubmitStatus({ type: "success", message: successMessage });
      toast.success(successMessage);
      formRef.current?.reset();
    } catch (err) {
      console.error("Contact submit failed:", err);
      const message = "Network error. Please check your connection and try again.";
      setSubmitStatus({ type: "error", message });
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Contact</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Talk to a real dispatcher today.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Call, email or stop by our Toledo office. We answer fast — usually within minutes during
            business hours, and 24/7 for active carriers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Phone, title: "Phone", value: "(614) 209-0850", href: "tel:+16142090850" },
            { icon: Mail, title: "Email", value: "sam@skywardssolution.com" },
            { icon: MapPin, title: "Office", value: "317 Locust St, Toledo, OH 43604" },
            { icon: Clock, title: "Hours", value: "Mon–Sun · 24/7 for carriers" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-elegant hover:-translate-y-1">
              <div className="bg-gradient-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
                <c.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</h2>
              {c.href ? (
                <a href={c.href} className="text-brand mt-2 block text-lg font-semibold hover:underline">
                  {c.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-semibold text-foreground">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Send a message</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Tell us what you need moved.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Share your lane, equipment, or dispatch question and Sam’s team will reply directly from the office inbox.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            action="/api/public/contact"
            method="post"
            className="grid gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft sm:grid-cols-2"
          >
            <Field name="fullName" label="Full Name" required />
            <Field name="email" label="Email Address" type="email" required />
            <Field name="phone" label="Phone Number" type="tel" />
            <Field name="company" label="Company Name" />

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Message <span className="text-brand-light">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your trucks, freight, lanes, or dispatch needs…"
                className="border-border bg-background focus:border-brand focus:ring-brand/20 w-full rounded-xl border px-4 py-3 text-base text-foreground outline-none transition-all focus:ring-4"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || !ready}
              className="bg-gradient-brand text-brand-foreground shadow-elegant inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 sm:col-span-2"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending…" : "Send Message"}
            </button>

            {submitStatus && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm font-medium sm:col-span-2 ${
                  submitStatus.type === "success"
                    ? "border-brand-light/40 bg-brand-light/10 text-foreground"
                    : "border-destructive/40 bg-destructive/10 text-destructive"
                }`}
                role="status"
                aria-live="polite"
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Skywards Solution Office Location"
            src="https://www.google.com/maps?q=317+Locust+St,+Toledo,+OH+43604&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">
        {label} {required && <span className="text-brand-light">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="border-border bg-background focus:border-brand focus:ring-brand/20 h-12 w-full rounded-xl border px-4 text-base text-foreground outline-none transition-all focus:ring-4"
      />
    </div>
  );
}