import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { LiveLaneBoard } from "@/components/live-lane-board";
import { LiveReviews } from "@/components/live-reviews";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  HeadphonesIcon,
  Handshake,
  MapPin,
  Phone,
  Shield,
  Snowflake,
  Truck,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";
import heroTruck from "@/assets/hero-truck.webp";
import fleet from "@/assets/fleet.webp";
import dispatcher from "@/assets/dispatcher.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skywards Solution — USA Truck Dispatch Services" },
      {
        name: "description",
        content:
          "Skywards Solution — USA truck dispatch for owner-operators and small fleets. Load booking, rate negotiation, dry van, reefer, flatbed dispatch & 24/7 support.",
      },
      { property: "og:title", content: "Skywards Solution — USA Truck Dispatch Services" },
      {
        property: "og:description",
        content:
          "USA truck dispatch for owner-operators. Load booking, rate negotiation, dry van, reefer, flatbed dispatch & 24/7 dispatcher support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.skywardssolution.com/" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroTruck, fetchpriority: "high" },
      { rel: "canonical", href: "https://www.skywardssolution.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What does a truck dispatcher actually do?", acceptedAnswer: { "@type": "Answer", text: "We find and book loads on your behalf, negotiate the best rates with brokers, handle carrier setup packets, manage paperwork like rate confirmations and BOLs, and provide 24/7 support while you focus on driving." } },
            { "@type": "Question", name: "How much does Skywards Solution charge?", acceptedAnswer: { "@type": "Answer", text: "We work on a transparent percentage of the gross load — no setup fees, no hidden charges, no forced dispatch. Contact us for current rates tailored to your equipment." } },
            { "@type": "Question", name: "Do you work with new authorities?", acceptedAnswer: { "@type": "Answer", text: "Yes. We help brand-new MC holders get carrier packets completed and start booking real loads from day one." } },
            { "@type": "Question", name: "Which trailer types do you dispatch?", acceptedAnswer: { "@type": "Answer", text: "Dry van, reefer, flatbed, step-deck and conestoga. If you have an unusual setup, just ask." } },
            { "@type": "Question", name: "Where are you located and what areas do you cover?", acceptedAnswer: { "@type": "Answer", text: "We are based in Toledo, Ohio and dispatch across the entire continental United States." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Truck, title: "Dry Van Dispatch", desc: "Consistent freight, the best lanes, and reliable weekly volume for dry van operators." },
  { icon: Snowflake, title: "Reefer Dispatch", desc: "Temperature-controlled loads with strict tracking and on-time delivery focus." },
  { icon: Layers, title: "Flatbed Dispatch", desc: "Open-deck, step-deck and oversized — matched with the right brokers and rates." },
  { icon: TrendingUp, title: "Rate Negotiation", desc: "We fight for every cent so your trucks roll at the strongest rate-per-mile possible." },
  { icon: FileText, title: "Paperwork Management", desc: "Rate cons, BOLs, setup packets, invoicing — we handle the admin so you drive." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Real dispatchers on call day and night, weekends and holidays included." },
];

const whyUs = [
  { icon: Users, title: "Dedicated Dispatchers", desc: "One point of contact who knows your truck, your lanes and your goals." },
  { icon: Handshake, title: "Best Rate Negotiation", desc: "Aggressive, broker-savvy negotiation backed by real-time market data." },
  { icon: Clock, title: "Fast Communication", desc: "Replies in minutes, not hours. We move at the speed of freight." },
  { icon: Shield, title: "Reliable Support", desc: "Carrier-first, transparent, no hidden fees and no gimmicks." },
  { icon: MapPin, title: "Nationwide Coverage", desc: "All 48 states. Strong lanes east, west, Midwest and the South." },
  { icon: CheckCircle2, title: "Personalized Service", desc: "We tailor every plan to your equipment, schedule and home time." },
];

const testimonials = [
  {
    quote:
      "Skywards turned my single truck around. I’m running $13K–$14K a week gross consistently — better lanes, better rates, and they actually pick up the phone at 2 AM.",
    name: "Andres Carmona",
    role: "Owner-Operator · Dry Van · Ohio",
  },
  {
    quote:
      "I run reefer out of the Midwest and they keep me at $14K–$15K weekly without deadhead nightmares. Negotiation is on another level.",
    name: "Miraj Abidi",
    role: "Owner-Operator · Reefer · Illinois",
  },
  {
    quote:
      "Professional, transparent and fast. My flatbed is pulling steady $12K–$13K gross weekly and I don’t touch a load board anymore. I just drive and get paid.",
    name: "Hassan Mehmood",
    role: "Owner-Operator · Flatbed · Texas",
  },
  {
    quote:
      "First month with Skywards I cleared $15K gross on my hotshot. They actually understand partial loads and RGN work — not just van freight.",
    name: "Bergenick Cherishma",
    role: "Owner-Operator · Hotshot · Georgia",
  },
  {
    quote:
      "New authority, zero clue where to start. Skywards handled my carrier packets and had me booked on real broker loads in a week. Doing $12K weekly on day 30.",
    name: "Fredrick Green",
    role: "New Authority · Dry Van · New Jersey",
  },
  {
    quote:
      "Two trucks, both running $13K a week each. Detention gets billed, TONUs get chased, and I actually see my kids on weekends now.",
    name: "Charles Jackson",
    role: "Small Fleet Owner · 2 Trucks · California",
  },
  {
    quote:
      "I switched from a big-name dispatch service that kept me on cheap freight. Skywards has me at $14K+ per week on step-deck and treats me like a partner, not a number.",
    name: "Norman Morant",
    role: "Owner-Operator · Step Deck · Tennessee",
  },
  {
    quote:
      "Power-only was killing me until Skywards took over. Consistent $12K–$13K weeks, clean paperwork, and a dispatcher who answers on the first ring. That’s it — that’s the review.",
    name: "Herberth Lazo",
    role: "Owner-Operator · Power Only · Florida",
  },
];

const faqs = [
  {
    q: "What does a truck dispatcher actually do?",
    a: "We find and book loads on your behalf, negotiate the best rates with brokers, handle carrier setup packets, manage paperwork like rate confirmations and BOLs, and provide 24/7 support while you focus on driving.",
  },
  {
    q: "How much does Skywards Solution charge?",
    a: "We work on a transparent percentage of the gross load — no setup fees, no hidden charges, no forced dispatch. Contact us for current rates tailored to your equipment.",
  },
  {
    q: "Do you work with new authorities?",
    a: "Yes. We help brand-new MC holders get carrier packets completed and start booking real loads from day one.",
  },
  {
    q: "Which trailer types do you dispatch?",
    a: "Dry van, reefer, flatbed, step-deck and conestoga. If you have an unusual setup, just ask.",
  },
  {
    q: "Where are you located and what areas do you cover?",
    a: "We are based in Toledo, Ohio and dispatch across the entire continental United States.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-20">
        <img
          src={heroTruck}
          alt="Semi-truck driving on a US highway at golden hour"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-40">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              USA Nationwide Truck Dispatch
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
              Reliable Truck Dispatch <span className="block text-brand-light">Services Across the USA</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Helping owner-operators and trucking businesses maximize profits through dedicated
              dispatch services, load booking, rate negotiation and complete paperwork support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/carrier-setup"
                className="bg-gradient-brand text-brand-foreground group inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { v: "48", l: "States Served" },
                { v: "24/7", l: "Dispatch Support" },
                { v: "100%", l: "Carrier-First" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-white">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <LiveLaneBoard />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground sm:px-6 lg:px-8">
          <span>FMCSA Aware</span>
          <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:inline-block" />
          <span>DAT &amp; Truckstop Sourcing</span>
          <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:inline-block" />
          <span>Carrier-First Pricing</span>
          <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:inline-block" />
          <span>USA Nationwide</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">What we do</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              Full-service dispatch, <span className="text-gradient-brand">built around you</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From the moment your truck is empty to the moment you’re paid, we handle the work
              that keeps you off the load boards and on the road.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="bg-gradient-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="bg-brand-light/0 group-hover:bg-brand-light/10 absolute -right-12 -top-12 h-32 w-32 rounded-full transition-colors" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="text-brand inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SPLIT — ABOUT TEASER */}
      <section className="bg-gradient-sky py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={dispatcher}
              alt="Skywards dispatcher coordinating loads"
              loading="lazy"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">About Skywards</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              A Toledo-based dispatch team that treats your truck like our own.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We started Skywards Solution because owner-operators deserve better than load board
              chaos and broker games. From our office in Toledo, Ohio we move trucks across the
              entire country — with real strategy, real negotiation and real accountability.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Transparent percentage — no setup fees, no surprises",
                "Dedicated dispatcher matched to your equipment",
                "Detention, layover and TONU follow-up included",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link
                to="/about"
                className="text-brand inline-flex items-center gap-2 text-base font-semibold hover:gap-3 transition-all"
              >
                Learn more about us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Why Skywards</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              Built for carriers who refuse to settle.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl bg-surface-muted p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>

          <LiveReviews />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="relative isolate overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 254) 0%, oklch(0.30 0.10 252) 100%)" }}
      >
        <img
          src={fleet}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Carrier voices</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">$12K–$15K weeks. Consistently.</h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Real owner-operators and small fleets running with Skywards Solution — hitting
              $12,000 to $15,000 in gross revenue per truck, week after week.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-md"
              >
                <blockquote className="text-base leading-relaxed text-white/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/15 pt-4 text-white">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-white/60">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              Straight answers from the dispatch desk.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Still curious? Call <a href="tel:+16142090850" className="text-brand font-semibold">(614) 209-0850</a> or email <span className="text-brand font-semibold">sam@skywardssolution.com</span>
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow open:shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-semibold text-foreground">
                  {f.q}
                  <span className="bg-gradient-brand text-brand-foreground mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="bg-gradient-brand shadow-elegant relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-16 text-center text-brand-foreground sm:px-16">
          <div className="bg-brand-light/30 absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
          <h2 className="relative text-4xl font-bold sm:text-5xl">Ready to keep your truck loaded?</h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Get matched with a dedicated dispatcher today. No setup fees, no contracts — just better
            loads, better rates and real support.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/carrier-setup"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-brand shadow-soft transition-transform hover:scale-105"
            >
              Start Carrier Setup <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+16142090850"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5" /> (614) 209-0850
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
