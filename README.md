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

## Connecting the Sanity CMS

This site now ships with a full CMS built in: Members, Leadership, Events,
Initiatives, DEA Insights posts, and homepage settings (hero text, stats,
mission/vision) are all editable at **`dallasea.com/studio`** — no code, no
GitHub, no redeploy. Edits show up on the live site within about a minute.

If you're reading this before it's connected, add these environment
variables in Vercel (**Settings → Environment Variables**), then redeploy:

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_READ_TOKEN` | see below — optional, but needed for the click-to-edit Presentation view |

### Getting the API read token (for the visual, click-to-edit editor)

The Studio's document editor (add/edit/delete members, events, etc.) works
with just the two `NEXT_PUBLIC_...` variables above. The **Presentation**
tool — which shows your actual live site inside the editor and lets you
click any text or image on the page to jump straight to editing it — needs
one more thing: a read token, so it can show your unpublished edits before
you hit Publish.

1. Go to [sanity.io/manage](https://sanity.io/manage) → your project →
   **API → Tokens**.
2. Click **Add API token**. Name it "Website Preview". Set permissions to
   **Viewer**.
3. Copy the token (shown once) and add it in Vercel as `SANITY_API_READ_TOKEN`
   — do **not** prefix it with `NEXT_PUBLIC_`, since it must stay server-side
   only.
4. Redeploy.

Without this token, everything still works — you just edit documents in the
regular list view instead of clicking around the live page.

### Also required: allow your domain in Sanity's CORS settings

Since the Studio is embedded in your own site rather than hosted separately
by Sanity, you need to explicitly allow your domain:

1. [sanity.io/manage](https://sanity.io/manage) → your project → **API →
   CORS Origins → Add CORS origin**.
2. Add `https://dallasea.com`, check **Allow credentials**, save.
3. Repeat for your `*.vercel.app` URL if you use it.

### Using the click-to-edit editor

Once the token and CORS origin are set:

1. Go to `dallasea.com/studio` and open **Presentation** in the left sidebar
   (alongside "DEA Content" and "Vision").
2. Your actual site loads in an iframe on the right. Click any piece of text
   or image — a small pencil icon appears — click it to open that field for
   editing in the panel on the left.
3. Edits save as drafts. Click **Publish** in the left panel to make them go
   live on the real site (usually within about a minute, sometimes needing a
   refresh).

### Adding photos

In either the regular document list or inside Presentation, open any Member,
Leader, Event, Initiative, or Post document — each has a Photo/Image field.
Click it, then either drag a file in or click to browse your computer. Once
uploaded, Sanity handles resizing and hosting automatically; nothing else to
configure.

Once set, visit `dallasea.com/studio`, log in with the same account you used
to create the Sanity project, and you'll see:

- **Site Settings** — hero headline/subtext, homepage statistics, mission
  and vision statements
- **Member** — the member directory
- **Leadership** — executive leadership, directors, advisors & alumni
- **Event** — upcoming and past events
- **Initiative** — DEA's programs
- **DEA Insights Post** — blog articles, with rich text and images

Until Sanity is connected (or if a query ever fails), every page quietly
falls back to the fixtures in `src/lib/content.ts`, so the site is never
broken — it just isn't live-editable yet.

**Who can edit:** anyone you invite as a member on your Sanity project (via
sanity.io/manage → your project → Members) can log into `/studio`. There's
no separate password system to manage — it rides on Sanity's own login.



```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Deployed on Vercel
