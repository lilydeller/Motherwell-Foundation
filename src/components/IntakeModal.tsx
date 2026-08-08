"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Ruffle } from "./Ruffle";
import type { Studio } from "@/content/studios";

type Props = {
  studio: Studio;
  citySlug: string;
  cityName: string;
  open: boolean;
  onClose: () => void;
};

const FIELDS = [
  { name: "name", label: "Your name", placeholder: "First and last name", type: "text", required: true, autoComplete: "name" },
  { name: "email", label: "Email address", placeholder: "you@example.com", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone number", placeholder: "(123) 456-7890", type: "tel", required: false, autoComplete: "tel" },
  { name: "location", label: "Where are you from?", placeholder: "City, State", type: "text", required: false, autoComplete: "address-level2" },
  { name: "postpartum", label: "How far postpartum are you?", placeholder: "e.g. 8 weeks, or still expecting", type: "text", required: false, autoComplete: "off" },
] as const;

export function IntakeModal({
  studio,
  citySlug,
  cityName,
  open,
  onClose,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    onClose();
    // Reset a moment later so the panel doesn't flicker on the way out.
    window.setTimeout(() => {
      setStatus("idle");
      setError("");
    }, 200);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          citySlug,
          studioSlug: studio.slug,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("We couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-navy/35 p-4 py-10 backdrop-blur-[2px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="intake-title"
        className="relative w-full max-w-lg overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_40px_80px_-40px_rgba(31,52,85,0.6)]"
      >
        {/* ruffled edge, same language as the page header */}
        <div className="bg-sky pt-3">
          <div className="flex items-center justify-between px-5 pb-1">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy">
              {cityName}
            </p>
            <button
              type="button"
              onClick={close}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy underline-offset-4 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
        <Ruffle direction="down" color="#b0cff1" scale={0.9} />

        <div className="stripes-butter">
          <div className="bg-cream/80 px-6 py-8 sm:px-10">
            {status === "sent" ? (
              <div className="py-6 text-center">
                <h2 id="intake-title" className="text-3xl">
                  Thank you.
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink">
                  Your details are on their way to {studio.name}. Someone will
                  be in touch about getting you into a class.
                </p>
                <button type="button" className="btn mt-8" onClick={close}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <div className="text-center">
                  <h2 id="intake-title" className="text-3xl">
                    Almost there!
                  </h2>
                  <p className="mx-auto mt-3 max-w-xs text-[0.95rem] leading-relaxed text-ink">
                    Tell us a little about yourself so {studio.name} can support
                    you best.
                  </p>
                </div>

                <div className="mt-8 space-y-5">
                  {FIELDS.map((field, i) => (
                    <div key={field.name} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-butter text-[0.7rem] font-semibold text-navy sm:flex"
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <label className="field-label" htmlFor={`in-${field.name}`}>
                          {field.label}
                          {field.required ? (
                            <span className="ml-1 text-butter-deep">*</span>
                          ) : null}
                        </label>
                        <input
                          ref={i === 0 ? firstFieldRef : undefined}
                          id={`in-${field.name}`}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          autoComplete={field.autoComplete}
                          placeholder={field.placeholder}
                          className="field"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-3">
                    <span aria-hidden="true" className="hidden w-6 shrink-0 sm:block" />
                    <div className="flex-1">
                      <label className="field-label" htmlFor="in-message">
                        Anything else we should know?
                      </label>
                      <textarea
                        id="in-message"
                        name="message"
                        rows={3}
                        className="field resize-y"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>

                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-px w-px opacity-0"
                />

                {error ? (
                  <p
                    role="alert"
                    className="mt-5 rounded-xl bg-blush/60 px-4 py-3 text-sm text-navy"
                  >
                    {error}
                  </p>
                ) : null}

                <div className="mt-8 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    className="btn w-full sm:w-auto sm:min-w-56"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Submit"}
                  </button>
                  <p className="text-center text-xs leading-relaxed text-ink-soft">
                    Your details go to {studio.name} and The MotherWell
                    Foundation. Nothing is shared anywhere else.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
