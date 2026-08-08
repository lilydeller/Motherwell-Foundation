import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { sendEmail } from "@/lib/notify";

function clean(value: unknown, limit = 400) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const topic = clean(body.topic, 80);
  const message = clean(body.message, 3000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please include your name, email and a message." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const result = await sendEmail({
    to: [site.email],
    replyTo: email,
    subject: `Website message — ${topic || "General"} (${name})`,
    text: [
      `New message from the website contact form.`,
      ``,
      `Name:   ${name}`,
      `Email:  ${email}`,
      `Topic:  ${topic || "General"}`,
      ``,
      message,
    ].join("\n"),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "We couldn't send that just now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
