import Link from "next/link";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-7xl"
        : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tone = "ivory",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ivory" | "cream" | "sky-pale" | "butter-soft" | "none";
  id?: string;
}) {
  const bg =
    tone === "cream"
      ? "bg-cream"
      : tone === "sky-pale"
        ? "bg-sky-pale"
        : tone === "butter-soft"
          ? "bg-butter-soft/50"
          : tone === "none"
            ? ""
            : "bg-ivory";
  return (
    <section id={id} className={`${bg} py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl leading-[1.15] sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/** Pill button rendered as a link — same shape and height as every button. */
export function PillLink({
  href,
  children,
  quiet = false,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  quiet?: boolean;
  className?: string;
  external?: boolean;
}) {
  const cls = `btn ${quiet ? "btn-quiet" : ""} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Thin decorative rule — replaces the little AI-looking icons. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-px w-12 bg-butter-deep ${className}`}
    />
  );
}

/**
 * A band of wide stripes, faded out at one end so it reads as an accent along
 * the edge of a section rather than a hard block. One or two per page, no more.
 */
export function StripeBand({
  tone = "butter",
  className = "",
  height = 130,
  fade = "up",
}: {
  tone?: "butter" | "sky";
  className?: string;
  height?: number;
  /** Which way the stripes dissolve. "up" = solid at the bottom. */
  fade?: "up" | "down" | "none";
}) {
  const mask =
    fade === "none"
      ? undefined
      : fade === "up"
        ? "linear-gradient(to top, #000 15%, transparent 100%)"
        : "linear-gradient(to bottom, #000 15%, transparent 100%)";

  return (
    <div
      aria-hidden="true"
      className={`${tone === "butter" ? "stripes-butter" : "stripes-sky"} w-full ${className}`}
      style={{
        height,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-ivory pb-14 pt-14 sm:pb-16 sm:pt-16">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="text-balance text-4xl leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
