# Veil Scribe — by Veil Labs

The marketing website for **Veil Scribe**, a local-first AI meeting assistant
by **Veil Labs**. Veil Scribe captures, transcribes, and summarizes meetings
entirely on your own machine — no cloud, no accounts, no vendor lock-in.

This site is a Veil-branded take on the [Meetily](https://github.com/Zackriya-Solutions/meetily)
product, rebuilt from the ground up against the Veil brand kit (v1, June 2026).

## Stack

- **Next.js 14** (App Router) with static export (`output: "export"`)
- **TypeScript**
- **Tailwind CSS** — brand palette and type scale encoded in `tailwind.config.ts`
- **Framer Motion** — calm scroll reveals and the animated hero transcript

## Brand

The Veil system, applied throughout:

- **One accent.** Veil Violet `#6E56F0` leads; neutrals carry the surface;
  amber whispers. Never a second bright color.
- **The dot.** The violet period from the `Veil.` wordmark recurs as the single
  point of color — a marker, a bullet, a full stop with intent.
- **Type.** Inter (900 display / 400 body) does the talking; JetBrains Mono
  handles the connective tissue — eyebrows, timestamps, data readouts.
- **Motif.** Stroke icons (2px, rounded joins) live in rounded-square tiles
  with a `#F1EFFE` tint, never bare and never in circles.
- **Voice.** Plain, precise, calm. No exclamation marks, no superlatives.

## Structure

```
app/
  layout.tsx        Fonts (Inter + JetBrains Mono), metadata
  page.tsx          Landing page — hero, features, how-it-works, privacy,
                    providers, comparison, FAQ, CTA
  download/page.tsx Download page — OS detection, per-platform install flows,
                    system requirements
components/         Logo, nav, footer, animated hero panel, icons, FAQ,
                    download flow, motion helpers
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

The build produces a fully static site in `out/`, hostable on any static host.

## Download builds

App binaries (macOS, Windows) and source builds (Linux) are published on the
upstream [Meetily releases](https://github.com/Zackriya-Solutions/meetily/releases).
The download page links there.
