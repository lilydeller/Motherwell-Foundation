"use client";

import { useState } from "react";

export function ContactForm({
  topic,
  messageLabel = "Message",
  messagePlaceholder = "How can we help?",
  submitLabel = "Send message",
  note,
  showTopicPicker = false,
}: {
  /** Fixed topic when the picker is hidden, or the default when it's shown. */
  topic: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  note?: string;
  showTopicPicker?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, ...data }),
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

  if (status === "sent") {
    return (
      <div className="card p-8 text-center sm:p-10">
        <h3 className="text-3xl">Message sent.</h3>
        <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink">
          Thank you for reaching out — we read every message and will get back
          to you soon.
        </p>
        <button
          type="button"
          className="btn mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="cf-name">
            Your name <span className="text-butter-deep">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="First and last name"
            className="field"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cf-email">
            Email address <span className="text-butter-deep">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </div>
      </div>

      {showTopicPicker ? (
        <div className="mt-5">
          <label className="field-label" htmlFor="cf-topic">
            What&rsquo;s this about?
          </label>
          <select id="cf-topic" name="topic" defaultValue={topic} className="field">
            <option>General question</option>
            <option>Movement &amp; classes</option>
            <option>Nutrition</option>
            <option>Mind &amp; mental health</option>
            <option>Partnering with us (studio or dietitian)</option>
            <option>Volunteering or donating</option>
          </select>
        </div>
      ) : null}

      <div className="mt-5">
        <label className="field-label" htmlFor="cf-message">
          {messageLabel} <span className="text-butter-deep">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          placeholder={messagePlaceholder}
          className="field resize-y"
        />
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

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        {note ? (
          <p className="max-w-sm text-xs leading-relaxed text-ink-soft">{note}</p>
        ) : null}
      </div>
    </form>
  );
}
