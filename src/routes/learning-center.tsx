import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, GraduationCap, LineChart, ShieldCheck, Truck } from "lucide-react";

const BASE = "https://www.skywardssolution.com";
const URL = `${BASE}/learning-center`;

const clusters = [
  {
    icon: Truck,
    title: "Truck Dispatch Services",
    desc: "How professional dispatch works, what dispatchers do daily, and how to choose one that actually moves your gross.",
    links: [
      { to: "/services", label: "All dispatch services" },
      { to: "/dry-van-dispatch", label: "Dry van dispatch" },
      { to: "/reefer-dispatch", label: "Reefer dispatch" },
      { to: "/flatbed-dispatch", label: "Flatbed dispatch" },
      { to: "/power-only-dispatch", label: "Power only dispatch" },
      { to: "/step-deck-dispatch", label: "Step deck dispatch" },
      { to: "/hotshot-dispatch", label: "Hotshot dispatch" },
      { to: "/box-truck-dispatch", label: "Box truck dispatch" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Owner Operator Success",
    desc: "Everything a one-truck operation needs to run profitably — from CPM math to broker credit and load planning.",
    links: [
      { to: "/owner-operator-dispatch", label: "Owner operator dispatch" },
      { to: "/small-fleet-dispatch", label: "Small fleet dispatch" },
      { to: "/dedicated-dispatcher", label: "Dedicated dispatcher model" },
      { to: "/carrier-setup", label: "Carrier setup checklist" },
    ],
  },
  {
    icon: LineChart,
    title: "Freight Market & Rates",
    desc: "How the spot market prices freight week to week — DAT, Truckstop, RPM, deadhead, fuel surcharge and rate negotiation.",
    links: [
      { to: "/blog", label: "Rate & market articles" },
      { to: "/services", label: "Rate negotiation service" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    desc: "FMCSA, DOT, ELD, CSA safety scores, MC/DOT paperwork, factoring and the operational basics every carrier must get right.",
    links: [
      { to: "/carrier-setup", label: "Carrier packet setup" },
      { to: "/about", label: "Our compliance approach" },
    ],
  },
  {
    icon: Compass,
    title: "Location & Lane Guides",
    desc: "Freight guides for major US markets — how lanes price, which brokers matter and where the freight actually pays.",
    links: [
      { to: "/locations", label: "All service locations" },
      { to: "/truck-dispatch-dallas", label: "Dallas, TX" },
      { to: "/truck-dispatch-houston", label: "Houston, TX" },
      { to: "/truck-dispatch-chicago", label: "Chicago, IL" },
      { to: "/truck-dispatch-atlanta", label: "Atlanta, GA" },
      { to: "/truck-dispatch-los-angeles", label: "Los Angeles, CA" },
    ],
  },
  {
    icon: BookOpen,
    title: "Trucking Business Growth",
    desc: "From single truck to small fleet — pricing dispatch fees, avoiding freight fraud, optimizing routes and scaling gross.",
    links: [
      { to: "/small-fleet-dispatch", label: "Scaling a fleet" },
      { to: "/blog", label: "Business & growth articles" },
    ],
  },
];

const topics = [
  "Truck Dispatch", "Owner Operators", "Dry Van", "Reefer", "Flatbed",
  "Power Only", "Box Truck", "Hotshot", "Step Deck", "Freight Brokers",
  "DAT Load Board", "Truckstop", "Factoring", "FMCSA", "DOT Compliance",
  "ELD Mandate", "Safety Scores", "Carrier Packets", "Freight Negotiation",
  "Dispatch Fees", "Freight Market", "Fuel Costs", "Trucking Technology",
  "Fleet Growth", "Freight Fraud", "Broker Credit", "Load Planning",
  "Deadhead Reduction", "Route Optimization", "RPM & CPM",
];

const faqs = [
  { q: "What is a truck dispatcher?", a: "A truck dispatcher is a logistics professional who books loads on behalf of a carrier, negotiates rates with freight brokers, handles carrier setup and paperwork, and coordinates pickup and delivery so the driver can focus on driving safely." },
  { q: "How much does truck dispatch cost?", a: "Most professional dispatch services charge a percentage of the gross load — typically 5% to 10%. Skywards Solution uses transparent percentage pricing with no setup fees, no forced dispatch and no hidden charges." },
  { q: "How much can an owner operator earn?", a: "Owner operator earnings depend on rate per mile, weekly miles, fixed costs and fuel efficiency. Well-dispatched owner operators typically gross $6,000–$9,000 per week; net income after fuel, insurance, maintenance and payments generally lands between $70,000 and $150,000 per year." },
  { q: "What is RPM in trucking?", a: "RPM stands for rate per mile — the freight rate a load pays divided by the loaded miles. It is the primary metric dispatchers and carriers use to compare loads and evaluate lane profitability." },
  { q: "What is deadhead in trucking?", a: "Deadhead miles are the miles a truck runs empty between a delivery and the next pickup. Reducing deadhead is one of the fastest ways to increase net revenue per week." },
  { q: "How do dispatchers negotiate rates?", a: "Dispatchers benchmark each lane against DAT and Truckstop market data, know which brokers pay above market, and use load history, equipment, and timing leverage to push posted rates upward before booking." },
  { q: "How does freight factoring work?", a: "A factoring company advances 90–97% of an invoice within 24 hours and collects from the broker later. Factoring solves cash flow for carriers who cannot wait 30–45 days for broker payment." },
  { q: "How do I start a trucking business?", a: "Get your MC and DOT numbers through FMCSA, secure primary liability and cargo insurance, complete BOC-3 process agent filing, set up an ELD, build a carrier packet, and either hire a dispatcher or subscribe to a load board." },
  { q: "What paperwork does a carrier need?", a: "MC/DOT authority, W-9, certificate of insurance, signed broker-carrier agreements, rate confirmations, bills of lading (BOL), proof of delivery (POD), and factoring NOA documents if factoring." },
  { q: "How do I find better loads?", a: "Combine a professional dispatcher with strong broker credit, prioritize lanes with balanced return freight, avoid brokers who consistently underpay, and negotiate every load rather than accepting the first posted rate." },
  { q: "What is DAT?", a: "DAT is the largest load board in North America — a subscription platform where freight brokers post available loads and carriers post available trucks, with real-time rate data used to benchmark negotiations." },
  { q: "What is Truckstop?", a: "Truckstop is a major freight load board and broker credit reporting platform used by carriers and dispatchers to find loads, verify broker credit, and price lanes." },
];

export const Route = createFileRoute("/learning-center")({
  head: () => ({
    meta: [
      { title: "Truck Dispatch Learning Center — Skywards Solution" },
      { name: "description", content: "The Skywards Solution Learning Center — dispatch, owner operator, freight market, compliance and lane guides for USA carriers. Everything owner operators and small fleets need to run profitably." },
      { property: "og:title", content: "Truck Dispatch Learning Center — Skywards Solution" },
      { property: "og:description", content: "Guides on truck dispatch, owner operator business, freight rates, FMCSA compliance and lane strategy for US carriers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Truck Dispatch Learning Center — Skywards Solution" },
      { name: "twitter:description", content: "Guides on truck dispatch, owner operator business, freight rates, compliance and lane strategy." },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Truck Dispatch Learning Center",
          url: URL,
          description: "Educational hub covering truck dispatch, owner operator business, freight market rates, FMCSA compliance and lane strategy for US carriers.",
          isPartOf: { "@type": "WebSite", name: "Skywards Solution", url: BASE },
          about: topics.map((t) => ({ "@type": "Thing", name: t })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
            { "@type": "ListItem", position: 2, name: "Learning Center", item: URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LearningCenter,
});

function LearningCenter() {
  return (
    <>
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand-light inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
            <BookOpen className="h-4 w-4" /> Learning Center
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            The Skywards Truck Dispatch Learning Center
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">
            Practical guides on truck dispatch, owner operator business, freight rates, FMCSA
            compliance and lane strategy — written by working dispatchers for US carriers who
            want to grow gross without cutting corners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/carrier-setup"
              className="text-brand inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              Get a Free Dispatch Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Browse the Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clusters.map((c) => (
              <article key={c.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="text-brand mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10">
                  <c.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-brand hover:underline">
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Topics we cover</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A working index of the trucking topics our dispatchers use every day. Every topic
            connects back to load booking, rate negotiation and keeping wheels turning.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Trucking &amp; dispatch FAQ</h2>
          <p className="mt-3 text-muted-foreground">
            The questions carriers ask most — with answers written for real operators, not marketing copy.
          </p>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6 open:shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-brand text-brand-foreground p-8 shadow-soft">
            <h3 className="text-2xl font-bold">Talk to a real dispatcher</h3>
            <p className="mt-3 text-white/85">
              Have a specific question about your truck, lane or setup? Get a free consultation
              with a Skywards dispatcher — no obligation, no forced signup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/carrier-setup"
                className="text-brand inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold hover:scale-105 transition-transform"
              >
                Start Carrier Setup <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}