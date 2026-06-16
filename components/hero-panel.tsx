"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconLock, IconSparkle } from "./icons";

type Line = { t: string; speaker: string; text: string };

const script: Line[] = [
  { t: "00:02", speaker: "Maya", text: "Let's lock the Q3 roadmap today." },
  { t: "00:09", speaker: "Dev", text: "Onboarding ships first, then billing." },
  { t: "00:17", speaker: "Maya", text: "Agreed. I'll own the migration plan." },
  { t: "00:24", speaker: "Priya", text: "Security review lands Thursday." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroPanel() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? script.length : 0);
  const [summary, setSummary] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= script.length) {
        clearInterval(id);
        setTimeout(() => setSummary(true), 700);
      }
    }, 1100);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative">
      {/* Soft violet bloom behind the panel */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 20%, rgba(110,86,240,0.22), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease }}
        className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_80px_-30px_rgba(20,24,31,0.35)]"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-ink/5 bg-mist/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-ink/10" />
            <span className="h-3 w-3 rounded-full bg-ink/10" />
            <span className="h-3 w-3 rounded-full bg-ink/10" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] font-medium text-muted">
            <IconLock width={13} height={13} className="text-violet" />
            captured locally
          </div>
        </div>

        <div className="grid gap-0 sm:grid-cols-[1.3fr_1fr]">
          {/* Transcript */}
          <div className="border-ink/5 p-5 sm:border-r">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet/50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Recording · 32 min
                </span>
              </div>
              <Waveform reduce={!!reduce} />
            </div>

            <ul className="space-y-3">
              {script.slice(0, count).map((l, i) => (
                <motion.li
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="flex gap-3"
                >
                  <span className="mt-0.5 font-mono text-[11px] text-muted">
                    {l.t}
                  </span>
                  <p className="text-sm leading-snug text-ink">
                    <span className="font-semibold">{l.speaker}:</span>{" "}
                    {l.text}
                  </p>
                </motion.li>
              ))}
              {count < script.length ? (
                <li className="flex gap-3" aria-hidden>
                  <span className="mt-0.5 font-mono text-[11px] text-muted">
                    ··:··
                  </span>
                  <span className="mt-1 inline-block h-3.5 w-1.5 animate-pulse bg-violet/70" />
                </li>
              ) : null}
            </ul>
          </div>

          {/* Summary */}
          <div className="bg-mist/40 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="icon-tile-solid h-7 w-7">
                <IconSparkle width={15} height={15} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Summary
              </span>
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: summary ? 1 : 0.25 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <SummaryRow label="Decisions">
                Q3 roadmap locked: onboarding, then billing.
              </SummaryRow>
              <SummaryRow label="Owners">
                Maya — migration plan. Priya — security review.
              </SummaryRow>
              <SummaryRow label="Due">Thursday · security review</SummaryRow>
            </motion.div>

            {!summary ? (
              <p className="mt-4 font-mono text-[11px] text-muted">
                drafting on-device…
              </p>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SummaryRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-ink/5 bg-white p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-violet">
        {label}
      </p>
      <p className="mt-1 text-[13px] leading-snug text-ink">{children}</p>
    </div>
  );
}

function Waveform({ reduce }: { reduce: boolean }) {
  const bars = [8, 14, 6, 18, 11, 20, 9, 15, 7, 13];
  return (
    <div className="flex h-5 items-center gap-[3px]" aria-hidden>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-violet/70"
          style={{ height: h }}
          animate={
            reduce
              ? undefined
              : { scaleY: [1, 0.4, 1.2, 0.7, 1] }
          }
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
