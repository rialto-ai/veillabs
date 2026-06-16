import Link from "next/link";

/**
 * The Veil wordmark. Title case, heavy weight, tight tracking.
 * The violet period is the signature — never separated, never recolored.
 */
export function Logo({
  onDark = false,
  withProduct = false,
  className = "",
}: {
  onDark?: boolean;
  withProduct?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-baseline gap-2 ${className}`}
      aria-label="Veil Labs — home"
    >
      <span
        className={`wordmark text-xl ${onDark ? "on-dark text-ondark" : "text-ink"}`}
      >
        Veil<span className="wordmark-dot">.</span>
      </span>
      {withProduct ? (
        <span
          className={`font-mono text-xs font-medium uppercase tracking-[0.16em] ${
            onDark ? "text-ondark/55" : "text-muted"
          }`}
        >
          Scribe
        </span>
      ) : null}
    </Link>
  );
}

/** The accent dot, reused as a marker. One point of color, never a second. */
export function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full bg-violet ${className}`}
      aria-hidden
    />
  );
}
