import Image from "next/image";
import Link from "next/link";

/**
 * The MotherWell script logo. The supplied artwork was flattened onto a yellow
 * background, so it has been cut out to transparent PNGs — one per brand
 * colour — in /public/brand. Swap those files when the final logo lands.
 *
 * `width` accepts any CSS length, so callers can pass a clamp() for a mark
 * that scales with the viewport.
 */
export function Wordmark({
  variant = "blue",
  width = "190px",
  className = "",
  asLink = true,
}: {
  variant?: "blue" | "cream" | "yellow";
  width?: string;
  className?: string;
  asLink?: boolean;
}) {
  const img = (
    <Image
      src={`/brand/logo-${variant}.png`}
      alt="The MotherWell Foundation"
      width={622}
      height={192}
      priority
      className="h-auto w-full"
    />
  );

  if (!asLink) {
    return (
      <span className={`inline-block ${className}`} style={{ width }}>
        {img}
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label="The MotherWell Foundation — home"
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
      style={{ width }}
    >
      {img}
    </Link>
  );
}
