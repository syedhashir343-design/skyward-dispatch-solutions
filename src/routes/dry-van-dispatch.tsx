import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "Do you dispatch 53' dry vans nationwide?", a: "Yes. We book 53' dry van freight across all 48 states with a focus on the Midwest, Southeast, Texas triangle and Northeast lanes. Whether you run coast-to-coast or a regional loop, our dispatchers plan weeks — not one load at a time." },
  { q: "What percentage do you charge for dry van dispatch?", a: "We work on a transparent percentage of the gross load with no setup fees, no forced dispatch and no hidden charges. Our percentage is quoted upfront during onboarding based on your equipment, lanes and volume." },
  { q: "Can you help a new MC authority get started?", a: "Absolutely. Brand-new dry van authorities are one of our specialties. We complete broker carrier packets, request COIs, negotiate first loads and coach you through the first 90 days when brokers scrutinize new MCs the hardest." },
  { q: "How do you find better paying dry van loads?", a: "We combine DAT, Truckstop and our private broker network with real-time market analytics. Our dispatchers know which brokers pay on time, which lanes are undervalued this week and how to negotiate rate cons up before signing." },
  { q: "Do you handle detention, layover and TONU claims?", a: "Yes. Every rate confirmation we send you includes documented accessorial terms, and we chase every detention, layover and TONU claim on your behalf until it is paid or resolved." },
  { q: "How fast can I start running loads after signup?", a: "Most dry van carriers are onboarded within 24-48 hours. Once your carrier packet, insurance and authority are on file, we begin sourcing and negotiating the first load the same day." },
];

export const Route = createFileRoute("/dry-van-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "dry-van-dispatch",
      title: "Dry Van Dispatch Services USA — Skywards Solution",
      description:
        "Professional dry van dispatch for owner-operators & small fleets. Load booking, rate negotiation and 24/7 support across all 48 states. Call (614) 209-0850.",
      serviceName: "Dry Van Dispatch",
      breadcrumbLabel: "Dry Van Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Dry Van Dispatch",
        h1: "Dry Van Dispatch Services",
        h1Highlight: "Built for Owner-Operators.",
        intro:
          "Skywards Solution delivers full-service dry van dispatch for owner-operators, small fleets and independent carriers across the United States. From consistent weekly volume to aggressive rate negotiation, our dispatchers keep your 53' dry van loaded on the strongest lanes in the market.",
        sections: [
          {
            h2: "What Our Dry Van Dispatch Service Covers",
            body: [
              "Running a dry van without a dispatcher means hours on the load board, phone tag with brokers and rate confirmations that always seem to come in below what the market is actually paying. Skywards fixes that. We take over the entire load-planning process — sourcing, negotiating, booking, and following through on paperwork — so you drive more, wait less, and gross more per week.",
              "Every dry van carrier we dispatch is assigned to a dedicated dispatcher who learns your truck, your home time, your fuel network and your target rate per mile. That dispatcher plans loads two and three moves ahead so your reload is booked before you tarp your first drop. No dead-heading blind into a weak market. No sitting Sunday night waiting for a Monday load that never comes.",
            ],
          },
          {
            h2: "Dry Van Freight Lanes We Dispatch",
            body: [
              "Dry van is the largest freight category in North America, and lane quality varies week to week. Our dispatchers use DAT, Truckstop, live broker relationships and market analytics to steer your truck into paying lanes — not just whatever is available on the board.",
            ],
            h3s: [
              { h3: "Midwest to Southeast", body: "OH, IL, IN, MI and WI outbound to GA, FL, TN, NC and SC. High volume manufacturing, retail and food freight — a reliable weekly loop with strong return options through Atlanta." },
              { h3: "Texas Triangle & West", body: "DFW, Houston, San Antonio and El Paso pair well with Phoenix, LA and Denver reloads. We watch this triangle daily because rates can swing 30–40 cents per mile depending on the market cycle." },
              { h3: "Northeast Corridor", body: "PA, NJ, NY, MA and CT are heavy on paid loading, tolls and short hauls. We pre-negotiate detention, layover and repositioning so the Northeast pays like a long-haul, not a headache." },
              { h3: "Cross-Country Long Haul", body: "For teams and drivers who prefer 2,000+ mile runs, we build cross-country dry van moves with reloads pre-planned so you spend zero time deadheading." },
            ],
          },
          {
            h2: "How Skywards Books Higher-Paying Dry Van Loads",
            body: [
              "Load boards show every carrier the same freight. What separates a profitable week from a break-even week is who is on the phone with brokers, what leverage they use and how well they know the current market. Our dispatchers negotiate every single dry van load using live rate benchmarks, historical broker data and lane-specific market intelligence.",
              "We push rates up before signing rate confirmations — not after the fact. We hold brokers to their accessorials. We reject cheap freight that undercuts the market. And when a lane is soft, we reposition your truck strategically instead of hauling a losing load out of desperation.",
            ],
          },
          {
            h2: "Carrier Setup, Paperwork & Back Office Support",
            body: [
              "Behind every load booked is paperwork that owner-operators shouldn't have to manage alone. Skywards handles broker carrier packets, W-9s, COI requests, factoring submissions, rate confirmations, BOL follow-up and invoicing. If a broker drags on payment, we chase it. If a lumper receipt goes missing, we recover it. If detention is owed, we document it and collect.",
              "New authorities get extra attention. The first 90 days after activation are the hardest because brokers restrict credit and freight to new MCs. Our dispatchers know exactly which brokers work with new authorities, how to structure the first ten loads to build credit fast, and how to avoid the rookie mistakes that get carriers stuck on cheap freight.",
            ],
          },
        ],
        benefits: [
          "Dedicated dry van dispatcher who knows your truck",
          "48-state coverage with strong Midwest, Texas and Southeast lanes",
          "Aggressive rate negotiation on every rate confirmation",
          "New authority friendly — we help you build broker credit fast",
          "Detention, layover and TONU chased and collected",
          "Transparent percentage — no setup fees, no forced dispatch",
          "24/7 dispatch support including nights and weekends",
          "Full paperwork management: BOLs, rate cons, invoicing, factoring",
        ],
        faqs,
        ctaTitle: "Ready to run better dry van loads?",
        ctaBody:
          "Submit your carrier setup and a dedicated dry van dispatcher will call you within one business day.",
      }}
    />
  ),
});