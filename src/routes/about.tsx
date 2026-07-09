import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, Heart, Target, Truck } from "lucide-react";
import dispatcher from "@/assets/dispatcher.jpg";
import fleet from "@/assets/fleet.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Skywards Solution — Toledo Truck Dispatch" },
      {
        name: "description",
        content:
          "Learn about Skywards Solution, a Toledo, Ohio based truck dispatch company built for owner-operators and carriers across the United States.",
      },
      { property: "og:title", content: "About Skywards Solution" },
      {
        property: "og:description",
        content:
          "A carrier-first dispatch team based in Toledo, Ohio — dedicated dispatchers, transparent pricing and nationwide coverage.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Carrier-First", desc: "Every decision starts with what’s best for the truck and the driver." },
  { icon: Award, title: "Integrity", desc: "Transparent fees, honest communication, no hidden charges — ever." },
  { icon: Target, title: "Performance", desc: "We measure success in rate per mile, weekly gross and home time." },
  { icon: Compass, title: "Partnership", desc: "We work as an extension of your business, not as a vendor." },
];

function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">About Us</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Built in Toledo. <span className="block text-brand-light">Moving freight nationwide.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Skywards Solution is a US-based truck dispatch company helping owner-operators and
            carriers run smarter, more profitable operations across all 48 states.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img
              src={dispatcher}
              alt="Skywards dispatcher at work"
              loading="lazy"
              width={1600}
              height={1100}
              className="shadow-elegant w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Our Story</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground">
              We saw too many good carriers losing money on bad loads.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Skywards Solution was founded with one mission — give independent truckers the kind of
              back-office, negotiation and load-planning support that large fleets take for granted.
              From our Toledo, Ohio headquarters we coordinate freight across the country, building
              long-term relationships with brokers and shippers so our carriers stay loaded and paid.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              No call centers, no scripts, no inflated promises. Just real dispatchers who know
              freight, know rates and know how to keep your wheels turning.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Our Values</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              What we stand for on every load.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-7 shadow-soft">
                <div className="bg-gradient-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-xl">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative isolate overflow-hidden py-24">
        <img
          src={fleet}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "48", l: "States Served" },
              { v: "24/7", l: "Live Dispatch" },
              { v: "100%", l: "Transparent Pricing" },
              { v: "1:1", l: "Dedicated Dispatchers" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-gradient-brand text-6xl font-bold">{s.v}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="bg-gradient-brand text-brand-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl px-8 py-12 text-center sm:px-12 lg:flex-row lg:text-left">
          <div className="flex items-center gap-4">
            <div className="bg-white/15 flex h-14 w-14 items-center justify-center rounded-2xl">
              <Truck className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Let’s put your truck to work.</h3>
              <p className="text-white/80">Start your carrier setup in minutes.</p>
            </div>
          </div>
          <Link
            to="/carrier-setup"
            className="text-brand inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold shadow-soft hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}