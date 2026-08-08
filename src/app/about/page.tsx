import type { Metadata } from "next";
import { ArchFrame } from "@/components/ArchFrame";
import {
  Container,
  PillLink,
  Rule,
  Section,
  SectionHeading,
  StripeBand,
} from "@/components/ui";
import { PEOPLE, VALUES } from "@/content/people";
import { CITIES } from "@/content/studios";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by moms, for moms — the mission, the people and the partners behind The MotherWell Foundation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory pb-14 pt-14 sm:pt-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow mb-4">About us</p>
              <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl">
                We&rsquo;re here to support you, every step of the way
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink">
                The MotherWell Foundation was created to provide evidence-based
                support for moms through the whole transition into motherhood —
                movement, nutrition and mind.
              </p>
              <div className="mt-8">
                <PillLink href="/contact">Work with us</PillLink>
              </div>
            </div>
            {/* PHOTO 6 — about. Real image to be supplied by the client. */}
            <ArchFrame tone="butter" ratio="4 / 5" className="mx-auto w-full max-w-xs" />
          </div>
        </Container>
      </section>

      <StripeBand tone="butter" />

      {/* ── Values ─────────────────────────────────────────────────────── */}
      <Section tone="cream">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Built by moms, for moms"
            intro="When moms are supported in body and mind, families are better for it. That's the whole idea."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {VALUES.map((v) => (
              <article key={v.title}>
                <Rule />
                <h3 className="mt-4 font-display text-2xl leading-snug">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── People ─────────────────────────────────────────────────────── */}
      <Section tone="ivory">
        <Container>
          <SectionHeading
            eyebrow="The people"
            title="Who's behind this"
            intro="A small team, plus the studios and dietitian offices we work alongside."
          />
          <div className="mt-12 flex flex-col gap-10">
            {PEOPLE.map((p, i) => (
              <article
                key={p.slug}
                className={`card grid items-center gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] ${
                  i % 2 === 1 ? "md:grid-cols-[1fr_auto]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  {/* PHOTO — team member. To be supplied by the client. */}
                  <ArchFrame
                    src={p.photo}
                    alt={p.photo ? p.name : ""}
                    tone={i % 2 === 0 ? "sky" : "butter"}
                    ratio="3 / 4"
                    className="mx-auto w-40"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                    {p.role}
                  </p>
                  <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-ink">
                    {p.bio.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Partners ───────────────────────────────────────────────────── */}
      <Section tone="sky-pale">
        <Container>
          <SectionHeading
            eyebrow="Our partners"
            title="Where we work"
            intro="Partner studios and dietitian offices across the Lowcountry, the Midlands and the Upstate."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {CITIES.map((city) => (
              <div key={city.slug} className="card p-6">
                <h3 className="font-display text-2xl">{city.name}</h3>
                <ul className="mt-4 space-y-2 text-[0.93rem] text-ink">
                  {city.studios.map((s) => (
                    <li key={s.slug}>{s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <PillLink href="/contact">Partner with us</PillLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
