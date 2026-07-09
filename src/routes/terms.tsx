import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Skywards Solution" },
      { name: "description", content: "Terms governing use of the Skywards Solution website and truck dispatch services." },
      { property: "og:title", content: "Terms of Service — Skywards Solution" },
      { property: "og:description", content: "Terms of use for Skywards Solution." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.skywardssolution.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://www.skywardssolution.com/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Legal</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>

      <div className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <p>
          These Terms govern your use of the Skywards Solution website and dispatch services. By
          using our site or engaging our dispatch team, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Services</h2>
        <p>
          Skywards Solution provides truck dispatch services including load booking, rate
          negotiation, broker communication, carrier setup and paperwork management. Specific terms
          of each dispatch engagement — including percentage, notice period and equipment covered —
          are agreed in a separate carrier agreement.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Carrier Responsibilities</h2>
        <p>
          Carriers must maintain active MC and DOT authority, valid insurance, and comply with all
          FMCSA regulations. Carriers are responsible for operating their equipment safely and
          legally.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">No Guarantee of Loads</h2>
        <p>
          Freight availability and rates depend on the market. We work aggressively to source
          profitable loads but do not guarantee specific volumes or rates.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Skywards Solution is not liable for indirect,
          incidental or consequential damages arising from use of the site or dispatch services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Ohio, United States.</p>

        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          Questions? Contact <a href="mailto:sam@skywardssolution.com" className="text-brand">sam@skywardssolution.com</a>.
        </p>
      </div>
    </article>
  );
}