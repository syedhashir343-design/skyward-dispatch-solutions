import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "What size box trucks do you dispatch?", a: "We dispatch 16', 20', 22', 24' and 26' box trucks — both non-CDL and CDL configurations. Whether you're running a straight truck under 26,000 GVW or a 26' box with liftgate, our dispatchers place you on freight that matches your equipment." },
  { q: "What freight is best for box trucks?", a: "Palletized freight, LTL consolidation, expedited freight, Amazon Relay box truck freight, medical supplies, retail restock, last-mile freight and specialty deliveries. Box trucks capture freight between LTL and full-truckload." },
  { q: "Do I need MC authority for a box truck?", a: "For interstate for-hire freight, yes — regardless of vehicle size. Intrastate operations depend on your state's rules. Our dispatchers verify your authority and insurance meet the requirements of every load we book." },
  { q: "How much can a box truck gross per week?", a: "Well-dispatched box trucks typically gross $3,500 to $6,500 per week. Box trucks have lower operating cost than a full semi, so net margins can be strong on the right freight mix." },
  { q: "Can I run Amazon Relay with a box truck?", a: "Yes. Amazon Relay has a box truck program for straight trucks and cargo vans. We help you onboard with Relay and build a weekly dispatch plan that combines Relay tenders with other box truck freight to maximize weekly gross." },
  { q: "What about liftgate and pallet jack requirements?", a: "Many box truck loads require a liftgate and pallet jack for delivery to businesses without a dock. Your dispatcher captures your equipment specs at onboarding and only books freight that matches — no surprises at the delivery." },
];

export const Route = createFileRoute("/box-truck-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "box-truck-dispatch",
      title: "Box Truck Dispatch Services USA — Straight Truck & Amazon Relay",
      description:
        "Box truck dispatch for 16', 20', 24' and 26' straight trucks. Amazon Relay, expedited freight, LTL consolidation nationwide. Transparent pricing, 24/7 support.",
      serviceName: "Box Truck Dispatch",
      breadcrumbLabel: "Box Truck Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Box Truck Dispatch",
        h1: "Box Truck Dispatch Services",
        h1Highlight: "Straight Truck Freight, Booked Right.",
        intro:
          "Skywards Solution dispatches box trucks and straight trucks across the United States on expedited freight, palletized loads, Amazon Relay box truck freight and last-mile delivery. Box trucks are one of the fastest-growing segments of trucking, and our dispatchers know exactly how to keep them profitable.",
        sections: [
          {
            h2: "Dispatch Built for Straight Trucks",
            body: [
              "Box trucks operate in a completely different freight market than tractor-trailers. Load boards that work for semis are mostly useless for straight trucks, and brokers who dominate full-truckload freight often don't dispatch box truck freight at all. That mismatch is why many box truck owners struggle to stay loaded — the freight is out there, but it lives with different brokers, in different systems, and at different rates.",
              "Skywards Solution built a box truck dispatch service specifically for straight trucks. Our dispatchers know the shippers, brokers and platforms that actually move box truck freight. We match your equipment size, liftgate configuration and geographic preferences to freight that pays consistently — not the leftover scraps most generic dispatchers offer.",
            ],
          },
          {
            h2: "Box Truck Freight Types We Dispatch",
            body: [
              "The freight mix that works for a box truck differs from a semi. Our dispatchers actively build a book of business around the categories that keep straight trucks profitable.",
            ],
            h3s: [
              { h3: "Amazon Relay Box Truck", body: "Amazon operates a box truck program for straight trucks and larger cargo vans. Once you're onboarded, we build weekly dispatch around Relay tenders combined with other freight to eliminate gaps." },
              { h3: "Expedited & Urgent Freight", body: "Time-critical shipments where the customer values speed over cost. Box trucks capture this freight at premium rates because they can respond faster than an LTL carrier and cheaper than a full semi." },
              { h3: "Palletized & LTL Consolidation", body: "Multi-pallet freight that doesn't fill a semi but is too large for parcel. Consistent volume across every region." },
              { h3: "Medical, Retail & Last-Mile", body: "Medical supply deliveries, retail restock and last-mile delivery to businesses without loading docks. Requires liftgate and pallet jack; pays a premium for the equipment." },
              { h3: "Specialty & White-Glove", body: "High-value or fragile freight requiring careful handling. Furniture, electronics, specialty equipment — often paying multiples of standard freight rates." },
            ],
          },
          {
            h2: "Matching Freight to Your Equipment",
            body: [
              "Not all box trucks are the same. A 16' non-CDL box truck without a liftgate serves a different market than a 26' CDL box truck with liftgate and pallet jack. Our dispatchers capture the exact specifications of your equipment during onboarding — deck length, GVW rating, liftgate capacity, ramp, pallet jack, e-track — and only book freight that matches what you can actually deliver.",
              "That equipment-matching is critical because box truck freight often includes delivery to sites without a dock. A load that requires a liftgate and pallet jack becomes a disaster if your truck doesn't have them. We eliminate those surprises before you accept the load.",
            ],
          },
          {
            h2: "Rate Negotiation and Backhaul Planning",
            body: [
              "Box truck rates are often posted lower than they should be because straight truck operators are perceived as easier to underprice. Skywards Solution pushes back on that assumption. Every rate confirmation we send is negotiated against real market data for box truck freight, and we won't book carriers on freight that doesn't cover operating cost plus a reasonable margin.",
              "We also plan backhauls. Box truck operators often bleed revenue on empty return miles. Our dispatchers pre-plan return freight so your truck runs loaded in both directions whenever possible, which materially improves weekly net.",
            ],
          },
        ],
        benefits: [
          "Dedicated box truck dispatcher familiar with the segment",
          "Amazon Relay box truck onboarding and dispatch support",
          "Expedited, palletized, medical and last-mile freight",
          "Equipment-matched dispatch (size, liftgate, pallet jack)",
          "Backhaul planning to reduce empty return miles",
          "Rate negotiation against real box truck market data",
          "Transparent percentage pricing, no setup fees",
          "24/7 dispatch support",
        ],
        faqs,
        ctaTitle: "Turn your box truck into consistent revenue.",
        ctaBody:
          "Submit your carrier packet and a box truck dispatcher will contact you within one business day.",
      }}
    />
  ),
});