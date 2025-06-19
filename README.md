# <coderscott />

This site isn’t built by some AI prompt jockey. It’s built by an actual human — one who obsesses over layout, spacing, typography, and why Tailwind deserved to be evicted.

What you're looking at is the core of [coderscott.dev](https://coderscott.dev) — a handcrafted, Next.js-powered portfolio that’ll eventually showcase builds, blogs, breakdowns, and the occasional dev meltdown.

Right now? It’s just a "Coming Soon" page... but it still slaps.

---

## 🧠 Stack

- [Next.js](https://nextjs.org) — App Router, TypeScript, and zero tolerance for bad patterns
- [Styled Components](https://styled-components.com) — because Tailwind got kicked out for making things ugly
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) — themeable, scalable, and brutally clean
- Hosted on my personal [Proxmox](https://www.proxmox.com/) server — self-hosted or nothing

---

## 🚧 Status

> Coming Soon™ — built live and unapologetically.  
> Deployed from my own infrastructure. Controlled by feature flags. Tuned for vibes.  
> It's not done yet because it's not meant to be rushed.

---

## 🛠 Development

Want to poke around locally? Cool.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

Edit pages from `app/` and watch the magic rebuild.

---

## 🧪 Tech You Should Know

- **Font loading** is done via `next/font` for performance and no-FOUT life.
- **Themes** are powered by layered CSS vars and can be hot-swapped when I feel like it.
- **Layout** is built with rem-based scaling, flexbox mastery, and no CSS regrets.

---

## 📦 Deploy Strategy

No Vercel here.  
This site ships from my **home server**, behind a **Cloudflare Tunnel**, on a custom CI/CD flow.

Because control is king — and paying for cold starts is for chumps.

---

## ☕ Shoutouts

Thanks to Next.js, styled-components, and my borderline unhealthy obsession with UI detail.  
Stay tuned. Or don’t. I’m building it either way.
