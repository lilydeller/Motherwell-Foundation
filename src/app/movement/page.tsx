import type { Metadata } from "next";
import Link from "next/link";
import { ArchFrame } from "@/components/ArchFrame";
import {
  Container,
  PillLink,
  Rule,
  Section,
  SectionHeading,
  StripeBand,
} from "@/components/ui";
import { CITIES } from "@/content/studios";

export const metadata: Metadata = {
  title: "Movement",
  description:
    "Pre- and postnatal movement with partner studios in Charleston, Columbia and Greenville, South Carolina.",
};

const HIGHLIGHTS = [
  {
    title: "Pre & postnatal classes",
    body: "Programming written for pregnant and postpartum bodies — not a regular class with modifications bolted on.",
  },
  {
    title: "Mom & baby sessions",
    body: "Bring the baby. Feeding, changing and crying are all completely fine, at every partner studio.",
  },
  {
    title: "Strength, core & mobility",
    body: "A gradual return to loading, with attention to the pelvic floor and abdominal wall.",
  },
  {
    title: "A community that gets it",
    body: "Rooms full of women in the same season, which turns out to matter as much as the workout.",
  },
];

export default function MovementPage() {
  return (
    <>
      <section className="bg-ivory pb-14 pt-14 sm:pt-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow mb-4">Movement</p>
              <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl">
                Movement for every stage of motherhood
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink">
                We partner with studios across Charleston, Columbia and
                Greenville so you can find a class near you — with instructors
                who understand what your body has just been through.
              </p>
              <div className="mt-8">
                <PillLink href="#locations">Select your location</PillLink>
              </div>
            </div>
            {/* PHOTO 2 — movement. Real image to be supplied by the client. */}
            <ArchFrame tone="sky" ratio="4 / 5" className="mx-auto w-full max-w-sm" />
          </div>
        </Container>
      </section>

      <StripeBand tone="sky" />

      {/* ── Choose a city ──────────────────────────────────────────────── */}
      <Section tone="cream" id="locations">
        <Container>
          <SectionHeading
            eyebrow="Our studios"
            title="Select your location"
            intro="Three cities to start, with more of South Carolina to come."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {CITIES.map((city, i) => (
              <Link
                key={city.slug}
                href={`/movement/${city.slug}`}
                className="card group flex flex-col items-center p-6 text-center transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(31,52,85,0.5)]"
              >
                {/* PHOTO — city. Real image to be supplied by the client. */}
                <ArchFrame
                  tone={i === 1 ? "butter" : "sky"}
                  ratio="3 / 4"
                  className="w-32"
                />
                <h2 className="mt-6 font-display text-2xl">{city.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {city.state}
                </p>
                <span className="btn mt-6">View studios</span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-soft">
            Don&rsquo;t see your city yet?{" "}
            <Link
              href="/contact"
              className="font-semibold text-navy underline underline-offset-4"
            >
              Tell us where you are
            </Link>{" "}
            — we&rsquo;re adding partner studios as relationships are finalised.
          </p>
        </Container>
      </Section>

      {/* ── What classes look like ─────────────────────────────────────── */}
      <Section tone="ivory">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            {/* PHOTO 3 — class in progress. To be supplied by the client. */}
            <ArchFrame
              tone="butter"
              ratio="1 / 1"
              rounded="soft"
              className="mx-auto w-full max-w-sm"
            />
            <div>
              <p className="eyebrow mb-3">Class highlights</p>
              <h2 className="text-balance text-3xl leading-snug sm:text-4xl">
                Strong moms, stronger together
              </h2>
              <ul className="mt-8 space-y-6">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title}>
                    <Rule />
                    <h3 className="mt-3 font-display text-xl">{h.title}</h3>
                    <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-ink">
                      {h.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Partner CTA ────────────────────────────────────────────────── */}
      <Section tone="sky-pale">
        <Container>
          <div className="card flex flex-col items-center gap-6 p-8 text-center sm:p-12">
            <p className="eyebrow">For studios</p>
            <h2 className="max-w-xl text-balance text-3xl leading-snug">
              Run a studio that supports postpartum moms?
            </h2>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink">
              We&rsquo;re building a network of partner studios across South
              Carolina. If that sounds like your space, we&rsquo;d love to talk.
            </p>
            <PillLink href="/contact">Become a partner studio</PillLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
