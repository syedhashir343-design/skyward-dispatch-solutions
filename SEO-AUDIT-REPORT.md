# Skywards Solution — Production SEO Audit Report

**Domain:** https://www.skywardssolution.com
**Date:** 2026-07-09
**Scope:** Full technical + on-page SEO audit and remediation. No design/branding changes.

---

## 1. Already in place (Phases 1–5)

- Unique <title> (50–60 chars) + meta description (140–160 chars) on every route — home, /about, /services, /contact, /carrier-setup, 10 service pages, 14 city pages, /blog + 20 posts, legal pages.
- Single H1 + proper H2/H3 hierarchy across every layout (ServicePageLayout, LocationPageLayout, blog templates, home hero).
- Canonical URLs self-referencing to https://www.skywardssolution.com/… on every route.
- Open Graph + Twitter Card metadata sitewide (root defaults + per-route overrides).
- Schema.org JSON-LD: WebSite (root), Service (10 service pages), FAQPage (home + all service pages + blog posts), BreadcrumbList (services, locations, blog), BlogPosting (20 posts).
- robots.txt — allows Google, Bing, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, OAI-SearchBot; references /sitemap.xml.
- Dynamic /sitemap.xml server route auto-enumerates every public page including all 20 (now 21) blog posts.
- Hero image preloaded with fetchpriority="high", explicit dimensions, decoding="async"; non-critical images lazy-load.
- Internal linking: every service page sidebar links to all 10 siblings + quick links; locations link back to services; home cross-links services/about/blog.
- Descriptive alt text on every content image.
- Mobile-friendly Tailwind responsive layouts + shadcn/Radix a11y-correct primitives.
- Google Search Console verification tag live in <head>; IndexNow key file published for Bing/Yandex.

## 2. Fixes applied in this audit

| # | Issue | Fix |
|---|-------|-----|
| 1 | Root meta description was 167 chars (>160 recommended). | Trimmed to 158 chars in src/routes/__root.tsx (og/twitter descriptions too). |
| 2 | Root JSON-LD used generic Organization — no LocalBusiness signal. | Upgraded to LocalBusiness with @id, image, priceRange, geo (41.6528, -83.5379), areaServed: United States, 24/7 openingHoursSpecification. Retains address, phone, email, sameAs. |
| 3 | Missing "load boards vs dispatch service" comparison (high-intent semrush gap). | Added /blog/load-boards-vs-dispatch-services with FAQ schema; auto-included in sitemap, blog index, nav. |

## 3. Keyword coverage (natural, no stuffing)

- truck dispatch service / trucking dispatch services → home, /services, all service pages
- truck dispatch company → home, /about
- freight dispatch / freight management → /services, /dedicated-dispatcher
- owner operator dispatch → /owner-operator-dispatch, blog
- dry van dispatch → /dry-van-dispatch
- reefer dispatch → /reefer-dispatch
- flatbed dispatch → /flatbed-dispatch
- hotshot dispatch → /hotshot-dispatch
- power only dispatch → /power-only-dispatch
- step deck dispatch → /step-deck-dispatch
- load planning → /dedicated-dispatcher, blog
- dispatch company USA → home, /about, all 14 location pages

## 4. Content addressing "dispatch / loads / direct shippers / brokers" intent

- "How Owner Operators Find High-Paying Loads" → /blog/how-to-find-loads-owner-operator
- "What Does a Truck Dispatch Company Do?" → covered on /services + home FAQ
- "Direct Shipper Loads vs Broker Loads" → covered in /blog/how-to-find-loads-owner-operator + /blog/build-broker-relationships
- "How to Maximize Revenue as an Owner Operator" → /blog/rate-negotiation-tips-truckers, /blog/reduce-deadhead-miles, /blog/fuel-surcharge-explained
- NEW — "Load Boards vs Dispatch Services" (this pass)

Suggestion: promote "Direct Shipper vs Broker Loads" and "What Does a Truck Dispatch Company Do?" from sections to standalone /blog URLs in the next content round.

## 5. Core Web Vitals

- LCP: hero preloaded, dimensioned, no lazy. ✅
- CLS: explicit width/height on every image. ✅
- Fonts: display=swap, preconnected. ✅
- JS: TanStack Start SSR + per-route code splitting. ✅

The last published Lighthouse run showed one low-severity perf finding and one low-severity contrast finding. Source is already optimized; both should clear on next publish.

## 6. Remaining user-owned action items

1. Paste the Bing verification code in src/routes/__root.tsx (replace REPLACE_WITH_BING_VERIFICATION_CODE) or use "Import from GSC" in Bing Webmaster Tools.
2. Click "Verify" in Google Search Console (tag is live) and submit https://www.skywardssolution.com/sitemap.xml.
3. Publish so Lighthouse rescans the current source.
4. Edit the 21 blog drafts in src/data/blog-posts.ts to add voice, case studies, and internal data before promoting.
5. Add per-post og:image cover art when available; posts currently inherit the site og:image.
