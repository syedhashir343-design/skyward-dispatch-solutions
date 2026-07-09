import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Skywards Solution" },
      { name: "description", content: "How Skywards Solution collects, uses and protects information submitted through our truck dispatch website." },
      { property: "og:title", content: "Privacy Policy — Skywards Solution" },
      { property: "og:description", content: "How Skywards Solution handles your data." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.skywardssolution.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://www.skywardssolution.com/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:px-8 prose prose-slate">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Legal</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>

      <div className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <p>
          Skywards Solution ("we", "us", "our") operates skywardssolution.com and provides truck
          dispatch services to owner-operators, small fleets and carriers across the United States.
          This policy explains what information we collect, how we use it, and the choices you have.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
        <p>
          When you fill out our contact or carrier setup forms, we collect the information you
          provide — name, company, phone number, email, MC/DOT numbers, equipment type, preferred
          lanes, and any notes you include. We may also collect basic technical information such as
          IP address and browser type through standard server logs.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">How We Use Information</h2>
        <p>
          We use submitted information to respond to inquiries, complete carrier onboarding, dispatch
          loads on your behalf, communicate about active freight, and set you up with brokers
          required to book your loads. We do not sell your information.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Information Sharing</h2>
        <p>
          We share carrier information only with the brokers, shippers and factoring companies
          required to move your freight. We may also share information when required by law.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Data Retention</h2>
        <p>
          We retain carrier records for as long as needed to provide dispatch services and to comply
          with FMCSA, tax and other legal obligations.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of personal information we hold about
          you by emailing <a href="mailto:sam@skywardssolution.com" className="text-brand">sam@skywardssolution.com</a>.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          Skywards Solution · 317 Locust St, Toledo, OH 43604 · (614) 209-0850 ·
          <a href="mailto:sam@skywardssolution.com" className="text-brand"> sam@skywardssolution.com</a>
        </p>
      </div>
    </article>
  );
}