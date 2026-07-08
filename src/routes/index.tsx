import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
import heroTruck from "@/assets/hero-truck.jpg";
import fleet from "@/assets/fleet.jpg";
import dispatcher from "@/assets/dispatcher.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skywards Solution — Truck Dispatch Services in Toledo, Ohio | USA Nationwide" },
      {
        name: "description",
        content:
          "Reliable truck dispatch services across the USA. Skywards Solution helps owner-operators maximize profits with dedicated dispatchers, load booking, rate negotiation and 24/7 support.",
      },
      { property: "og:title", content: "Skywards Solution — Truck Dispatch Services USA" },
      {
        property: "og:description",
        content:
          "Premium nationwide dispatch services for owner-operators and carriers — load booking, rate negotiation, paperwork and 24/7 support from Toledo, OH.",
      },
      { property: "og:type", content: "website" },
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
      "Skywards turned my single truck operation around. Better loads, better rates, and they actually pick up the phone at 2 AM.",
    name: "Marcus D.",
    role: "Owner-Operator · Dry Van",
  },
  {
    quote:
      "I run reefer out of the Midwest and these guys keep my truck full every week. Negotiation is on another level.",
    name: "Yelena P.",
    role: "Owner-Operator · Reefer",
  },
  {
    quote:
      "Professional, transparent and fast. The paperwork support alone is worth it — I just drive and get paid.",
    name: "Anthony R.",
    role: "Carrier · 6 Trucks",
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

const TWO_HOURS_MS = 2 * 60 * 60 * 1000;

const featuredLanes = [
  {
    lane: "Toledo, OH → Dallas, TX",
    miles: "1,128",
    rpm: "$2.85",
    gross: "$3,215",
    note: "Strong southbound dry van demand",
    lift: "+18%",
  },
  {
    lane: "Columbus, OH → Atlanta, GA",
    miles: "558",
    rpm: "$3.10",
    gross: "$1,730",
    note: "Fast reload options into the Midwest",
    lift: "+16%",
  },
  {
    lane: "Detroit, MI → Nashville, TN",
    miles: "533",
    rpm: "$3.05",
    gross: "$1,626",
    note: "Balanced miles with steady broker volume",
    lift: "+15%",
  },
  {
    lane: "Chicago, IL → Charlotte, NC",
    miles: "756",
    rpm: "$2.92",
    gross: "$2,208",
    note: "High-volume lane with solid reloads",
    lift: "+17%",
  },
  {
    lane: "Indianapolis, IN → Tampa, FL",
    miles: "990",
    rpm: "$2.78",
    gross: "$2,752",
    note: "Long-haul run with warm-weather freight",
    lift: "+14%",
  },
  {
    lane: "Cleveland, OH → Kansas City, MO",
    miles: "804",
    rpm: "$2.95",
    gross: "$2,372",
    note: "Clean Midwest-to-plains routing",
    lift: "+19%",
  },
];

function getCurrentLane() {
  const slot = Math.floor(Date.now() / TWO_HOURS_MS);
  return featuredLanes[slot % featuredLanes.length];
}

function useFeaturedLane() {
  const [lane, setLane] = useState(featuredLanes[0]);

  useEffect(() => {
    let timeoutId: number;

    setLane(getCurrentLane());

    const scheduleNextUpdate = () => {
      const timeUntilNextSlot = TWO_HOURS_MS - (Date.now() % TWO_HOURS_MS) + 1000;
      timeoutId = window.setTimeout(() => {
        setLane(getCurrentLane());
        scheduleNextUpdate();
      }, timeUntilNextSlot);
    };

    scheduleNextUpdate();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return lane;
}

function Index() {
  const featuredLane = useFeaturedLane();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-20">
        <img
          src={heroTruck}
          alt="Semi-truck driving on a US highway at golden hour"
          width={1920}
          height={1088}
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
            <div className="relative ml-auto w-full max-w-md">
              <div className="shadow-elegant rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-light">Today's lane</div>
                <div className="mt-3 text-2xl font-bold text-white">{featuredLane.lane}</div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-xs text-white/60">Miles</div>
                    <div className="text-lg font-semibold text-white">{featuredLane.miles}</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-xs text-white/60">RPM</div>
                    <div className="text-lg font-semibold text-white">{featuredLane.rpm}</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-xs text-white/60">Gross</div>
                    <div className="text-lg font-semibold text-white">{featuredLane.gross}</div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl bg-brand-light/20 p-4 text-sm text-white">
                  <span className="font-medium">{featuredLane.note}</span>
                  <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand-dark">{featuredLane.lift}</span>
                </div>
              </div>
              <div className="bg-brand-light/30 absolute -inset-6 -z-10 rounded-[2rem] blur-3xl" />
            </div>
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
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Drivers don’t leave us. They tell us why.</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
