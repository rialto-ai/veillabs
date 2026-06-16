"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IconApple,
  IconArrow,
  IconCheck,
  IconLinux,
  IconWindows,
} from "@/components/icons";

type OS = "mac" | "windows" | "linux";

const RELEASES = "https://github.com/rialto-ai/veillabs/releases/latest";
// Direct installer download (skips the GitHub release page for a smoother flow).
const WINDOWS_SETUP =
  "https://github.com/rialto-ai/veillabs/releases/download/veil-scribe-v0.4.0/Veil.Scribe_0.4.0_x64-setup.exe";

type Build = { label: string; meta: string; href: string; direct?: boolean };

const platforms: Record<
  OS,
  {
    name: string;
    icon: typeof IconApple;
    builds: Build[];
    steps: string[];
  }
> = {
  mac: {
    name: "macOS",
    icon: IconApple,
    builds: [
      { label: "Apple Silicon", meta: ".dmg · arm64", href: RELEASES },
      { label: "Intel", meta: ".dmg · x64", href: RELEASES },
    ],
    steps: [
      "Open the downloaded .dmg file.",
      "Drag Veil Scribe into your Applications folder.",
      "Launch it and allow microphone and system-audio access.",
      "Download a transcription model on first run, then record.",
    ],
  },
  windows: {
    name: "Windows",
    icon: IconWindows,
    builds: [
      {
        label: "Windows 10 / 11",
        meta: ".exe · x64 installer",
        href: WINDOWS_SETUP,
        direct: true,
      },
    ],
    steps: [
      "Run the downloaded x64 installer.",
      "Follow the prompts to complete installation.",
      "Open Veil Scribe and grant audio permissions.",
      "Download a transcription model on first run, then record.",
    ],
  },
  linux: {
    name: "Linux",
    icon: IconLinux,
    builds: [
      { label: "Build from source", meta: "scripts · all distros", href: RELEASES },
    ],
    steps: [
      "Clone the repository from GitHub.",
      "Run the provided build script for your distribution.",
      "Launch the built app and grant audio permissions.",
      "Download a transcription model on first run, then record.",
    ],
  },
};

const order: OS[] = ["mac", "windows", "linux"];

export function DownloadFlow() {
  const [active, setActive] = useState<OS>("mac");
  const [detected, setDetected] = useState<OS | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    let os: OS = "mac";
    if (ua.includes("win")) os = "windows";
    else if (ua.includes("linux") || ua.includes("android")) os = "linux";
    else if (ua.includes("mac") || ua.includes("iphone") || ua.includes("ipad"))
      os = "mac";
    setActive(os);
    setDetected(os);
  }, []);

  const p = platforms[active];

  return (
    <div>
      {/* OS tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {order.map((os) => {
          const Item = platforms[os];
          const isActive = active === os;
          return (
            <button
              key={os}
              onClick={() => setActive(os)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-violet bg-violet text-white"
                  : "border-ink/10 bg-white text-ink hover:border-ink/25"
              }`}
            >
              <Item.icon width={16} height={16} />
              {Item.name}
              {detected === os ? (
                <span
                  className={`font-mono text-[10px] uppercase tracking-wide ${
                    isActive ? "text-white/70" : "text-violet"
                  }`}
                >
                  detected
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-2"
      >
        {/* Builds */}
        <div className="rounded-2xl border border-ink/8 bg-paper p-7">
          <div className="flex items-center gap-3">
            <span className="icon-tile h-11 w-11">
              <p.icon width={20} height={20} />
            </span>
            <div>
              <h3 className="text-base font-semibold text-ink">
                Download for {p.name}
              </h3>
              <p className="font-mono text-[11px] text-muted">
                Latest stable · free
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {p.builds.map((b) => (
              <a
                key={b.label}
                href={b.href}
                {...(b.direct
                  ? { download: "" }
                  : { target: "_blank", rel: "noreferrer" })}
                className="group flex items-center justify-between rounded-xl border border-ink/8 bg-mist/50 px-4 py-3.5 transition-colors hover:border-violet/40 hover:bg-violet-tint/50"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {b.label}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {b.meta}
                  </span>
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-violet text-white transition-transform group-hover:translate-x-0.5">
                  <IconArrow width={15} height={15} />
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 font-mono text-[11px] leading-relaxed text-muted">
            Builds are published on GitHub Releases. Veil Scribe is open
            source — verify the binary or build it yourself.
          </p>
        </div>

        {/* Steps */}
        <div className="rounded-2xl border border-ink/8 bg-paper p-7">
          <p className="eyebrow mb-5">Set up · 4 steps</p>
          <ol className="space-y-4">
            {p.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-tint font-mono text-[11px] font-bold text-violet">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm leading-snug text-ink">
                  {s}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-mist/60 px-4 py-3">
            <IconCheck width={16} height={16} className="text-violet" />
            <span className="text-[13px] text-muted">
              No account. Nothing uploaded. Ready in minutes.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
