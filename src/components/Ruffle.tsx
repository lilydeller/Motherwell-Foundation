/**
 * Soft wavy edge for where the light-blue bars meet the ivory page.
 * A shallow, wide squiggle rather than deep scallops — tiled as a fixed-size
 * background image so each wave keeps its shape at any viewport width.
 */
export function Ruffle({
  direction = "down",
  color = "#b0cff1",
  scale = 1,
  className = "",
}: {
  /** "down" = the wave hangs below the bar, "up" = it rises above it. */
  direction?: "down" | "up";
  color?: string;
  /** 1 = 64px waves. Bump up for a looser squiggle. */
  scale?: number;
  className?: string;
}) {
  // One wave: 64 wide, 16 tall. A broad shallow crest with a soft notch where
  // it meets the next one.
  const d =
    direction === "down"
      ? "M0 0 H64 V4 C64 11 51 16 32 16 C13 16 0 11 0 4 Z"
      : "M0 16 H64 V12 C64 5 51 0 32 0 C13 0 0 5 0 12 Z";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16"><path d="${d}" fill="${color}"/></svg>`;

  const w = 64 * scale;
  const h = 16 * scale;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height: h,
        marginTop: direction === "down" ? -1 : 0,
        marginBottom: direction === "up" ? -1 : 0,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `${w}px ${h}px`,
        backgroundPosition: direction === "down" ? "top center" : "bottom center",
      }}
    />
  );
}
