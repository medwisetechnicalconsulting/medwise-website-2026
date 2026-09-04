# Medwise Technical Consulting: Website & SEO Platform

Production web platform for **Medwise Technical Consulting**, a Kenya-based independent medical equipment consulting firm (advisory + sourcing + installation + training + maintenance).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and an **in-repo MDX content engine**.

---

## Technical Stack & Architecture

- **Framework:** Next.js 16+ (App Router, React 19, Server Components)
- **Styling:** Tailwind CSS v4 + Lucide Icons + Modern responsive design system
- **SEO & Metadata:** Next Metadata API, structured JSON-LD (`MedicalBusiness`, `LocalBusiness`, `BlogPosting`, `BreadcrumbList`) matching Google Business Profile NAP exactly
- **Sitemap & Robots:** Auto-generated dynamic `sitemap.xml` and `robots.txt`
- **Content Engine:** Native in-repo MDX parser with YAML frontmatter (`gray-matter` + `next-mdx-remote`)
- **Performance:** Pre-rendered static pages (SSG) for ultra-fast LCP < 2.5s, CLS < 0.1, INP < 200ms

---

## Placeholders Flagged for Client Confirmation

The following details are currently set with placeholder values and should be confirmed before final domain switch:

1. **Phone Number:** `SITE_CONFIG.telephone` in `lib/seo/schema.ts` (currently `+254700000000`)
2. **WhatsApp Number:** `SITE_CONFIG.whatsappNumber` in `lib/seo/schema.ts` (currently `254700000000`)
3. **Email Address:** `SITE_CONFIG.email` in `lib/seo/schema.ts` (currently `info@medwisetech.co.ke`)
4. **Google Maps CID Link:** `sameAs` map link in `lib/seo/schema.ts`
5. **Real Photography Assets:**
   - Hero banner engineer photo placeholder (`components/Hero.tsx`)
   - About page team operational photo placeholder (`app/about/page.tsx`)

---

## How to Add a New Blog Post (No Coding Knowledge Required)

To publish a new SEO-optimized article or technical guide:

1. Open the repository on GitHub or locally.
2. Navigate to the `content/blog/` directory.
3. Create a new file ending in `.mdx`, for example: `how-to-service-ultrasound-machine-kenya.mdx`.
4. Copy and paste the frontmatter template at the top of the file:

```markdown
---
title: "How to Service an Ultrasound Machine in Kenya: Maintenance Guide"
metaDescription: "Learn how preventive maintenance for ultrasound probes and beamformers extends equipment lifespan in Kenyan clinics."
targetKeyword: "ultrasound machine maintenance Kenya"
date: "2026-08-04"
author: "Medwise Biomedical Engineering Team"
category: "Imaging & Radiology"
image: "/images/blog/ultrasound-guide.jpg"
---

Write your article here using standard Markdown...

## 1. First Section Heading

Your text goes here...
```

5. Commit and push the file to the `main` branch. Vercel will automatically detect the new file, compile the static page, update `sitemap.xml`, and publish the article live within seconds!

---

## Deployment & GitHub Workflow

### Connecting GitHub Repo to Vercel
1. Create a private GitHub repository named `medwise-technical-consulting`.
2. Push local master branch to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_ORGANIZATION/medwise-technical-consulting.git
   git branch -M main
   git push -u origin main
   ```
3. Import the repository into [Vercel](https://vercel.com).
4. Vercel will automatically detect Next.js and deploy to production.
5. Point your custom domain (e.g. `medwisetech.co.ke`) in Vercel Domain Settings.

### Google Search Console & Google Business Profile Integration
- **Search Console:** Submit `https://your-domain.com/sitemap.xml` after domain connection.
- **Google Business Profile:** Ensure Name, Address (Langata Rongai, Rift Valley Province, KE), and Phone match the structured schema in `lib/seo/schema.ts`.
