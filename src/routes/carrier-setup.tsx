import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/carrier-setup")({
  head: () => ({
    meta: [
      { title: "Carrier Setup — Skywards Solution Truck Dispatch" },
      {
        name: "description",
        content:
          "Get set up with Skywards Solution dispatch in minutes. Submit your MC, DOT, truck type and preferred lanes and we’ll match you with a dedicated dispatcher.",
      },
      { property: "og:title", content: "Carrier Setup — Skywards Solution" },
      {
        property: "og:description",
        content:
          "Submit your carrier info and start running loads with a dedicated dispatcher — nationwide USA coverage from Toledo, OH.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CarrierSetup,
});

const truckTypes = [
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Step Deck",
  "Conestoga",
  "Power Only",
  "Other",
];

function CarrierSetup() {
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
      company: String(data.get("company") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      mc: String(data.get("mc") ?? "").trim(),
      dot: String(data.get("dot") ?? "").trim(),
      truckType: String(data.get("truckType") ?? "").trim(),
      lanes: String(data.get("lanes") ?? "").trim(),
      notes: String(data.get("notes") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/public/carrier-setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let message = "Submission failed. Please try again or call us.";
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

      // Send email notification via the Vercel serverless function (Gmail SMTP).
      try {
        const emailRes = await fetch("/api/send-carrier-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!emailRes.ok) {
          console.error("Email notification failed:", await emailRes.text());
        }
      } catch (err) {
        console.error("Email notification error:", err);
      }

      const successMessage =
        "Thank you! Your carrier setup request has been submitted successfully. Our team will contact you shortly.";
      setSubmitStatus({ type: "success", message: successMessage });
      toast.success(successMessage);
      formRef.current?.reset();
    } catch (err) {
      console.error("Carrier setup submit failed:", err);
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
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Carrier Setup</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Let’s get your truck dispatched.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Fill out the form below and a dedicated dispatcher will reach out within one business day
            to complete onboarding and start booking loads.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          {/* FORM */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              action="/api/public/carrier-setup"
              method="post"
              className="grid gap-5 sm:grid-cols-2"
            >
              <Field name="fullName" label="Full Name" required />
              <Field name="company" label="Company Name" required />
              <Field name="phone" label="Phone Number" type="tel" required />
              <Field name="email" label="Email Address" type="email" required />
              <Field name="mc" label="MC Number" required />
              <Field name="dot" label="DOT Number" required />

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Truck Type <span className="text-brand-light">*</span>
                </label>
                <select
                  name="truckType"
                  required
                  defaultValue=""
                  className="border-border bg-background focus:border-brand focus:ring-brand/20 h-12 w-full rounded-xl border px-4 text-base text-foreground outline-none transition-all focus:ring-4"
                >
                  <option value="" disabled>Select equipment</option>
                  {truckTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <Field name="lanes" label="Preferred Lanes" placeholder="e.g. OH → TX, Midwest → SE" wide />

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Anything we should know — home time, factoring, lane restrictions…"
                  className="border-border bg-background focus:border-brand focus:ring-brand/20 w-full rounded-xl border px-4 py-3 text-base text-foreground outline-none transition-all focus:ring-4"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || !ready}
                className="bg-gradient-brand text-brand-foreground shadow-elegant inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 sm:col-span-2"
              >
                {submitting ? "Submitting…" : "Submit Carrier Setup"}
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

          {/* SIDE */}
          <aside className="flex flex-col gap-6">
            <div className="bg-gradient-brand text-brand-foreground rounded-3xl p-8 shadow-soft">
              <Truck className="h-8 w-8 text-brand-light" />
              <h2 className="mt-4 text-2xl font-bold">What happens next?</h2>
              <ul className="mt-5 space-y-4 text-white/90">
                {[
                  "We review your MC/DOT and equipment within hours.",
                  "A dedicated dispatcher contacts you to align on lanes & rates.",
                  "We complete broker setups and start booking loads.",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <ShieldCheck className="text-brand h-7 w-7" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">Your info is safe.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We never share carrier information with third parties outside the brokers required to
                book your loads.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">Prefer to talk first?</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="tel:+16142090850" className="flex items-center gap-3 text-foreground hover:text-brand">
                  <Phone className="h-4 w-4 text-brand-light" /> (614) 209-0850
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-4 w-4 text-brand-light" /> sam@skywardssolution.com
                </div>
              </div>
            </div>
          </aside>
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
  placeholder,
  wide,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">
        {label} {required && <span className="text-brand-light">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border-border bg-background focus:border-brand focus:ring-brand/20 h-12 w-full rounded-xl border px-4 text-base text-foreground outline-none transition-all focus:ring-4"
      />
    </div>
  );
}