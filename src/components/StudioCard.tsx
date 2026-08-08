"use client";

import { useState } from "react";
import { ArchFrame } from "./ArchFrame";
import { IntakeModal } from "./IntakeModal";
import type { Studio } from "@/content/studios";

export function StudioCard({
  studio,
  citySlug,
  cityName,
  index,
}: {
  studio: Studio;
  citySlug: string;
  cityName: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="card flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-6">
        {/* PHOTO — studio. Real image to be supplied by the client. */}
        <ArchFrame
          tone={index % 2 === 0 ? "sky" : "butter"}
          ratio="1 / 1"
          rounded="soft"
          className="w-full shrink-0 sm:w-36"
        />

        <div className="flex-1">
          <h3 className="font-display text-2xl leading-tight">{studio.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
            {studio.address}
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">
            {studio.blurb}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {studio.offerings.map((o) => (
              <li
                key={o}
                className="rounded-full bg-sky-pale px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-navy"
              >
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <button
            type="button"
            className="btn w-full sm:w-auto"
            onClick={() => setOpen(true)}
          >
            Find a class
          </button>
          {studio.scheduleUrl ? (
            <a
              href={studio.scheduleUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-quiet w-full sm:w-auto"
            >
              Studio site
            </a>
          ) : null}
        </div>
      </article>

      <IntakeModal
        studio={studio}
        citySlug={citySlug}
        cityName={cityName}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
