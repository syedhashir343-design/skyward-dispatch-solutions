import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export type ServicePageContent = {
  eyebrow: string;
  h1: string;
  h1Highlight?: string;
  intro: string;
  sections: {
    h2: string;
    body: string[];
    h3s?: { h3: string; body: string }[];
  }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
};

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            {content.h1}
            {content.h1Highlight && (
              <span className="block text-brand-light">{content.h1Highlight}</span>
            )}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{content.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/carrier-setup"
              className="text-brand inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              Start Carrier Setup <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+16142090850"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> (614) 209-0850
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="max-w-3xl space-y-14">
            {content.sections.map((s) => (
              <div key={s.h2}>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{s.h2}</h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.h3s && (
                  <div className="mt-8 space-y-6">
                    {s.h3s.map((h) => (
                      <div key={h.h3}>
                        <h3 className="text-xl font-semibold text-foreground">{h.h3}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{h.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* BENEFITS */}
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why carriers pick Skywards</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-3">
                {content.faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-border bg-card p-6 open:shadow-soft"
                  >
                    <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                      {f.q}
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="bg-gradient-brand text-brand-foreground rounded-3xl p-7 shadow-soft">
              <h3 className="text-xl font-bold">{content.ctaTitle}</h3>
              <p className="mt-3 text-sm text-white/85">{content.ctaBody}</p>
              <Link
                to="/carrier-setup"
                className="text-brand mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold hover:scale-[1.02] transition-transform"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Related dispatch services
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { to: "/dry-van-dispatch", label: "Dry Van Dispatch" },
                  { to: "/reefer-dispatch", label: "Reefer Dispatch" },
                  { to: "/flatbed-dispatch", label: "Flatbed Dispatch" },
                  { to: "/step-deck-dispatch", label: "Step Deck Dispatch" },
                  { to: "/power-only-dispatch", label: "Power Only Dispatch" },
                  { to: "/hotshot-dispatch", label: "Hotshot Dispatch" },
                  { to: "/box-truck-dispatch", label: "Box Truck Dispatch" },
                  { to: "/owner-operator-dispatch", label: "Owner Operator Dispatch" },
                  { to: "/small-fleet-dispatch", label: "Small Fleet Dispatch" },
                  { to: "/dedicated-dispatcher", label: "Dedicated Dispatcher" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-brand hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/services" className="text-brand hover:underline">All Services</Link></li>
                <li><Link to="/about" className="text-brand hover:underline">About Us</Link></li>
                <li><Link to="/carrier-setup" className="text-brand hover:underline">Carrier Setup</Link></li>
                <li><Link to="/contact" className="text-brand hover:underline">Contact</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function buildServiceHead(opts: {
  slug: string;
  title: string;
  description: string;
  serviceName: string;
  breadcrumbLabel: string;
  faqs: { q: string; a: string }[];
}) {
  const url = `https://www.skywardssolution.com/${opts.slug}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: opts.serviceName,
          name: opts.serviceName,
          url,
          provider: {
            "@type": "Organization",
            name: "Skywards Solution",
            url: "https://www.skywardssolution.com",
            telephone: "+1-614-209-0850",
          },
          areaServed: { "@type": "Country", name: "United States" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skywardssolution.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://www.skywardssolution.com/services" },
            { "@type": "ListItem", position: 3, name: opts.breadcrumbLabel, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: opts.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}