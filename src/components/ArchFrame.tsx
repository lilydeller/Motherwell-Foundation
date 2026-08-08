import Image from "next/image";

type Tone = "sky" | "butter" | "ivory";

const TONES: Record<Tone, string> = {
  sky: "linear-gradient(160deg,#eaf2fc 0%,#d6e6f8 55%,#c3dbf4 100%)",
  butter: "linear-gradient(160deg,#fffdf3 0%,#fff4bb 60%,#f6df94 100%)",
  ivory: "linear-gradient(160deg,#fffdf7 0%,#f8f2e2 60%,#eee6d2 100%)",
};

/**
 * Arched picture frame. Real photography is coming from the client, so when no
 * `src` is supplied this renders a calm tonal panel at the right aspect ratio
 * rather than a stock photo or a grey "image missing" box.
 */
export function ArchFrame({
  src,
  alt = "",
  tone = "sky",
  ratio = "3 / 4",
  className = "",
  rounded = "arch",
  priority = false,
}: {
  src?: string;
  alt?: string;
  tone?: Tone;
  ratio?: string;
  className?: string;
  /** "arch" = tall rounded top, "soft" = evenly rounded card. */
  rounded?: "arch" | "soft";
  priority?: boolean;
}) {
  const radius =
    rounded === "arch" ? "999px 999px 1.5rem 1.5rem" : "1.5rem";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: ratio,
        borderRadius: radius,
        background: TONES[tone],
        border: "1px solid rgba(44,68,104,0.08)",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
          priority={priority}
        />
      ) : null}
    </div>
  );
}
