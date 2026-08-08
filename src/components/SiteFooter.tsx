import Link from "next/link";
import { Ruffle } from "./Ruffle";
import { Wordmark } from "./Wordmark";
import { site } from "@/content/site";
import { CITIES } from "@/content/studios";

const QUICK_LINKS = [
  { href: "/movement", label: "Movement" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/mind", label: "Mind" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer>
      {/* the ruffled edge at the bottom of the page */}
      <Ruffle direction="up" color="#b0cff1" scale={1.15} />

      <div className="bg-sky">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Wordmark variant="blue" width="210px" asLink={false} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink">
              {site.tagline}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-soft">
              {site.serving}
            </p>
          </div>

          <FooterColumn title="Quick links">
            {QUICK_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Studios">
            {CITIES.map((c) => (
              <FooterLink key={c.slug} href={`/movement/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
            <FooterLink href={site.instagram.url}>
              {site.instagram.handle}
            </FooterLink>
            <li className="pt-2 text-xs leading-relaxed text-ink">
              In crisis? {site.crisis.text} — the {site.crisis.label} is free and
              available 24/7.
            </li>
          </FooterColumn>
        </div>

        <div className="border-t border-navy/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p>
              Information on this site is educational and is not medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <li>
      {external ? (
        <a
          href={href}
          className="text-ink underline-offset-4 transition-colors hover:text-navy hover:underline"
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className="text-ink underline-offset-4 transition-colors hover:text-navy hover:underline"
        >
          {children}
        </Link>
      )}
    </li>
  );
}
