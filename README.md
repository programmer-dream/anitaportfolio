# Anita Sharma — Portfolio

Multi-page portfolio for a senior UI/UX designer and web expert. Built with Next.js (App Router), React and TypeScript.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home: hero, stats, selected work, why me, services, process, testimonials, free audit, CTA |
| `/services` | Services & pricing: four detailed services with example projects, build-path chooser, what's included, FAQ |
| `/work` | Portfolio grid with category filters |
| `/work/<project>` | A case study for each project: brief, approach, highlights, screenshot gallery with lightbox, next/previous |
| `/about` | Story, experience timeline, skills & tools, values |
| `/contact` | Contact channels, project enquiry form, FAQ |

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Edit the content

- **`src/content/site.ts`**: contact details, hero, stats, services & prices, About text, FAQs, testimonials
- **`src/content/projects.ts`**: your projects and case-study text (each becomes `/work/<slug>`)

Lines marked `TODO` need your real details: email, WhatsApp number, booking link, Upwork/LinkedIn links,
prices, stats, career history and genuine client reviews.

**Contact form:** opens the visitor's email app by default. To receive messages directly, create a free
[Formspree](https://formspree.io) form and paste its URL into `formEndpoint` in `site.ts`.

## Images

- `public/work/*.jpg`: screenshots of your live projects (cover plus gallery images). Replace any of them anytime.
- `public/portrait.png` (optional): add your photo and it appears in the home hero, navbar and About page.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). Then set `siteUrl` in `site.ts` to your domain.
