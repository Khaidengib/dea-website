# Dallas Entrepreneurial Alliance — Website

The official website for Dallas Entrepreneurial Alliance (DEA), built with
[Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## What's in here

- Full public site: Home, About, What We Do, Members (with search/filter),
  Leadership, Events (list + detail pages), Initiatives, DEA Insights (blog,
  with category filter + search), Partnerships, Contact, and Join.
- A working Contact form and Join application form (see "Connecting form
  submissions to email" below to make them actually deliver somewhere).
- SEO basics: per-page titles/descriptions, Open Graph tags, `sitemap.xml`,
  `robots.txt`, and JSON-LD organization data.
- Accessible, responsive, keyboard-navigable throughout.

## Where the content lives

Every piece of editable content — statistics, members, leadership, events,
initiatives, blog posts, partnership options — lives in one file:

```
src/lib/content.ts
```

To update the site, edit that file, commit, and push. Vercel automatically
rebuilds and redeploys the live site within about a minute. You do **not**
need to touch any other file to change text, add a member, add an event, or
publish a blog post.

> **Note on the "no-code" requirement:** as shipped, editing content means
> editing this one TypeScript file on GitHub (which has a plain web-based
> editor — no local setup needed) or asking Claude to make the edit and push
> it for you. If you want a true point-and-click editor where non-technical
> admins log in and edit visually, see "Adding a visual CMS" below — that's
> a follow-up step, not something included in this initial build.

## Deploying to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New → Project**, then **Import** this repository
   (`Khaidengib/dea-website`).
3. Leave the defaults (Framework: Next.js, Build Command: `next build`,
   Output: default) and click **Deploy**.
4. Vercel gives you a live URL like `dea-website.vercel.app` within a minute
   or two.

## Connecting your domain (dallasea.com)

1. In the Vercel project, go to **Settings → Domains**.
2. Type `dallasea.com` and click **Add**. Add `www.dallasea.com` too if you
   want the `www` version to work.
3. Vercel shows you either an **A record** (for the root domain) and/or a
   **CNAME record** (for `www`) to add.
4. Go to wherever `dallasea.com` is registered (GoDaddy, Namecheap, Google
   Domains, etc.) → DNS settings, and add exactly the records Vercel showed
   you.
5. DNS changes usually take a few minutes, sometimes up to a few hours.
   Vercel's domain page will show a green checkmark once it's live and will
   auto-provision HTTPS.

No rebuild is required to connect the domain — this works at any point,
before or after you've made content changes.

## Connecting form submissions to email

Right now, submissions to the Contact and Join forms are logged to Vercel's
function logs (visible under your project → **Deployments → [latest] →
Functions**) but aren't emailed anywhere yet. The fastest way to fix that:

1. Create a free account at [resend.com](https://resend.com).
2. Get an API key and add it in Vercel under **Settings → Environment
   Variables** as `RESEND_API_KEY`.
3. In `src/app/api/contact/route.ts` and `src/app/api/join/route.ts`, replace
   the `console.log(...)` line with a call to the Resend API to email
   submissions to your inbox. (Ask Claude to wire this up — it's a small,
   quick change once you have the API key.)

## Adding a visual CMS (optional, no-code editing)

This build keeps content in a single, easy-to-edit file rather than a full
CMS, since a true CMS (with its own login, media library, and visual editor)
is a separate service that needs its own account. The recommended path is
[Sanity](https://sanity.io) (generous free tier, real drag-and-drop Studio):

1. Create a free Sanity account and project at sanity.io.
2. Ask Claude to scaffold `sanity/schemas` for members, leadership, events,
   initiatives, and posts, and swap `src/lib/content.ts` for live GROQ
   queries against your Sanity dataset.
3. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` as
   Vercel environment variables.

Once connected, you'd log into `dallasea.com/studio` (or a separate Sanity
URL) and edit everything — text, images, members, events — without touching
code, exactly as the original spec described.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Deployed on Vercel
