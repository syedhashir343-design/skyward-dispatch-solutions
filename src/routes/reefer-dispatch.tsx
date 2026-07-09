import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "Do you dispatch reefer loads in the produce season?", a: "Yes. We have dedicated broker and shipper relationships across California, Arizona, Florida, Georgia and the Pacific Northwest produce belts. During produce season we run reefer carriers on strong outbound rates with pre-planned reload strategies." },
  { q: "How do you handle temperature and tracking requirements?", a: "Every reefer load we book includes documented temperature parameters, pre-cool requirements and tracking expectations captured on the rate confirmation. If a broker requires Macropoint, FourKites or live check calls, your dispatcher coordinates it so you're never blindsided at pickup." },
  { q: "Do you dispatch reefer trainees or new authorities?", a: "Yes, though reefer requires more diligence than dry van. New MC reefer carriers need proper reefer breakdown coverage and food-grade wash tickets ready. We'll walk you through what brokers require and start you on carriers who work with newer authorities." },
  { q: "What happens if I have a reefer breakdown on a load?", a: "Call us immediately. Your dispatcher notifies the broker, coordinates with reefer repair, documents the delay and negotiates the disposition of the load. Fast, documented communication protects you from a claim on the freight." },
  { q: "Do you get detention paid on reefer freight?", a: "Yes. Reefer detention is one of the biggest areas we recover money for carriers — grocery warehouses and cold storage facilities regularly hold trucks. We document arrival time, in-time, out-time and lumper receipts and pursue every claim." },
  { q: "What reefer lanes pay the best?", a: "Reefer rates cycle with produce, grocery restock and frozen distribution. Currently CA/AZ produce outbound, Midwest to Southeast frozen, Florida produce outbound and cross-country grocery restock are the most consistent high-paying reefer lanes we book." },
];

export const Route = createFileRoute("/reefer-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "reefer-dispatch",
      title: "Reefer Dispatch Services USA — Temperature Controlled Freight",
      description:
        "Reefer dispatch for owner-operators & carriers. Produce, frozen and grocery freight nationwide. Aggressive negotiation, 24/7 support, transparent pricing.",
      serviceName: "Reefer Dispatch",
      breadcrumbLabel: "Reefer Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Reefer Dispatch",
        h1: "Reefer Dispatch Services",
        h1Highlight: "Refrigerated Freight, Handled Right.",
        intro:
          "Skywards Solution dispatches reefer carriers on produce, frozen and grocery freight across the United States. Temperature-controlled freight demands more coordination than any other equipment type, and our dispatchers specialize in the timing, tracking and negotiation that keeps reefer trucks profitable.",
        sections: [
          {
            h2: "Reefer Dispatch That Pays More Per Mile",
            body: [
              "Reefer is the highest-paying trailer type in most weeks of the year, but only for carriers who know which lanes are strong, which brokers pay fast and which shippers don't hold trucks for eight hours at the dock. Skywards Solution builds reefer dispatch strategies around exactly those factors — we don't just take the first cold load on the board.",
              "Every reefer carrier we work with is paired with a dedicated dispatcher who understands reefer specifics: pre-cool times, pulp temperatures, multi-stop grocery drops, backhauls out of cold storage, and how to negotiate detention when a shipper turns you into a warehouse. That knowledge translates directly into higher weekly gross and fewer surprises on the dock.",
            ],
          },
          {
            h2: "Reefer Freight Types We Dispatch",
            body: [
              "Refrigerated freight covers a wider range of products than most carriers realize. Our reefer dispatchers place your truck on the products that match your operating pattern and rate expectations.",
            ],
            h3s: [
              { h3: "Produce & Fresh", body: "Seasonal produce from California, Arizona, Florida, Georgia and the Pacific Northwest. Fast pickups, tight delivery windows and consistently strong outbound rates during peak season." },
              { h3: "Frozen Foods", body: "Ice cream, frozen meats, seafood and prepared meals. Longer transit windows, less time-sensitive than produce, ideal for drivers who prefer predictable schedules." },
              { h3: "Grocery Restock", body: "Cross-country grocery distribution runs. Multi-stop deliveries to regional distribution centers pay well but require patience and tight paperwork." },
              { h3: "Pharmaceutical & Cold Chain", body: "Higher-value cold chain freight with stricter temperature and documentation requirements. Higher rates for carriers who can meet the compliance bar." },
            ],
          },
          {
            h2: "How We Book Better Reefer Rates",
            body: [
              "Reefer rates move faster than dry van. A lane that paid $3.20 per mile last week can be $2.40 this week if produce shifts to another region. Our dispatchers monitor DAT reefer market analytics daily and adjust your dispatch plan in real time.",
              "We negotiate every rate confirmation aggressively — pushing for detention terms, layover pay, TONU protection and reasonable delivery appointments before you're locked in. We also filter out brokers with slow-pay reputations and shippers known for eight-hour dock times. That filtering alone protects thousands of dollars in reefer dispatch every month.",
            ],
          },
          {
            h2: "Reefer Breakdown, Rejection & Claim Support",
            body: [
              "Reefer freight has failure modes dry van doesn't. Trailer breakdowns, load rejections, temperature disputes and lumper fees all show up in refrigerated dispatch, and every one of them can cost you the entire load if handled poorly. Skywards Solution stands between you and the broker when things go wrong.",
              "If your reefer unit fails, we coordinate repair, document communication and negotiate load disposition. If a receiver rejects freight, we handle broker communication, documentation and salvage instructions. If detention or lumper reimbursement is owed, we pursue every dollar. This claim-side work is the difference between reefer being a profitable operation and a stressful one.",
            ],
          },
        ],
        benefits: [
          "Dedicated reefer dispatcher familiar with produce and cold chain",
          "Nationwide coverage with strong CA, AZ, FL, GA and PNW produce lanes",
          "Documented temperature and pre-cool terms on every rate con",
          "Detention, layover, TONU and lumper recovery",
          "Broker filtering — we skip slow-pay and dock-holding shippers",
          "24/7 support for reefer breakdowns and load issues",
          "Transparent percentage pricing — no forced dispatch",
          "Full paperwork, factoring and invoicing support",
        ],
        faqs,
        ctaTitle: "Put your reefer on stronger loads.",
        ctaBody:
          "Submit your carrier packet and a dedicated reefer dispatcher will contact you within one business day.",
      }}
    />
  ),
});