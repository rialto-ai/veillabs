import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { DownloadFlow } from "@/components/download-flow";
import { IconArrow, IconChip, IconGithub, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Veil Scribe for macOS, Windows, or Linux. Free, open source, and local-first.",
};

const requirements = [
  { label: "macOS", value: "12 Monterey or later · Apple Silicon or Intel" },
  { label: "Windows", value: "Windows 10 or 11 · x64" },
  { label: "Linux", value: "Build from source · most distributions" },
  { label: "Disk", value: "~2 GB for app and a transcription model" },
  { label: "Acceleration", value: "Optional GPU: Apple, NVIDIA, AMD, Intel" },
  { label: "Network", value: "Only for model and optional provider calls" },
];

export default function Download() {
  return (
    <main>
      <Nav />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px]"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(110,86,240,0.10), transparent 70%)",
          }}
        />
        <div className="container-page text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Veil Scribe · free download
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-h1 text-ink sm:text-5xl">
              Run it locally in
              <span className="text-violet"> minutes</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-md text-lg leading-body text-muted">
              Pick your platform. We detect it for you. No account, no card,
              nothing uploaded.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20">
        <Reveal>
          <DownloadFlow />
        </Reveal>
      </section>

      {/* Requirements */}
      <section className="border-t border-ink/5 bg-mist py-20">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-3">System requirements</p>
            <h2 className="max-w-xl text-2xl font-bold tracking-h2 text-ink sm:text-3xl">
              Modest needs. It runs on the machine you already have.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((r, i) => (
              <Reveal key={r.label} delay={(i % 3) * 0.05}>
                <div className="h-full bg-paper p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-violet">
                    {r.label}
                  </p>
                  <p className="mt-2 text-sm leading-body text-ink">
                    {r.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: IconShield,
              title: "Private by construction",
              body: "Audio, transcripts, and summaries stay on your disk. There is no server in the loop.",
            },
            {
              icon: IconChip,
              title: "Fast on your hardware",
              body: "Hardware acceleration where it exists, a responsive CPU fallback where it doesn't.",
            },
            {
              icon: IconGithub,
              title: "Open source",
              body: "Read the code, file an issue, or build the app yourself. No black boxes.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink/8 bg-paper p-7">
                <span className="icon-tile mb-5 h-11 w-11">
                  <c.icon width={20} height={20} />
                </span>
                <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-body text-muted">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink/8 bg-mist px-8 py-7 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Prefer to build from source?
              </h3>
              <p className="mt-1 text-sm text-muted">
                The full project, build scripts, and releases live on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/rialto-ai/veil-scribe"
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
            >
              <IconGithub width={16} height={16} />
              Open the repository
              <IconArrow width={15} height={15} />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            ← Back to overview
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
