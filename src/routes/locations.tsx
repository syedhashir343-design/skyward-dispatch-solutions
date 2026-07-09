import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

const cities = [
  { to: "/truck-dispatch-dallas", city: "Dallas", state: "TX", blurb: "DFW inland port, Texas triangle, Permian Basin oilfield" },
  { to: "/truck-dispatch-houston", city: "Houston", state: "TX", blurb: "Port of Houston drayage, petrochemical, Gulf Coast produce" },
  { to: "/truck-dispatch-chicago", city: "Chicago", state: "IL", blurb: "BNSF LPC, UP Global 4 intermodal, Midwest manufacturing" },
  { to: "/truck-dispatch-atlanta", city: "Atlanta", state: "GA", blurb: "Southeast DC hub, Dalton carpet corridor, poultry reefer" },
  { to: "/truck-dispatch-los-angeles", city: "Los Angeles", state: "CA", blurb: "Port of LA/LB drayage, Inland Empire, California produce" },
  { to: "/truck-dispatch-phoenix", city: "Phoenix", state: "AZ", blurb: "Nogales produce, TSMC semiconductor, Southwest crossroads" },
  { to: "/truck-dispatch-denver", city: "Denver", state: "CO", blurb: "Front Range distribution, Rocky Mountain routing, energy" },
  { to: "/truck-dispatch-miami", city: "Miami", state: "FL", blurb: "South Florida produce, Port of Miami, Latin American trade" },
  { to: "/truck-dispatch-charlotte", city: "Charlotte", state: "NC", blurb: "Piedmont manufacturing, High Point furniture, textile" },
  { to: "/truck-dispatch-memphis", city: "Memphis", state: "TN", blurb: "FedEx superhub, Mississippi Delta, Mid-South poultry" },
  { to: "/truck-dispatch-indianapolis", city: "Indianapolis", state: "IN", blurb: "Automotive parts, Eli Lilly pharma, Midwest crossroads" },
  { to: "/truck-dispatch-columbus", city: "Columbus", state: "OH", blurb: "Rickenbacker cargo, Intel Ohio, Honda automotive (our home)" },
  { to: "/truck-dispatch-kansas-city", city: "Kansas City", state: "MO", blurb: "Agricultural freight, Animal Health Corridor, rail intermodal" },
  { to: "/truck-dispatch-nashville", city: "Nashville", state: "TN", blurb: "GM Spring Hill, Nissan Smyrna, healthcare, construction" },
];

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Truck Dispatch Service Locations — Skywards Solution" },
      {
        name: "description",
        content:
          "Skywards Solution dispatches truck carriers across major US freight hubs — Dallas, Houston, Chicago, Atlanta, LA, Phoenix, Denver, Miami and more.",
      },
      { property: "og:title", content: "Truck Dispatch Locations — Skywards Solution" },
      {
        property: "og:description",
        content:
          "Dedicated dispatch across 14 major US freight markets. Find your city and start with a dispatcher who knows your lanes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.skywardssolution.com/locations" },
    ],
    links: [{ rel: "canonical", href: "https://www.skywardssolution.com/locations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skywardssolution.com/" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.skywardssolution.com/locations" },
          ],
        }),
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest">Locations</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            Truck dispatch across major US freight hubs
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">
            Skywards Solution dispatches carriers in 14 of the largest US freight markets. Find your
            city below to see the specific lanes, brokers and freight types we work in that market.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="bg-gradient-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">
                  {c.city}, {c.state}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  View {c.city} dispatch →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}