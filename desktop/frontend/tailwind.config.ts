import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Veil palette — one violet leads, neutrals carry, amber whispers.
        primary: "hsl(249, 84%, 64%)", // Veil Violet #6E56F0
        secondary: "hsl(220, 33%, 98%)", // Mist #F7F8FB
        accent: "hsl(249, 84%, 64%)", // Veil Violet #6E56F0
        destructive: "hsl(25, 95%, 36%)", // Signal Amber #B45309
        violet: {
          DEFAULT: "#6E56F0",
          deep: "#5840D6",
          ondark: "#8E82F2",
          tint: "#F1EFFE",
        },
        ink: { DEFAULT: "#14181F", deep: "#0E1118" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        'display': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
