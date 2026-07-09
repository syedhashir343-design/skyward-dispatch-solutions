import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

export type LocationPageContent = {
  city: string;
  state: string;
  stateAbbr: string;
  intro: string;
  whyThisCity: string[];
  laneSections: { h3: string; body: string }[];
  equipmentBlurb: string;
  localAdvantages: string[];
  faqs: { q: string; a: string }[];
};

export function LocationPageLayout({ content }: { content: LocationPageContent }) {
  const cityState = `${content.city}, ${content.stateAbbr}`;
  return (
    <>
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand-light inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
            <MapPin className="h-4 w-4" /> {cityState}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            Truck Dispatch Services in {content.city}
            <span className="block text-brand-light">Dry Van · Reefer · Flatbed · Power Only</span>
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

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="max-w-3xl space-y-14">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why {content.city} carriers work with Skywards
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {content.whyThisCity.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {content.city} freight lanes we dispatch
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Every lane out of {cityState} has its own rate cycle, its own broker mix and its own
                seasonal pressure. Our dispatchers watch this market daily and steer your truck onto
                the freight that's actually paying this week — not last quarter's averages.
              </p>
              <div className="mt-8 space-y-6">
                {content.laneSections.map((s) => (
                  <div key={s.h3}>
                    <h3 className="text-xl font-semibold text-foreground">{s.h3}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Every equipment type dispatched from {content.city}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{content.equipmentBlurb}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm">
                {[
                  { to: "/dry-van-dispatch", label: "Dry Van Dispatch" },
                  { to: "/reefer-dispatch", label: "Reefer Dispatch" },
                  { to: "/flatbed-dispatch", label: "Flatbed Dispatch" },
                  { to: "/step-deck-dispatch", label: "Step Deck Dispatch" },
                  { to: "/power-only-dispatch", label: "Power Only Dispatch" },
                  { to: "/hotshot-dispatch", label: "Hotshot Dispatch" },
                  { to: "/box-truck-dispatch", label: "Box Truck Dispatch" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-brand hover:underline">
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Local dispatch advantages
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.localAdvantages.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {content.city} dispatch FAQ
              </h2>
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

          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="bg-gradient-brand text-brand-foreground rounded-3xl p-7 shadow-soft">
              <h3 className="text-xl font-bold">Serving {cityState} carriers</h3>
              <p className="mt-3 text-sm text-white/85">
                Get a dedicated dispatcher who knows the {content.city} freight market. New authorities welcome.
              </p>
              <Link
                to="/carrier-setup"
                className="text-brand mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold hover:scale-[1.02] transition-transform"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Other cities we serve
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { to: "/truck-dispatch-dallas", label: "Dallas, TX" },
                  { to: "/truck-dispatch-houston", label: "Houston, TX" },
                  { to: "/truck-dispatch-chicago", label: "Chicago, IL" },
                  { to: "/truck-dispatch-atlanta", label: "Atlanta, GA" },
                  { to: "/truck-dispatch-los-angeles", label: "Los Angeles, CA" },
                  { to: "/truck-dispatch-phoenix", label: "Phoenix, AZ" },
                  { to: "/truck-dispatch-denver", label: "Denver, CO" },
                  { to: "/truck-dispatch-miami", label: "Miami, FL" },
                  { to: "/truck-dispatch-charlotte", label: "Charlotte, NC" },
                  { to: "/truck-dispatch-memphis", label: "Memphis, TN" },
                  { to: "/truck-dispatch-indianapolis", label: "Indianapolis, IN" },
                  { to: "/truck-dispatch-columbus", label: "Columbus, OH" },
                  { to: "/truck-dispatch-kansas-city", label: "Kansas City, MO" },
                  { to: "/truck-dispatch-nashville", label: "Nashville, TN" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-brand hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function buildLocationHead(opts: {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  title: string;
  description: string;
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
          "@type": "LocalBusiness",
          name: `Skywards Solution — Truck Dispatch (${opts.city}, ${opts.stateAbbr})`,
          url,
          telephone: "+1-614-209-0850",
          email: "sam@skywardssolution.com",
          areaServed: { "@type": "City", name: `${opts.city}, ${opts.state}` },
          address: {
            "@type": "PostalAddress",
            streetAddress: "317 Locust St",
            addressLocality: "Toledo",
            addressRegion: "OH",
            postalCode: "43604",
            addressCountry: "US",
          },
          priceRange: "$$",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skywardssolution.com/" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.skywardssolution.com/locations" },
            { "@type": "ListItem", position: 3, name: `${opts.city}, ${opts.stateAbbr}`, item: url },
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