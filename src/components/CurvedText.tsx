/**
 * Text set on a gentle arc. Used in one or two places only — it stops feeling
 * special if it's everywhere.
 */
export function CurvedText({
  children,
  width = 620,
  /** Positive = smile (arcs down), negative = frown (arcs up). */
  curve = 60,
  fontSize = 30,
  color = "var(--color-navy)",
  className = "",
  letterSpacing = "0.02em",
  id,
}: {
  children: string;
  width?: number;
  curve?: number;
  fontSize?: number;
  color?: string;
  className?: string;
  letterSpacing?: string;
  id: string;
}) {
  const height = Math.abs(curve) + fontSize * 1.7;
  const baseline = curve > 0 ? fontSize * 1.25 : height - fontSize * 0.4;
  const path = `M 10 ${baseline} Q ${width / 2} ${baseline + curve} ${width - 10} ${baseline}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={children}
      style={{ overflow: "visible" }}
    >
      <defs>
        <path id={id} d={path} fill="none" />
      </defs>
      <text
        fill={color}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        style={{ fontFamily: "var(--font-display)" }}
      >
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
          {children}
        </textPath>
      </text>
    </svg>
  );
}
