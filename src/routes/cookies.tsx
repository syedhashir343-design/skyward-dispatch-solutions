import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Skywards Solution" },
      { name: "description", content: "How Skywards Solution uses cookies and similar technologies on skywardssolution.com." },
      { property: "og:title", content: "Cookie Policy — Skywards Solution" },
      { property: "og:description", content: "Cookie usage on the Skywards Solution website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.skywardssolution.com/cookies" },
    ],
    links: [{ rel: "canonical", href: "https://www.skywardssolution.com/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Legal</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground">Cookie Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>

      <div className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <p>
          This Cookie Policy explains how Skywards Solution uses cookies and similar technologies
          when you visit skywardssolution.com.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device by websites you visit. They are used to
          make sites work, work more efficiently, and provide reporting information to the site
          owner.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Cookies We Use</h2>
        <p>
          We use a minimal set of cookies to remember your session state and detect basic site
          performance issues. We may add analytics (such as Google Analytics) to understand how
          visitors use the site; those cookies are set only when analytics is active.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Managing Cookies</h2>
        <p>
          Most browsers let you refuse or delete cookies. Blocking cookies may affect the
          functionality of parts of the site (for example, embedded Google Maps).
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          Questions? Contact <a href="mailto:sam@skywardssolution.com" className="text-brand">sam@skywardssolution.com</a>.
        </p>
      </div>
    </article>
  );
}