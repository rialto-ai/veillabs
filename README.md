# Veil Labs — Veil Scribe

**Veil Scribe** is a local-first AI meeting assistant by **Veil Labs**. It
captures, transcribes, and summarizes meetings entirely on your own machine —
no cloud, no accounts, no vendor lock-in.

This repository is a monorepo:

| Path        | What it is                                                              |
| ----------- | ----------------------------------------------------------------------- |
| `/` (root)  | The marketing website (Next.js, static export, deployed to Vercel).     |
| `desktop/`  | The Veil Scribe desktop app — a Veil-branded fork of Meetily (Tauri + Next.js + Rust). |

Both the site and the app are built against the Veil brand kit (v1, June 2026).
The marketing site is the Vercel-deployed product at the repo root; `desktop/`
is a self-contained app with its own toolchain and is not part of the web build.

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

## Marketing site (repo root)

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

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

The build produces a fully static site in `out/`, hostable on any static host.
Vercel builds from the repo root and ignores `desktop/`.

## Desktop app (`desktop/`)

A Veil-branded fork of [Meetily](https://github.com/Zackriya-Solutions/meetily):
the same local-first Tauri + Next.js + Rust application, re-skinned to the Veil
brand. The Veil pass covers the design tokens (Veil Violet primary, Ink/Mist
neutrals, dark register), Inter + JetBrains Mono type, the `Veil.` wordmark, the
app icon set, the Tauri product identity (`Veil Scribe`, `ai.veil.scribe`), and
the user-facing copy. Functional identifiers (local database names, app-data
paths, migration detectors) are intentionally left unchanged so existing data
and update flows keep working.

```bash
cd desktop/frontend
pnpm install
pnpm dev            # Next.js dev server (port 3118)
pnpm tauri:dev      # full desktop app (requires the Rust/Tauri toolchain)
```

See `desktop/README.md` and `desktop/CLAUDE.md` for the app architecture.
