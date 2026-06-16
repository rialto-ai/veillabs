import Link from "next/link";
import { IconGithub } from "./icons";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#how", label: "How it works" },
      { href: "/#providers", label: "AI providers" },
      { href: "/download", label: "Download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/#privacy", label: "Privacy model" },
      { href: "/#faq", label: "FAQ" },
      {
        href: "https://github.com/rialto-ai/veil-scribe",
        label: "Source code",
      },
      {
        href: "https://github.com/rialto-ai/veil-scribe/releases",
        label: "Releases",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#privacy", label: "Why local-first" },
      { href: "mailto:hello@veil.computer", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-mist">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="wordmark text-2xl text-ink">
              Veil<span className="wordmark-dot">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-body text-muted">
              Veil Scribe is built by Veil Labs. A private workspace that
              remembers what matters and answers only to you.
            </p>
            <a
              href="https://github.com/rialto-ai/veil-scribe"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <IconGithub width={16} height={16} />
              Open source
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/5 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Veil Labs · Local-first by design
          </p>
          <p className="font-mono text-xs text-muted">
            Captured locally · Encrypted · Yours
          </p>
        </div>
      </div>
    </footer>
  );
}
