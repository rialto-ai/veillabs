import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { HeroPanel } from "@/components/hero-panel";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { Dot } from "@/components/logo";
import {
  IconArrow,
  IconCheck,
  IconChip,
  IconGithub,
  IconImport,
  IconLayers,
  IconLock,
  IconMixer,
  IconServer,
  IconShield,
  IconSparkle,
  IconWaveform,
} from "@/components/icons";

const features = [
  {
    icon: IconLock,
    title: "Local processing",
    body: "Transcription, summaries, and storage all happen on your device. There is no cloud step to opt out of, because there is no cloud.",
  },
  {
    icon: IconWaveform,
    title: "Real-time transcription",
    body: "A live transcript forms as people speak, using Whisper or Parakeet running directly on your hardware.",
  },
  {
    icon: IconSparkle,
    title: "AI summaries",
    body: "Turn a transcript into decisions, owners, and dates. Keep it local with Ollama, or connect a provider you trust.",
  },
  {
    icon: IconMixer,
    title: "Microphone and system audio",
    body: "Capture both sides of any call at once. Remote participants are transcribed alongside you, in any meeting app.",
  },
  {
    icon: IconImport,
    title: "Import and enhance",
    body: "Bring in existing recordings, or re-transcribe a past meeting with a different model when you need more accuracy.",
  },
  {
    icon: IconChip,
    title: "GPU acceleration",
    body: "Hardware acceleration on Apple Silicon, NVIDIA, AMD, and Intel. Falls back to CPU and stays responsive.",
  },
  {
    icon: IconServer,
    title: "Custom endpoints",
    body: "Point summaries at your organization's own OpenAI-compatible infrastructure. Your keys, your servers.",
  },
  {
    icon: IconLayers,
    title: "Yours to keep",
    body: "Every meeting is stored as plain, portable data on your disk. Export it, search it, or delete it. No lock-in.",
  },
];

const steps = [
  {
    n: "01",
    title: "Capture",
    body: "Launch Veil Scribe, pick your audio, and record. Or drop in an existing file to transcribe after the fact.",
  },
  {
    n: "02",
    title: "Transcribe",
    body: "Speech becomes text in real time, on your machine. Switch models anytime to trade speed for accuracy.",
  },
  {
    n: "03",
    title: "Summarize",
    body: "Generate a structured summary — decisions, owners, follow-ups — with the AI provider you choose.",
  },
  {
    n: "04",
    title: "Keep",
    body: "Edit, export, and store locally. Search across past meetings whenever you need them again.",
  },
];

const providers = [
  "Ollama",
  "Claude",
  "Groq",
  "OpenRouter",
  "Whisper",
  "Parakeet",
  "Custom OpenAI-compatible",
];

const compare = [
  { label: "Audio leaves your device", cloud: true, veil: false },
  { label: "Requires an account", cloud: true, veil: false },
  { label: "Works fully offline", cloud: false, veil: true },
  { label: "You choose the AI provider", cloud: false, veil: true },
  { label: "Open source and auditable", cloud: false, veil: true },
  { label: "Self-host the whole pipeline", cloud: false, veil: true },
];

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(110,86,240,0.10), transparent 70%)",
          }}
        />
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Veil Scribe · by Veil Labs
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="max-w-xl text-[2.6rem] font-extrabold leading-[1.04] tracking-h1 text-ink sm:text-6xl">
                Your meetings, transcribed and summarized
                <span className="text-violet"> on your machine</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-body text-muted">
                Veil Scribe captures, transcribes, and summarizes every
                conversation locally. Nothing leaves your device. No cloud, no
                accounts, no vendor lock-in.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/download" className="btn-primary">
                  Download for free
                  <IconArrow width={16} height={16} />
                </Link>
                <a
                  href="https://github.com/Zackriya-Solutions/meetily"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <IconGithub width={16} height={16} />
                  View source
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 font-mono text-xs text-muted">
                Open source · Privacy-first · macOS · Windows · Linux
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <HeroPanel />
          </Reveal>
        </div>
      </section>

      {/* Trust line */}
      <section className="border-y border-ink/5 bg-mist">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-center">
          {[
            "Complete data sovereignty",
            "Zero vendor lock-in",
            "Runs offline",
            "Audit the code yourself",
          ].map((t) => (
            <span
              key={t}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-violet" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-3">Capabilities</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-h2 text-ink sm:text-4xl">
              Everything happens where your meetings already live —{" "}
              <span className="text-violet">on your own hardware</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.05} className="h-full">
                <div className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-mist/50">
                  <span className="icon-tile mb-5 h-11 w-11">
                    <f.icon width={20} height={20} />
                  </span>
                  <h3 className="text-base font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-body text-muted">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-ink/5 bg-mist py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-h2 text-ink sm:text-4xl">
              Four steps, start to finish. None of them touch a server.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="group relative h-full rounded-2xl border border-ink/8 bg-paper p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-violet">
                      {s.n}
                    </span>
                    {i < steps.length - 1 ? (
                      <IconArrow
                        width={18}
                        height={18}
                        className="text-ink/15"
                      />
                    ) : (
                      <IconCheck
                        width={18}
                        height={18}
                        className="text-violet"
                      />
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-body text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy — dark register */}
      <section
        id="privacy"
        className="on-dark relative overflow-hidden bg-ink-deep py-24 text-ondark sm:py-32"
      >
        <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-page relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-ondark">
                  The privacy model
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-h2 sm:text-4xl">
                  The data never leaves. That is the whole design.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-body text-ondark/70">
                  Most meeting tools send your audio to a server to be
                  processed. Veil Scribe does not have a server to send it to.
                  Every step runs inside the app, on your computer, under your
                  control.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: IconShield,
                    title: "No cloud, no account",
                    body: "There is nothing to sign up for and nothing to leak.",
                  },
                  {
                    icon: IconServer,
                    title: "Your provider, your keys",
                    body: "Keep summaries local with Ollama, or use your own endpoint.",
                  },
                  {
                    icon: IconGithub,
                    title: "Open and auditable",
                    body: "Read the code, build it yourself, verify the claims.",
                  },
                ].map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.06}>
                    <div className="flex gap-4">
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center text-violet-ondark"
                        style={{
                          borderRadius: "26%",
                          background: "rgba(142,130,242,0.12)",
                        }}
                      >
                        <r.icon width={18} height={18} />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ondark">
                          {r.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-ondark/60">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <DataFlow />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI providers */}
      <section id="providers" className="overflow-hidden py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-3">AI providers</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-h2 text-ink sm:text-4xl">
              Bring your own intelligence. Local by default.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-body text-muted">
              Transcription is always offline. For summaries, choose the engine
              that fits your privacy and quality needs — from fully local
              models to the provider your organization already uses.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
          <div className="flex w-max animate-marquee gap-4">
            {[...providers, ...providers].map((p, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 rounded-full border border-ink/8 bg-mist px-6 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-violet" />
                <span className="whitespace-nowrap text-sm font-medium text-ink">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-ink/5 bg-mist py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-3">The difference</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-h2 text-ink sm:text-4xl">
              A meeting assistant that answers only to you.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-ink/8 bg-paper">
              <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-ink/8 bg-mist/60">
                <div className="px-6 py-4" />
                <div className="px-4 py-4 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  Cloud tools
                </div>
                <div className="px-4 py-4 text-center">
                  <span className="wordmark text-sm text-ink">
                    Veil<span className="wordmark-dot">.</span>
                  </span>
                </div>
              </div>
              {compare.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-ink/5 last:border-0"
                >
                  <div className="px-6 py-4 text-sm text-ink">{row.label}</div>
                  <div className="grid place-items-center px-4 py-4">
                    <Mark on={row.cloud} muted />
                  </div>
                  <div className="grid place-items-center px-4 py-4">
                    <Mark on={row.veil} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold tracking-h2 text-ink sm:text-4xl">
              Questions, answered plainly.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-deep px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 80% at 50% 0%, rgba(110,86,240,0.30), transparent 70%)",
              }}
            />
            <div className="relative">
              <span className="wordmark text-3xl text-ondark">
                Veil<span className="text-violet-ondark">.</span>
              </span>
              <h2 className="mx-auto mt-6 max-w-xl text-3xl font-bold tracking-h2 text-ondark sm:text-4xl">
                Keep your meetings. Keep your data.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-body text-ondark/70">
                Download Veil Scribe and run your first local transcription in
                minutes. Free and open source.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-deep"
                >
                  Download Veil Scribe
                  <IconArrow width={16} height={16} />
                </Link>
                <a
                  href="https://github.com/Zackriya-Solutions/meetily"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ondark/15 px-7 py-3.5 text-sm font-semibold text-ondark transition-colors hover:bg-white/5"
                >
                  <IconGithub width={16} height={16} />
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

function Mark({ on, muted = false }: { on: boolean; muted?: boolean }) {
  if (on && muted) {
    return (
      <span className="text-amber-signal" aria-label="yes">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      </span>
    );
  }
  if (on) {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-violet text-white">
        <IconCheck width={14} height={14} />
      </span>
    );
  }
  return (
    <span className="text-ink/20" aria-label="no">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 6l12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** A small diagram: your device holds everything, the cloud is cut off. */
function DataFlow() {
  return (
    <div
      className="relative rounded-2xl border border-white/10 p-7"
      style={{ background: "#1B2233" }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ondark/50">
          Your device
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-violet-ondark">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-ondark" />
          secure
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {[
          { label: "Audio capture", icon: IconWaveform },
          { label: "Transcription", icon: IconLock },
          { label: "Summary", icon: IconSparkle },
          { label: "Local storage", icon: IconServer },
        ].map((n) => (
          <div
            key={n.label}
            className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
          >
            <span
              className="grid h-8 w-8 place-items-center text-violet-ondark"
              style={{
                borderRadius: "26%",
                background: "rgba(142,130,242,0.12)",
              }}
            >
              <n.icon width={16} height={16} />
            </span>
            <span className="text-sm text-ondark">{n.label}</span>
            <span className="ml-auto font-mono text-[10px] text-ondark/40">
              on-device
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 rounded-xl border border-dashed border-amber-signal/40 px-4 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-signal">
          Cloud
        </span>
        <span className="text-xs text-ondark/40">— never reached</span>
      </div>
    </div>
  );
}
