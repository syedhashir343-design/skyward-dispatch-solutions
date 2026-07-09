import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  HeadphonesIcon,
  Handshake,
  Layers,
  MessageSquare,
  Snowflake,
  TrendingUp,
  Truck,
  UserPlus,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Truck Dispatch Services USA — Skywards Solution" },
      {
        name: "description",
        content:
          "Full-service truck dispatch — dry van, reefer, flatbed, load booking, rate negotiation, broker communication, carrier setup, paperwork and 24/7 support.",
      },
      { property: "og:title", content: "Dispatch Services — Skywards Solution" },
      {
        property: "og:description",
        content:
          "Dry van, reefer and flatbed dispatch plus load booking, rate negotiation, broker comms and paperwork support — nationwide US coverage.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Truck, title: "Dry Van Dispatch", desc: "Steady weekly volume on profitable dry van lanes — east, west, Midwest and South." },
  { icon: Snowflake, title: "Reefer Dispatch", desc: "Temperature-controlled freight with strict tracking, fast detention follow-up and on-time delivery focus." },
  { icon: Layers, title: "Flatbed Dispatch", desc: "Open-deck, step-deck, conestoga and oversized loads matched to qualified, paying brokers." },
  { icon: ClipboardList, title: "Load Booking", desc: "Continuous load board sourcing plus our private broker network — we keep the truck moving." },
  { icon: TrendingUp, title: "Rate Negotiation", desc: "Aggressive, data-backed negotiation that pushes every load to the strongest rate per mile." },
  { icon: MessageSquare, title: "Broker Communication", desc: "We talk to brokers so you don’t have to — check calls, updates, issues, payment follow-up." },
  { icon: UserPlus, title: "Carrier Setup Assistance", desc: "Packet completion, COI requests and broker onboarding handled for you, start to finish." },
  { icon: FileText, title: "Paperwork Management", desc: "Rate cons, BOLs, invoicing and factoring submissions — fully managed from your dispatch desk." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Real, US-time-zone dispatchers reachable at any hour, including nights, weekends and holidays." },
];

const process = [
  { step: "01", title: "Onboard", desc: "Complete a quick carrier packet — MC, DOT, COI and authority documents." },
  { step: "02", title: "Strategize", desc: "We learn your equipment, home base, lanes and rate goals." },
  { step: "03", title: "Book", desc: "We source, negotiate and book loads matched to your plan." },
  { step: "04", title: "Roll", desc: "You drive. We handle brokers, paperwork and the next load." },
];

function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Services</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Every move your truck needs, <span className="text-brand-light">handled.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Skywards Solution delivers complete dispatch support so owner-operators and small fleets
            can focus on driving and growing — not chasing loads or fighting brokers.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="bg-gradient-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">How it works</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              From signed packet to first dispatch in days.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="relative rounded-2xl bg-card p-7 shadow-soft">
                <div className="text-gradient-brand text-5xl font-bold">{p.step}</div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-gradient-brand text-brand-foreground shadow-elegant relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="bg-brand-light/30 absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="relative">
            <Handshake className="mx-auto h-10 w-10 text-brand-light" />
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Let’s build your dispatch plan.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Tell us your equipment, lanes and goals — we’ll match you with a dedicated dispatcher and a real strategy.
            </p>
            <Link
              to="/carrier-setup"
              className="text-brand mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold shadow-soft hover:scale-105 transition-transform"
            >
              Start Carrier Setup <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}