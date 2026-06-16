"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    q: "Does anything leave my machine?",
    a: "No. Audio capture, transcription, summarization, and storage all run on your device. Veil Scribe has no cloud backend and requires no account. The only network traffic is optional: model downloads, and any AI provider you explicitly point it at.",
  },
  {
    q: "Which AI providers can it use for summaries?",
    a: "Transcription runs fully offline with Whisper or Parakeet. For summaries you can keep everything local with Ollama, or connect Claude, Groq, OpenRouter, or any OpenAI-compatible endpoint — including your own organization's infrastructure.",
  },
  {
    q: "What platforms are supported?",
    a: "macOS (Apple Silicon and Intel), Windows x64, and Linux. macOS and Windows ship signed installers. On Linux you build from source with the provided scripts.",
  },
  {
    q: "Can it capture both sides of a call?",
    a: "Yes. Veil Scribe mixes your microphone and system audio at the same time, so remote participants are transcribed alongside you regardless of the meeting app.",
  },
  {
    q: "Do I need a GPU?",
    a: "No, but it helps. Veil Scribe uses hardware acceleration on Apple Silicon, NVIDIA, AMD, and Intel where available. On a CPU it runs smaller models and stays responsive.",
  },
  {
    q: "Is it really open source?",
    a: "Yes. The full application is open source, so you can read exactly how your data is handled, build it yourself, and self-host any part of the pipeline. No vendor lock-in.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/8 border-y border-ink/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink">
                {item.q}
              </span>
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/15 text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[15px] leading-body text-muted">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
