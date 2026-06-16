import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veil.computer"),
  title: {
    default: "Veil Scribe — Local-first meeting intelligence",
    template: "%s · Veil Scribe",
  },
  description:
    "Veil Scribe captures, transcribes, and summarizes your meetings entirely on your own machine. No cloud, no accounts, no vendor lock-in. By Veil Labs.",
  keywords: [
    "Veil Scribe",
    "Veil Labs",
    "local meeting transcription",
    "privacy-first AI",
    "on-device transcription",
    "meeting summaries",
    "open source meeting assistant",
  ],
  openGraph: {
    title: "Veil Scribe — Local-first meeting intelligence",
    description:
      "Capture, transcribe, and summarize meetings entirely on your machine. Nothing leaves your device.",
    siteName: "Veil Scribe",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
