import { NextResponse } from "next/server";
import { getStudio } from "@/content/studios";
import { site } from "@/content/site";
import { sendEmail } from "@/lib/notify";

const MAX = 400;

function clean(value: unknown, limit = MAX) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real people leave this empty.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const citySlug = clean(body.citySlug, 80);
  const studioSlug = clean(body.studioSlug, 80);
  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const location = clean(body.location, 120);
  const postpartum = clean(body.postpartum, 80);
  const message = clean(body.message, 1500);

  const match = getStudio(citySlug, studioSlug);
  if (!match) {
    return NextResponse.json({ error: "Unknown studio." }, { status: 400 });
  }

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please include your name and email." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const { studio, city } = match;

  const lines = [
    `New class request from The MotherWell Foundation website.`,
    ``,
    `Studio:        ${studio.name} (${city?.name}, ${city?.state})`,
    `Name:          ${name}`,
    `Email:         ${email}`,
    `Phone:         ${phone || "—"}`,
    `Location:      ${location || "—"}`,
    `Postpartum:    ${postpartum || "—"}`,
    ``,
    `Message:`,
    message || "—",
  ].join("\n");

  // Goes to the studio when we have their address, and always to the foundation.
  const result = await sendEmail({
    to: [studio.email, site.email].filter(Boolean),
    replyTo: email,
    subject: `Class request — ${studio.name} (${name})`,
    text: lines,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "We couldn't send that just now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
