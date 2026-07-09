import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "How is step-deck freight different from flatbed?", a: "Step-deck (or drop-deck) trailers have a lower rear deck that lets you haul taller freight without permits. That opens up 10'-6\" to 11'-6\" cargo that a standard flatbed would need permits for — machinery, equipment, tall crates and specialty loads." },
  { q: "What freight pays best on a step-deck?", a: "Construction and agricultural equipment, industrial machinery, tall crated freight, aerospace and military equipment, and tall pipe. Step-decks earn a premium over standard flatbed because fewer trucks can haul the freight legally." },
  { q: "Do you dispatch double-drop and RGN too?", a: "Yes. Double-drop, removable gooseneck (RGN), lowboy and specialty heavy-haul equipment are all welcome. Those trailers unlock even higher-value freight and we have brokers who specialize in that specialty market." },
  { q: "Can a step-deck run standard flatbed loads?", a: "Absolutely. Any freight that fits a flatbed also fits a step-deck. Your dispatcher will mix in high-paying tall freight with standard flatbed loads to keep the truck loaded on the best available combination each week." },
  { q: "How do you handle over-dimensional step-deck freight?", a: "Legal step-deck freight is booked directly. For over-dimensional loads that need permits or escorts, we work with permit services and route planning specialists, and structure the rate to reflect the additional coordination." },
  { q: "How much can I gross on a step-deck weekly?", a: "Well-dispatched step-deck carriers routinely gross $6,500 to $9,000+ per week depending on lanes, equipment and season. The premium over flatbed for tall freight is typically 10-25% per mile on the same route." },
];

export const Route = createFileRoute("/step-deck-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "step-deck-dispatch",
      title: "Step Deck Dispatch Services USA — Drop Deck & RGN Freight",
      description:
        "Step deck dispatch for owner-operators & carriers. Machinery, equipment and tall freight nationwide. Premium rates over standard flatbed with 24/7 support.",
      serviceName: "Step Deck Dispatch",
      breadcrumbLabel: "Step Deck Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Step Deck Dispatch",
        h1: "Step Deck Dispatch Services",
        h1Highlight: "Premium Rates on Tall Freight.",
        intro:
          "Skywards Solution dispatches step-deck, drop-deck and double-drop carriers on machinery, equipment and tall freight across the United States. Step-decks earn a premium over standard flatbed because fewer trucks are qualified to haul the freight — and our dispatchers know exactly how to capture that premium.",
        sections: [
          {
            h2: "Specialized Dispatch for Step-Deck Carriers",
            body: [
              "Step-deck freight sits in a sweet spot between flatbed and heavy-haul. You get the flexibility to haul standard flatbed loads when they pay, plus access to tall equipment and machinery freight that requires the lower deck height. That flexibility should translate into higher weekly gross — but only if your dispatcher understands both worlds.",
              "Every step-deck carrier we work with is assigned to a dedicated dispatcher who reads the market for both flatbed and step-deck freight simultaneously. When flatbed rates are strong we load you on flatbed freight. When tall machinery is paying a premium we shift you onto step-deck-specific loads. That dynamic balancing is what separates a well-dispatched step-deck from an average one.",
            ],
          },
          {
            h2: "Step-Deck Freight We Book",
            body: [
              "Step-deck opens up freight categories that pay significantly more per mile than standard flatbed. Our dispatchers actively seek out these categories rather than defaulting to whatever is on the load board.",
            ],
            h3s: [
              { h3: "Construction & Agricultural Equipment", body: "Excavators, dozers, tractors, combines and attachments. Height requires the drop deck; weight and securement demand experience. Reliable premium freight most of the year." },
              { h3: "Industrial Machinery", body: "Manufacturing equipment, presses, generators and process machinery. Often crated and often tall — perfect for step-deck. Premium rates especially on rush-freight lanes." },
              { h3: "Tall Crated & Palletized Freight", body: "Anything over 8'-6\" that a flatbed would need a permit for. Aerospace, defense, medical and specialty industrial cargo often falls in this category." },
              { h3: "Standard Flatbed Fill-In", body: "Steel, lumber and building materials to keep the truck loaded on strong flatbed lanes when tall freight isn't available." },
            ],
          },
          {
            h2: "How We Negotiate the Step-Deck Premium",
            body: [
              "Brokers will happily post step-deck freight at flatbed rates hoping a hungry carrier will grab it. Skywards Solution never lets that happen. Every step-deck rate confirmation we send accounts for the specialized equipment, the fewer available trucks in the market, and the additional securement and route planning that tall freight requires.",
              "We benchmark step-deck rates against DAT step-deck market data, our own historical booked rates on the same lanes, and real-time broker feedback. When a broker's opening offer is flatbed money for step-deck freight, we know exactly how much room they have and we negotiate it up.",
            ],
          },
          {
            h2: "Securement, Permits & Route Planning",
            body: [
              "Step-deck freight often lives right on the edge of legal dimensions. Our dispatchers pre-check height, width and weight against the actual trailer specs before you accept a load. If a piece of equipment is even a few inches taller than the shipper claimed, we address it before you deadhead to the pickup.",
              "For over-dimensional freight requiring permits or escorts, we coordinate with permit services, route planners and escort companies. The rate we negotiate reflects the additional coordination so you're compensated for the effort, not just the miles.",
            ],
          },
        ],
        benefits: [
          "Dedicated step-deck dispatcher who understands drop-deck freight",
          "Premium rates on machinery, equipment and tall freight",
          "Flexibility to run standard flatbed fill-in loads",
          "Pre-verified height, width and weight before you accept a load",
          "Broker filtering — specialty flatbed brokers only",
          "Permit and escort coordination for oversized freight",
          "Transparent percentage pricing, no forced dispatch",
          "24/7 support during load-out and route execution",
        ],
        faqs,
        ctaTitle: "Capture the step-deck premium.",
        ctaBody:
          "Submit your carrier packet and a dedicated step-deck dispatcher will call within one business day.",
      }}
    />
  ),
});