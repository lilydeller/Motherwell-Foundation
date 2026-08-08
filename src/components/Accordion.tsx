/**
 * Plain <details> disclosure list — no JS, keyboard accessible for free.
 * Used for the informational topics on Mind and Nutrition.
 */
export function Accordion({
  items,
}: {
  items: { title: string; body: React.ReactNode }[];
}) {
  return (
    <div className="divide-y divide-sky-soft overflow-hidden rounded-[1.25rem] border border-sky-soft bg-cream">
      {items.map((item) => (
        <details key={item.title} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-sky-pale/60">
            <span className="font-display text-xl leading-snug text-navy">
              {item.title}
            </span>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-butter text-navy transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="space-y-3 px-6 pb-6 text-[0.95rem] leading-relaxed text-ink">
            {item.body}
          </div>
        </details>
      ))}
    </div>
  );
}
