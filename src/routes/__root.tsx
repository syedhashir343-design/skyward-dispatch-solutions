import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Toaster } from "../components/ui/sonner";
import { ChatAssistant } from "../components/chat-assistant";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Skywards Solution — Truck Dispatch Services USA" },
      { name: "description", content: "Toledo-based USA truck dispatch company for owner-operators and small fleets — load booking, rate negotiation, paperwork and 24/7 dispatch support." },
      { name: "author", content: "Skywards Solution" },
      // Search engine verification — replace the placeholder content values
      // with the codes issued by Google Search Console and Bing Webmaster Tools.
      // Google: Search Console → Add property → URL prefix → HTML tag.
      // Bing:   Webmaster Tools → Add site → Meta tag (or "Import from GSC").
      { name: "google-site-verification", content: "65UAput4IQKMoY_25s2CZGgLbfCdoRyptcqmkw5Vxbc" },
      { name: "msvalidate.01", content: "3481BF4F6DF1CA677EECE9A3B18F3256" },
      { property: "og:title", content: "Skywards Solution — Truck Dispatch Services USA" },
      { property: "og:description", content: "Toledo-based USA truck dispatch for owner-operators & small fleets — load booking, rate negotiation, paperwork & 24/7 dispatcher support." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Skywards Solution" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Skywards Solution — Truck Dispatch Services USA" },
      { name: "twitter:description", content: "Toledo-based USA truck dispatch for owner-operators & small fleets — load booking, rate negotiation, paperwork & 24/7 dispatcher support." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccc2ec5b-2663-46d2-ab1e-9eb575739376/id-preview-5a425a9a--588233b0-939b-4095-b0cc-305c6f436f17.lovable.app-1782510557779.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccc2ec5b-2663-46d2-ab1e-9eb575739376/id-preview-5a425a9a--588233b0-939b-4095-b0cc-305c6f436f17.lovable.app-1782510557779.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.skywardssolution.com/#business",
          name: "Skywards Solution",
          description: "Truck dispatch company serving owner-operators and small fleets across the United States.",
          url: "https://www.skywardssolution.com",
          logo: "https://www.skywardssolution.com/favicon.ico",
          image: "https://www.skywardssolution.com/favicon.ico",
          priceRange: "$$",
          email: "sam@skywardssolution.com",
          telephone: "+1-614-209-0850",
          address: {
            "@type": "PostalAddress",
            streetAddress: "317 Locust St",
            addressLocality: "Toledo",
            addressRegion: "OH",
            postalCode: "43604",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.6528,
            longitude: -83.5379,
          },
          areaServed: { "@type": "Country", name: "United States" },
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
          sameAs: [
            "https://www.facebook.com/profile.php?id=61578192783412",
            "https://www.instagram.com/skywardssolution",
            "https://www.linkedin.com/company/skywards-solution/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Skywards Solution",
          url: "https://www.skywardssolution.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.skywardssolution.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <Toaster richColors position="top-center" />
        <ChatAssistant />
      </div>
    </QueryClientProvider>
  );
}
