import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "What does a dispatcher do for an owner-operator?", a: "An owner-operator dispatcher finds and books loads, negotiates rates with brokers, handles carrier setup packets, manages rate confirmations and BOLs, chases detention and accessorials, and provides 24/7 support — freeing you to drive and grow instead of working the phone." },
  { q: "What percentage do dispatch services charge?", a: "Most owner-operator dispatch services charge 5-10% of the gross load. Skywards Solution quotes a transparent percentage upfront during onboarding based on your equipment, lanes and volume — no setup fees, no forced dispatch and no hidden charges." },
  { q: "Do I need my own authority to work with you?", a: "Yes. Skywards Solution dispatches carriers who hold their own MC and DOT authority. We don't operate under our own authority — you remain in full control of your business, insurance and freight." },
  { q: "Can you dispatch a brand new owner-operator?", a: "Absolutely. New MC holders are one of our specialties. We complete broker packets, coach you through the first 90 days when brokers scrutinize new authorities the hardest, and structure your first loads to build broker credit fast." },
  { q: "Do you dispatch team owner-operators?", a: "Yes. Team owner-operators — husband/wife teams, driver partnerships, or dual-driver operations — unlock long-haul team freight at premium rates. We build weekly dispatch plans specifically for teams to maximize the drive-time advantage." },
  { q: "Can I keep loads I find myself?", a: "Yes. Our carriers are always free to book their own loads. We don't lock you into forced dispatch. If you have a direct broker relationship or want to run a specific load, you keep 100% of that revenue with no dispatch fee." },
];

export const Route = createFileRoute("/owner-operator-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "owner-operator-dispatch",
      title: "Owner Operator Dispatch Services USA — Skywards Solution",
      description:
        "Owner-operator dispatch for independent truckers. Dedicated dispatcher, aggressive rate negotiation, paperwork support and no forced dispatch. All 48 states.",
      serviceName: "Owner Operator Dispatch",
      breadcrumbLabel: "Owner Operator Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Owner Operator Dispatch",
        h1: "Dispatch Services for Owner-Operators",
        h1Highlight: "You Drive. We Handle the Rest.",
        intro:
          "Skywards Solution provides dedicated dispatch services for owner-operators who want to grow their business without spending nights on load boards. From single-truck independent operators to seasoned owner-operators looking to add capacity, our carrier-first dispatch model keeps you loaded, paid and profitable.",
        sections: [
          {
            h2: "Why Owner-Operators Choose Skywards",
            body: [
              "Owner-operators run the leanest, most efficient trucking operations in the country — but they also carry every function of a full trucking company on their shoulders. Load sourcing, rate negotiation, broker packets, insurance, factoring, invoicing, dispute resolution and customer service all fall on the driver. Skywards Solution takes the back-office load off so you can focus on what makes owner-operators profitable: driving smart miles.",
              "We built this dispatch service around what real owner-operators told us they needed: aggressive rate negotiation, transparent pricing, respect for home time, no forced dispatch, and dispatchers who actually pick up the phone at 2 AM when a load goes sideways. That's what we deliver.",
            ],
          },
          {
            h2: "How We Dispatch Owner-Operators",
            body: [
              "Every owner-operator on our roster is paired with a dedicated dispatcher — one point of contact who learns your truck, your fuel network, your home time and your target rate per mile. That relationship is what separates real dispatch from a call center rotating your account through whoever picks up the phone.",
            ],
            h3s: [
              { h3: "Weekly Load Planning", body: "Your dispatcher plans two and three loads ahead so your reload is booked before you drop your current freight. No dead-heading blind, no Sunday-night scrambling for a Monday pickup." },
              { h3: "Aggressive Rate Negotiation", body: "Every rate confirmation is negotiated using live market data, historical broker rates and lane-specific benchmarks. We push rates up before signing, not after." },
              { h3: "Broker Setup & Paperwork", body: "Broker packets, insurance certificates, W-9s, factoring submissions, rate cons and BOLs — all handled by your dispatch team." },
              { h3: "Home Time Respect", body: "Tell us when you need to be home. Every dispatch plan is built to end you within reasonable range of your home base on the day you asked for." },
            ],
          },
          {
            h2: "New Authority Owner-Operator Support",
            body: [
              "The first 90 days after activating a new MC are the hardest period in any owner-operator's career. Brokers restrict credit and freight to new authorities. Factoring companies charge higher rates until history is built. Insurance premiums are at their highest. Skywards Solution specializes in getting new owner-operators past this valley quickly.",
              "We know which brokers work with new authorities from day one. We structure the first ten loads to build broker credit fast. We coach you through insurance certificate requirements, factoring setup and the specific mistakes rookies make that cost them thousands in the first three months. New authority isn't a barrier with us — it's a segment we've built dispatch expertise around.",
            ],
          },
          {
            h2: "Transparent Pricing and No Forced Dispatch",
            body: [
              "Two red flags define bad owner-operator dispatch services: hidden fees and forced dispatch. Skywards Solution has neither. Our pricing is a straightforward percentage of gross load, quoted upfront during onboarding, with no setup fees, no monthly minimums and no hidden accessorial charges.",
              "We also don't force freight on you. Every load is offered with the rate, lane and pickup terms in advance. If you don't want the load, don't take it — no penalty, no argument. If you find a load yourself, run it and keep 100% of the revenue. Our model works because we consistently offer better freight than you'd find on your own, not because we lock you in.",
            ],
          },
        ],
        benefits: [
          "Dedicated dispatcher — not a rotating call center",
          "Aggressive rate negotiation on every load",
          "Transparent percentage pricing, no setup fees",
          "No forced dispatch — accept or pass any load",
          "New authority friendly with 90-day fast-start support",
          "Full broker packet, COI and paperwork management",
          "Home time respected in every dispatch plan",
          "24/7 support including nights, weekends and holidays",
        ],
        faqs,
        ctaTitle: "Owner-operators earn more with the right dispatch.",
        ctaBody:
          "Submit your carrier packet and a dedicated owner-operator dispatcher will call you within one business day.",
      }}
    />
  ),
});