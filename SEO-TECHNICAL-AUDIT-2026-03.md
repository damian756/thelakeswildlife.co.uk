# Sefton Coast Wildlife — SEO & Technical Audit

**Date:** 5 March 2026  
**Domain:** www.seftoncoastwildlife.co.uk  
**Issue investigated:** Slow indexing / pages taking too long to appear in Google

---

## Executive Summary

The audit identified **several issues likely contributing to slow indexing**, plus a number of secondary SEO and technical improvements. The most critical fix — **redirecting non-www to www** — has been implemented. Previously, both `seftoncoastwildlife.co.uk` and `www.seftoncoastwildlife.co.uk` could serve content, with the sitemap at the apex domain redirecting to www. Some crawlers may not follow sitemap redirects reliably, which can delay discovery and indexing.

---

## Critical Issues (Fixed)

### 1. Non-www to www redirect missing

**Impact:** High — duplicate content, wasted crawl budget, sitemap redirect confusion.

When accessing `https://seftoncoastwildlife.co.uk/sitemap.xml`, the request was redirected to www. The vercel-seo-audit flagged: *"Sitemap URL is redirected — Some search engines may not follow redirects to sitemaps."* Canonical tags pointed to www, but both apex and www could serve pages, creating:

- Duplicate URL discovery
- Crawl budget split across two host variants
- Potential indexing delays if crawlers hit apex first

**Fix applied:** Added a permanent redirect in `next.config.ts` so all requests to `seftoncoastwildlife.co.uk` are redirected to `www.seftoncoastwildlife.co.uk`.

### 2. Render-blocking script (Crisp chat)

**Impact:** Medium — delayed First Contentful Paint, slower perceived load for crawlers.

The Crisp chat script in `<head>` was loaded with `strategy="afterInteractive"`, which could still block HTML parsing. Slower page loads can indirectly affect crawl efficiency.

**Fix applied:** Changed to `strategy="lazyOnload"` so the script loads during browser idle time.

### 3. Noindex pages in sitemap

**Impact:** Low — minor crawl budget waste.

`/privacy` and `/terms` have `robots: { index: false }` but were included in the sitemap. Crawlers may still request them; excluding them keeps the sitemap focused on indexable content.

**Fix applied:** Removed privacy and terms from the sitemap.

---

## Secondary Fixes Applied

### 4. Security headers

**Impact:** Low for indexing, but recommended for security and trust.

Added headers to `next.config.ts`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

### 5. Missing og:image and twitter:image

**Impact:** Low for indexing — affects social sharing and brand consistency.

Added default `og:image` and `twitter:image` in `app/layout.tsx`. Note: `/og-default.png` returns 404 on the live site; the layout now uses `/images/species/birds/pink-footed-goose.jpg` as a fallback. Consider creating a proper 1200×630 branded `og-default.png` for consistent social previews.

---

## Remaining Recommendations

### 6. JSON-LD structure (vercel-seo-audit warning)

The homepage uses `@graph` with `WebSite` and `Organization` objects. The audit reported "JSON-LD block missing @type" because the root object has no `@type`. The structure is valid for Schema.org; Google supports `@graph`. No change required unless you see structured data errors in Search Console.

### 7. Image optimisation

- **26 images missing width/height** — Add explicit dimensions to avoid layout shift (CLS).
- **7 below-fold images missing `loading="lazy"`** — Add `loading="lazy"` to images below the fold.

### 8. Trailing slash behaviour

The audit noted a 307 redirect when adding a trailing slash. Next.js default is no trailing slash. If you see inconsistent behaviour, consider setting `trailingSlash: true` or `false` explicitly in `next.config.ts`.

### 9. Vercel domain configuration

Ensure in the Vercel dashboard that:

- `seftoncoastwildlife.co.uk` redirects to `www.seftoncoastwildlife.co.uk` (or that the Next.js redirect handles it)
- The primary domain is set to `www.seftoncoastwildlife.co.uk`

The redirect added in `next.config.ts` should handle apex → www at the application level.

---

## What Was Already Correct

- **robots.txt** — Allows all, sitemap URL correct
- **Sitemap** — Valid, ~288 URLs, all sampled URLs accessible
- **Canonical URLs** — Consistently use www across the site
- **generateStaticParams** — All dynamic routes pre-rendered at build
- **Metadata** — Titles, descriptions, Open Graph on key pages
- **RSS feed** — `/feed` works and is linked from layout
- **HTTP → HTTPS** — Redirects correctly

---

## Next Steps

1. **Deploy** the changes and verify the non-www redirect works.
2. **Google Search Console**
   - Submit the sitemap: `https://www.seftoncoastwildlife.co.uk/sitemap.xml`
   - Use URL Inspection for important URLs and request indexing
   - Check "Pages" for "Discovered — currently not indexed" or "Crawled — currently not indexed"
3. **Re-run the audit** after deploy:
   ```bash
   npx vercel-seo-audit https://www.seftoncoastwildlife.co.uk
   npx vercel-seo-audit https://seftoncoastwildlife.co.uk  # Should now redirect
   ```
4. **Indexing timeline** — New sites often take 1–4 weeks for initial indexing. If issues persist after these fixes, check Search Console for crawl errors, coverage issues, or manual actions.
