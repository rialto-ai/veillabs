import type { SVGProps } from "react";

/**
 * Stroke icons, 2px weight, rounded joins. They live inside violet-tint tiles,
 * never bare and never in circles.
 */
const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type IconProps = SVGProps<SVGSVGElement>;

export function IconLock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="10" width="16" height="10" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2.5" />
    </svg>
  );
}

export function IconWaveform(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12h0M8 8v8M12 5v14M16 8v8M20 12h0" />
    </svg>
  );
}

export function IconSparkle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18 16l.7 1.8L20.5 18.5l-1.8.7L18 21l-.7-1.8L15.5 18.5l1.8-.7L18 16Z" />
    </svg>
  );
}

export function IconLayers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function IconImport(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v11" />
      <path d="m8 10 4 4 4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function IconChip(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </svg>
  );
}

export function IconMixer(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3v6M6 15v6M12 3v9M12 18v3M18 3v3M18 12v9" />
      <path d="M4 12h4M10 15h4M16 6h4" />
    </svg>
  );
}

export function IconServer(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01" />
    </svg>
  );
}

export function IconApple(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M16 3a3.5 3.5 0 0 1-1.9 2.9" />
      <path d="M12 7c-1.2 0-2-.8-3.4-.8C6.2 6.2 4 8 4 11.6 4 15.6 6.8 21 9 21c1 0 1.6-.7 3-.7s2 .7 3 .7c2 0 4-4 4-6-1.6-.6-2.6-2-2.6-3.6 0-1.4.8-2.6 2-3.3C20.6 7.4 18.8 7 18 7c-1.4 0-2.8.8-4 .8" />
    </svg>
  );
}

export function IconWindows(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6.5 11 5.5v6H4V6.5Z" />
      <path d="M13 5.2 20 4v7.5h-7V5.2Z" />
      <path d="M4 12.5h7v6L4 17.5v-5Z" />
      <path d="M13 12.5h7V20l-7-1.2v-6.3Z" />
    </svg>
  );
}

export function IconLinux(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4.5c0-1 .8-1.5 3-1.5s3 .5 3 1.5c0 2 1 3 1 6 0 2 2 4 2 6.5 0 1.5-1.5 2-3 1.5-1-.4-1.5-1.5-3-1.5s-2 1.1-3 1.5c-1.5.5-3 0-3-1.5C3 16.5 5 14.5 5 12.5c0-3 1-4 1-6" />
      <path d="M10 8h.01M14 8h.01" />
      <path d="M10.5 11c.5.6 2.5.6 3 0" />
    </svg>
  );
}

export function IconGithub(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 19c-4 1.2-4-2-6-2.5" />
      <path d="M15 21v-3.2c0-1 .2-1.6-.4-2.2 2.6-.3 5.4-1.3 5.4-5.8a4.5 4.5 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 1.8 5.6 2.1 5.6 2.1a4.2 4.2 0 0 0-.1 3.2A4.5 4.5 0 0 0 4.2 8.5c0 4.5 2.8 5.5 5.4 5.8-.4.4-.5.9-.5 1.5V21" />
    </svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
