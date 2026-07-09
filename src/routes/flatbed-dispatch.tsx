import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "Do you dispatch flatbed freight nationwide?", a: "Yes. We book flatbed loads across all 48 states with a heavy focus on the industrial Midwest, Texas oilfield lanes, Southeast building materials and the Northeast steel corridor." },
  { q: "What types of flatbed freight do you book?", a: "Steel coils, lumber, machinery, construction materials, roofing products, pipe, oilfield equipment, agricultural equipment, oversized non-permitted loads and coil racks. If it needs straps, chains or tarps, we book it." },
  { q: "Do you handle oversized or over-dimensional permits?", a: "We book legal-weight and legal-dimension flatbed freight without permitting. For oversized loads that require permits, we coordinate with the shipper or a permit service and structure the rate to cover the cost, so you're not out of pocket." },
  { q: "How do you negotiate tarping and strapping pay?", a: "Every flatbed rate confirmation we send includes documented tarping and strapping fees when applicable. We push back hard on brokers who try to bundle tarping into the linehaul — that's your labor, and it deserves to be paid separately." },
  { q: "Can you dispatch a step-deck or double-drop?", a: "Yes. Step-deck and double-drop carriers are welcome. We have a separate step-deck dispatch page as well, since those specialty trailers open up freight regular flatbeds can't haul." },
  { q: "How often do you get me detention on flatbed?", a: "Steel mills and lumber yards are notorious for holding trucks. We document arrival, in-time, out-time and load-out photos, then pursue detention aggressively. Flatbed carriers on our roster average multiple paid detention claims per month." },
];

export const Route = createFileRoute("/flatbed-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "flatbed-dispatch",
      title: "Flatbed Dispatch Services USA — Steel, Lumber & Machinery",
      description:
        "Flatbed dispatch for owner-operators & fleets. Steel, lumber, machinery and construction materials nationwide. Aggressive rate negotiation and tarping pay.",
      serviceName: "Flatbed Dispatch",
      breadcrumbLabel: "Flatbed Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Flatbed Dispatch",
        h1: "Flatbed Dispatch Services",
        h1Highlight: "Open-Deck Freight, Paid Right.",
        intro:
          "Skywards Solution dispatches flatbed carriers on steel, lumber, machinery, construction materials and oilfield freight across the United States. Flatbed freight rewards experienced dispatchers because tarping, strapping, and dimensional restrictions all impact rate — and we know exactly how to price them.",
        sections: [
          {
            h2: "Full-Service Flatbed Dispatch",
            body: [
              "Flatbed carriers face challenges dry van and reefer operators never see. Load-outs at steel mills can take four hours. Tarping in bad weather is unpaid labor unless it's negotiated. Lumberyards close at 3 PM. Construction site deliveries change without notice. Skywards Solution builds flatbed dispatch around those realities so your revenue reflects the work you actually do.",
              "Every flatbed carrier we dispatch is paired with a dedicated flatbed dispatcher who understands the equipment, the freight and the brokers. That dispatcher negotiates tarping and strapping pay upfront, pushes back on cheap loads that ignore accessorial work, and lines up reloads before you're ready to strap down the last piece.",
            ],
          },
          {
            h2: "Flatbed Freight Categories We Dispatch",
            body: [
              "Flatbed is a broad category, and the best carriers specialize in specific product types. We match your equipment, experience and preferences to the right freight.",
            ],
            h3s: [
              { h3: "Steel & Coils", body: "Coils from mills in OH, IN, IL, PA and AL. Requires coil racks or trough, chains and appropriate securement experience. Consistent high-paying freight with steady weekly demand." },
              { h3: "Lumber & Building Materials", body: "Southeast lumber outbound to the Northeast and Midwest. Roofing products, drywall, siding and windows to jobsites and lumberyards. Tarping is typically required and paid." },
              { h3: "Machinery & Equipment", body: "Construction equipment, agricultural machinery, industrial equipment. Requires strong tie-down experience and often chains rather than straps." },
              { h3: "Oilfield & Pipe", body: "Texas, Oklahoma, North Dakota and Pennsylvania oilfield freight. Cyclical but very strong-paying during active drilling periods." },
              { h3: "Concrete, Brick & Bagged Goods", body: "Construction site deliveries. Tarping typical, jobsite unload common. We negotiate stop-pay and detention to match the extra work." },
            ],
          },
          {
            h2: "How We Book Higher-Paying Flatbed Loads",
            body: [
              "The single biggest revenue leak in flatbed dispatch is tarping pay hidden inside the linehaul. Brokers know a driver who has already strapped down the load isn't going to walk away, and they price accordingly. Skywards Solution changes that dynamic by pricing tarping, strapping, coil chains and multiple stops as separate line items on the rate confirmation before you accept the load.",
              "We also filter brokers hard. Steel and coil freight in particular has legacy brokers who pay well and newer entrants who cut corners on detention and payment terms. We know the difference. Our flatbed carriers run with brokers who pay in 15 to 21 days on factoring, not 45 to 60.",
            ],
          },
          {
            h2: "Securement, Permits & Safety",
            body: [
              "Flatbed freight has stricter securement requirements than any other equipment type. We won't put you on a load your equipment isn't set up for — no coil freight without racks or trough, no over-dimensional freight without proper permitting, no oversized moves without route planning. That protects your safety and your CSA score.",
              "For legal flatbed freight, we handle everything: broker packets, insurance certificates naming shippers as additional insureds when required, rate confirmation review, BOL and photo documentation. If a broker asks for a load photo or tarping confirmation, your dispatcher walks you through what to send.",
            ],
          },
        ],
        benefits: [
          "Dedicated flatbed dispatcher who understands the equipment",
          "Tarping, strapping and stop pay negotiated up front",
          "Steel, lumber, machinery and oilfield lane expertise",
          "Coil-rack, chain and trough freight matched to your equipment",
          "Broker filtering — fast-pay flatbed brokers only",
          "Detention pursued aggressively on mill and lumberyard delays",
          "Transparent percentage pricing, no setup fees",
          "24/7 support during load-out and delivery",
        ],
        faqs,
        ctaTitle: "Run flatbed loads that pay for the work.",
        ctaBody:
          "Submit your carrier setup and a flatbed dispatcher will contact you within one business day.",
      }}
    />
  ),
});