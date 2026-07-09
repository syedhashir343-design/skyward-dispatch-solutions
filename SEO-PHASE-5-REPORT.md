# Phase 5 — Search Engine Verification & Indexing

## What's now in the code

1. **Google Search Console verification meta tag** added to `src/routes/__root.tsx`
   - `<meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_VERIFICATION_CODE">`
2. **Bing Webmaster verification meta tag** added to `src/routes/__root.tsx`
   - `<meta name="msvalidate.01" content="REPLACE_WITH_BING_VERIFICATION_CODE">`
3. **IndexNow key file** published at `/f032da09ff5213864a8c829327fbbc86.txt`
   - Enables instant URL submission to Bing / Yandex.
4. **robots.txt** validated — allows all crawlers (including GPTBot, PerplexityBot,
   ClaudeBot, Google-Extended) and advertises the XML sitemap.
5. **XML sitemap** live at `/sitemap.xml` with all 60+ URLs
   (home, services, 10 dispatch pages, 14 locations, 20 blog posts, legal, sitemap).

## Steps for you to complete (one-time, ~10 min)

### 1. Google Search Console
1. Go to https://search.google.com/search-console
2. **Add property → URL prefix →** `https://www.skywardssolution.com`
3. Under **HTML tag**, copy the `content="..."` value.
4. Paste it in `src/routes/__root.tsx`, replacing
   `REPLACE_WITH_GOOGLE_VERIFICATION_CODE`.
5. Publish. Return to GSC and click **Verify**.
6. In GSC → **Sitemaps**, submit: `sitemap.xml`
7. Use **URL Inspection** for the homepage → **Request Indexing**.

### 2. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. **Add site →** `https://www.skywardssolution.com`
3. Easiest path: click **Import from Google Search Console** (skips meta tag).
   Otherwise: copy the meta content value and replace
   `REPLACE_WITH_BING_VERIFICATION_CODE` in `src/routes/__root.tsx`.
4. Once verified, submit the same sitemap URL:
   `https://www.skywardssolution.com/sitemap.xml`

### 3. IndexNow (instant Bing/Yandex indexing) — optional but recommended
Your IndexNow key is already published. To notify search engines of new/updated
URLs instantly, hit this endpoint (from any terminal, GitHub Action, or CMS webhook):

```bash
curl "https://api.indexnow.org/indexnow?url=https://www.skywardssolution.com/&key=f032da09ff5213864a8c829327fbbc86"
```

Or POST multiple URLs at once:
```bash
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "host": "www.skywardssolution.com",
    "key": "f032da09ff5213864a8c829327fbbc86",
    "keyLocation": "https://www.skywardssolution.com/f032da09ff5213864a8c829327fbbc86.txt",
    "urlList": [
      "https://www.skywardssolution.com/",
      "https://www.skywardssolution.com/services"
    ]
  }'
```

### 4. Ping Google (optional, legacy but still works)
```bash
curl "https://www.google.com/ping?sitemap=https://www.skywardssolution.com/sitemap.xml"
```

## Verification checklist

- [ ] GSC verification code pasted & site verified
- [ ] Bing verification code pasted (or GSC import) & site verified
- [ ] Sitemap submitted in GSC
- [ ] Sitemap submitted in Bing Webmaster
- [ ] Homepage indexing requested in GSC
- [ ] IndexNow test call returns HTTP 200 or 202

## Full SEO deliverable summary (Phases 1–5)

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 1 | Technical SEO foundation (meta tags, JSON-LD, robots.txt, sitemap.xml, canonical URLs, legal pages) | ✅ |
| 2 | 10 service pages with unique 1,000+ word content & structured data | ✅ |
| 3 | 14 location pages (US freight hubs) with LocalBusiness schema | ✅ |
| 4 | Blog hub + 20 SEO-optimized starter drafts with BlogPosting schema | ✅ |
| 5 | GSC + Bing verification tags, IndexNow key, submission playbook | ✅ |

**Total indexable URLs:** ~60
**Structured data types deployed:** Organization, WebSite, Service, LocalBusiness, BlogPosting, BreadcrumbList, FAQPage
**AI crawlers explicitly allowed:** GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended