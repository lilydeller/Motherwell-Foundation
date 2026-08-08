import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { ArchFrame } from "@/components/ArchFrame";
import { CurvedText } from "@/components/CurvedText";
import {
  Container,
  PillLink,
  Section,
  SectionHeading,
  StripeBand,
} from "@/components/ui";
import { RESOURCES, TOPICS } from "@/content/mind";

export const metadata: Metadata = {
  title: "Mind",
  description:
    "Information and support for the mental and emotional side of motherhood — sleep, addiction, and the difference between baby blues and postpartum depression.",
};

export default function MindPage() {
  return (
    <>
      <section className="bg-ivory pb-14 pt-14 sm:pt-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow mb-4">Mind</p>
              <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl">
                Caring for your mind is caring for your family
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink">
                Straightforward information about the part of motherhood nobody
                puts on a birth plan — sleep, mood, the pressure to cope, and
                when something has crossed from hard into treatable.
              </p>
            </div>
            {/* PHOTO 5 — mind. Real image to be supplied by the client. */}
            <ArchFrame tone="sky" ratio="4 / 5" className="mx-auto w-full max-w-xs" />
          </div>
        </Container>
      </section>

      {/* ── Crisis card, kept high on the page on purpose ──────────────── */}
      <Container>
        <div className="rounded-[1.25rem] border border-butter-deep bg-butter-soft/70 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow mb-2">If you need help right now</p>
              <h2 className="text-2xl leading-snug">
                Call or text <span className="font-semibold">988</span> — free,
                confidential, 24/7
              </h2>
              <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink">
                The 988 Suicide &amp; Crisis Lifeline is there for thoughts of
                self-harm, thoughts of harming your baby, or any moment you
                cannot see a way through. If you are in immediate danger, call
                911.
              </p>
            </div>
            <PillLink href="tel:988" className="shrink-0">
              Call 988
            </PillLink>
          </div>
        </div>
      </Container>

      <StripeBand tone="sky" className="mt-16" />

      {/* ── Topics ─────────────────────────────────────────────────────── */}
      <Section tone="cream">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Support topics"
            title="What we cover"
            intro="Educational information written for moms, not for charts. It doesn't replace care from your own provider."
          />
          <div className="mt-10">
            <Accordion
              items={TOPICS.map((t) => ({
                title: t.title,
                body: (
                  <>
                    {t.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </>
                ),
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* ── Resources ──────────────────────────────────────────────────── */}
      <Section tone="ivory">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Free, confidential places to start"
            intro="All of these are national, free and available whether or not you have insurance."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {RESOURCES.map((r) => (
              <article
                key={r.name}
                className={`flex flex-col rounded-[1.25rem] border p-6 ${
                  r.urgent
                    ? "border-butter-deep bg-butter-soft/60"
                    : "border-sky-soft bg-cream"
                }`}
              >
                <h3 className="font-display text-xl leading-snug">{r.name}</h3>
                <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-ink">
                  {r.detail}
                </p>
                <a
                  href={r.href}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy underline-offset-8 hover:underline"
                >
                  {r.action} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Closing note with curved text ──────────────────────────────── */}
      <Section tone="sky-pale">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <CurvedText id="mind-arc" curve={-46} fontSize={32} width={560}>
              You are not alone.
            </CurvedText>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink">
              If any of this sounds like you, it&rsquo;s worth a conversation —
              with your provider, with a helpline, or with us.
            </p>
            <div className="mt-8">
              <PillLink href="/contact">Reach out</PillLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
