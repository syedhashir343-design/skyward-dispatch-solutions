import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "What is a hotshot truck?", a: "A hotshot truck is typically a Class 3, 4 or 5 pickup truck (Ram 3500, F-350, F-450, F-550) pulling a gooseneck or bumper-pull trailer, generally 30'-40' in length. Hotshots move smaller, time-sensitive freight that doesn't need a full Class 8 tractor." },
  { q: "What freight do hotshots haul?", a: "Oilfield equipment, construction equipment, agricultural equipment, machinery, palletized freight, LTL consolidation, and expedited urgent freight. Hotshots specialize in loads too small or too urgent for a full semi." },
  { q: "Do I need MC authority for hotshot?", a: "Yes if you cross state lines with freight for hire. Interstate hotshot operations require MC and DOT authority, BOC-3, current insurance and the same regulatory compliance as a full-size trucking operation." },
  { q: "Can hotshots make good money?", a: "Well-dispatched hotshots gross $4,500 to $7,500+ per week. The lower operating cost of a pickup and trailer compared to a Class 8 tractor means the net can be very strong, especially on urgent and specialty freight where hotshots command premium rates." },
  { q: "What lanes are strongest for hotshot?", a: "Texas oilfield freight, Southeast construction and agriculture, and any lane with expedited or specialty demand. Hotshots also thrive on partial loads that a full semi wouldn't take at a profitable rate." },
  { q: "Do you dispatch bumper-pull and gooseneck hotshots?", a: "Yes. We dispatch both gooseneck and bumper-pull hotshot setups. Gooseneck trailers unlock more weight and length, but well-dispatched bumper-pull operators also stay very busy on smaller freight." },
];

export const Route = createFileRoute("/hotshot-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "hotshot-dispatch",
      title: "Hotshot Dispatch Services USA — Oilfield & Expedited Freight",
      description:
        "Hotshot dispatch for gooseneck and bumper-pull operators. Oilfield, construction, agriculture and expedited freight nationwide. Premium urgent-freight rates.",
      serviceName: "Hotshot Dispatch",
      breadcrumbLabel: "Hotshot Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Hotshot Dispatch",
        h1: "Hotshot Dispatch Services",
        h1Highlight: "Smaller Truck, Bigger Margins.",
        intro:
          "Skywards Solution dispatches hotshot carriers on oilfield, construction, agricultural and expedited freight across the United States. Hotshots aren't just smaller semis — they're a distinct segment of trucking with its own brokers, its own rate structure and its own dispatch strategy.",
        sections: [
          {
            h2: "Hotshot Dispatch That Understands the Segment",
            body: [
              "Hotshot operators too often get dispatched as if they were flatbed operators with a smaller trailer. That undersells the equipment and leaves money on the table. Hotshots command premium rates on urgent freight because the pickup-and-trailer combination can respond faster than a Class 8 tractor. Our dispatchers price hotshot freight for what it actually is — a specialized service that moves time-sensitive loads on tighter windows.",
              "Every hotshot carrier we dispatch is paired with a dispatcher who understands the freight brokers active in the hotshot space, the oilfield cycles, and the difference between a $2.50 per mile load that's actually profitable and a $2.50 per mile load that becomes a losing week. That specialization is why our hotshot operators consistently outperform generic freight dispatch.",
            ],
          },
          {
            h2: "Hotshot Freight Categories We Book",
            body: [
              "Hotshot freight lives in the gap between LTL and full-truckload flatbed. The best-paying loads for hotshots share one trait: they're either too small, too urgent or too specialized for a full semi to move economically.",
            ],
            h3s: [
              { h3: "Oilfield Equipment", body: "Texas, Oklahoma, New Mexico, North Dakota and Pennsylvania oilfield freight. Drilling equipment, pipe, valves, wellhead components and specialty tools. Cyclical but very strong when drilling is active." },
              { h3: "Construction Machinery", body: "Skid steers, mini excavators, compact equipment and attachments moved between jobsites. Consistent demand year-round with a summer peak." },
              { h3: "Agricultural Equipment", body: "Tractors, hay equipment, implements and specialty ag freight. Seasonal peaks during planting and harvest, with strong regional demand across the Midwest and Plains." },
              { h3: "Expedited & Time-Critical", body: "Emergency parts, expedited machinery, urgent replacement freight. Premium rates for carriers who can respond within hours instead of days." },
              { h3: "Partial Loads & LTL Consolidation", body: "Smaller shipments that don't fill a semi but are too large or urgent for parcel/LTL. Hotshots capture this market at margins full-size trucks can't match." },
            ],
          },
          {
            h2: "How We Negotiate Hotshot Rates",
            body: [
              "Rate negotiation on hotshot freight is different because the customer is often shipping urgent or specialty product where speed matters more than a few cents per mile. Skywards Solution leans into that reality. When freight is urgent, we push the rate hard because the shipper's cost of not moving is higher than the freight rate itself.",
              "We also filter out the cheap freight aggressively. Hotshot load boards are full of brokers hoping a smaller operator will accept flatbed rates minus a discount. That's not the value hotshots deliver, and we don't book carriers on it. Our hotshot operators run on premium urgent, specialty and oilfield freight — not underpriced flatbed leftovers.",
            ],
          },
          {
            h2: "Compliance and Equipment Requirements",
            body: [
              "Interstate hotshot operations are regulated exactly like any other commercial carrier. You need active MC and DOT authority, BOC-3 process agents, appropriate insurance including cargo coverage, and full FMCSA compliance including ELD if you cross the 150 air-mile radius. Our dispatchers verify all of this at onboarding and won't book you on freight your equipment or authority can't legally handle.",
              "For weights and dimensions, we track your specific trailer and truck combo — payload capacity, deck length, ramp availability, chains and straps you carry. Loads are only booked when they match your equipment's actual capability, not a generic hotshot spec.",
            ],
          },
        ],
        benefits: [
          "Dedicated hotshot dispatcher who knows the segment",
          "Oilfield, construction, agricultural and expedited freight",
          "Premium rate negotiation on urgent and specialty loads",
          "Broker filtering — no cheap flatbed leftovers",
          "Equipment-matched dispatch (payload, length, ramps)",
          "Full FMCSA compliance guidance for new hotshot authorities",
          "Transparent percentage pricing, no setup fees",
          "24/7 dispatch support for urgent tender response",
        ],
        faqs,
        ctaTitle: "Get your hotshot on premium urgent freight.",
        ctaBody:
          "Submit your carrier packet and a hotshot dispatcher will contact you within one business day.",
      }}
    />
  ),
});