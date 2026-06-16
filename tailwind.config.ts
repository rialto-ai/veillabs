import type { Config } from "tailwindcss";

/**
 * Veil brand kit, v1 — June 2026.
 * One violet does the heavy lifting. Neutrals carry the surface.
 * Amber whispers. Never a second accent.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#6E56F0", // Veil Violet — primary accent, CTAs, links, the dot
          deep: "#5840D6", // hover & press states, depth
          ondark: "#8E82F2", // accent on dark surfaces only
          tint: "#F1EFFE", // icon tiles, soft fills, highlights
        },
        paper: "#FFFFFF",
        mist: "#F7F8FB",
        ink: {
          DEFAULT: "#14181F", // primary text
          deep: "#0E1118", // dark-mode background
        },
        slate: {
          panel: "#1B2233", // cards on dark
        },
        ondark: "#EEF1FA", // text on dark surfaces
        muted: "#747C8C", // labels, captions, tertiary text
        amber: {
          signal: "#B45309", // caution & candor, used sparingly
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "-0.04em", // Inter 900 display
        h1: "-0.02em",
        h2: "-0.01em",
      },
      lineHeight: {
        body: "1.55",
      },
      borderRadius: {
        tile: "26%", // icon tile radius ≈ 26% of size
      },
      maxWidth: {
        page: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.82)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
