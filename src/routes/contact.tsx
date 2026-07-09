import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Skywards Solution — Truck Dispatch in Toledo, Ohio" },
      {
        name: "description",
        content:
          "Get in touch with Skywards Solution. Call (614) 209-0850, email sam@skywardssolution.com or visit our office at 317 Locust St, Toledo, OH 43604.",
      },
      { property: "og:title", content: "Contact Skywards Solution" },
      {
        property: "og:description",
        content:
          "Reach our Toledo, Ohio dispatch team — phone, email, address and 24/7 carrier support.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Skywards Solution",
          url: "https://skyward-dispatch-solutions.lovable.app",
          image: "https://skyward-dispatch-solutions.lovable.app/favicon.ico",
          telephone: "+1-614-209-0850",
          email: "sam@skywardssolution.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "317 Locust St",
            addressLocality: "Toledo",
            addressRegion: "OH",
            postalCode: "43604",
            addressCountry: "US",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          areaServed: { "@type": "Country", name: "United States" },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-brand text-brand-foreground relative overflow-hidden pt-32 pb-20">
        <div className="bg-brand-light/20 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Contact</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Talk to a real dispatcher today.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Call, email or stop by our Toledo office. We answer fast — usually within minutes during
            business hours, and 24/7 for active carriers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Phone, title: "Phone", value: "(614) 209-0850", href: "tel:+16142090850" },
            { icon: Mail, title: "Email", value: "sam@skywardssolution.com" },
            { icon: MapPin, title: "Office", value: "317 Locust St, Toledo, OH 43604" },
            { icon: Clock, title: "Hours", value: "Mon–Sun · 24/7 for carriers" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-elegant hover:-translate-y-1">
              <div className="bg-gradient-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
                <c.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</h2>
              {c.href ? (
                <a href={c.href} className="text-brand mt-2 block text-lg font-semibold hover:underline">
                  {c.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-semibold text-foreground">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Skywards Solution Office Location"
            src="https://www.google.com/maps?q=317+Locust+St,+Toledo,+OH+43604&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </>
  );
}