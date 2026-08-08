import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { ArchFrame } from "@/components/ArchFrame";
import { ContactForm } from "@/components/ContactForm";
import {
  Container,
  PillLink,
  Rule,
  Section,
  SectionHeading,
  StripeBand,
} from "@/components/ui";
import { GUIDES, RECIPES } from "@/content/nutrition";

export const metadata: Metadata = {
  title: "Nutrition",
  description:
    "Recipes, nutrition guides, monthly Zoom sessions and a question box answered by a dietitian or medical student.",
};

const PARTS = [
  {
    n: "01",
    title: "Ask a dietitian",
    body: "Send a question and get an answer from a dietitian or medical student — usually within about 24 hours.",
    href: "#ask",
    cta: "Ask now",
  },
  {
    n: "02",
    title: "Recipes",
    body: "Simple, nourishing meals built for the amount of time and hands you actually have.",
    href: "#recipes",
    cta: "Browse recipes",
  },
  {
    n: "03",
    title: "Nutrition guides",
    body: "Plain-language information on eating well through pregnancy, recovery and feeding.",
    href: "#guides",
    cta: "Read the guides",
  },
  {
    n: "04",
    title: "Monthly Zoom sessions",
    body: "One to two live Q&A sessions a month with partner dietitian offices. Open to any mom.",
    href: "#zoom",
    cta: "See the schedule",
  },
];

export default function NutritionPage() {
  return (
    <>
      <section className="bg-ivory pb-14 pt-14 sm:pt-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow mb-4">Nutrition</p>
              <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl">
                Nourish your body, every day
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink">
                Real food, real support, made for motherhood. Built with partner
                dietitian offices and a medical student from the School of
                Medicine in Columbia.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillLink href="#ask">Ask a question</PillLink>
                <PillLink href="#recipes" quiet>
                  Browse recipes
                </PillLink>
              </div>
            </div>
            {/* PHOTO 4 — food. Real image to be supplied by the client. */}
            <ArchFrame
              tone="butter"
              ratio="1 / 1"
              rounded="soft"
              className="mx-auto w-full max-w-sm"
            />
          </div>
        </Container>
      </section>

      <StripeBand tone="butter" />

      {/* ── The four parts ─────────────────────────────────────────────── */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {PARTS.map((p) => (
              <article key={p.n} className="card flex flex-col p-7">
                <p className="font-display text-2xl text-butter-deep">{p.n}</p>
                <Rule className="mt-3" />
                <h2 className="mt-5 font-display text-2xl">{p.title}</h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  {p.body}
                </p>
                <div className="mt-6">
                  <PillLink href={p.href} quiet>
                    {p.cta}
                  </PillLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Recipes ────────────────────────────────────────────────────── */}
      <Section tone="ivory" id="recipes">
        <Container>
          <SectionHeading
            eyebrow="Recipes"
            title="Food that fits the day you're having"
            intro="Short ingredient lists, few dishes, and most of them keep for tomorrow."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RECIPES.map((r, i) => (
              <article key={r.slug} className="card flex flex-col overflow-hidden">
                {/* PHOTO — recipe. Real image to be supplied by the client. */}
                <ArchFrame
                  tone={i % 3 === 1 ? "sky" : "butter"}
                  ratio="4 / 3"
                  rounded="soft"
                  className="m-3 mb-0"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                    {r.time}
                  </p>
                  <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink">
                    {r.blurb}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-sky-pale px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-navy"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Guides ─────────────────────────────────────────────────────── */}
      <Section tone="sky-pale" id="guides">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Nutrition guides"
            title="The general information, in plain language"
            intro="Reviewed by our nutrition partners. Educational only — it doesn't replace advice from your own provider."
          />
          <div className="mt-10">
            <Accordion
              items={GUIDES.map((g) => ({ title: g.title, body: <p>{g.body}</p> }))}
            />
          </div>
        </Container>
      </Section>

      {/* ── Zoom sessions ──────────────────────────────────────────────── */}
      <Section tone="ivory" id="zoom">
        <Container>
          <div className="card grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[1.2fr_auto]">
            <div>
              <p className="eyebrow mb-3">Monthly Zoom sessions</p>
              <h2 className="max-w-xl text-balance text-3xl leading-snug">
                One to two live Q&amp;A sessions a month, open to any mom
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink">
                Each session is hosted with a different partner dietitian
                office. Come with a question or just listen — cameras stay off
                if you&rsquo;d rather. Dates are announced by email and on
                Instagram.
                {/* TODO: replace with the live schedule once dates are set. */}
              </p>
            </div>
            <PillLink href="/contact">Get the schedule</PillLink>
          </div>
        </Container>
      </Section>

      {/* ── Ask a question ─────────────────────────────────────────────── */}
      <Section tone="cream" id="ask">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Ask a dietitian or medical student"
            title="Send us your question"
            intro="Most questions are answered within about 24 hours. If something is urgent, please contact your own provider."
          />
          <div className="mt-10">
            <ContactForm
              topic="Nutrition question"
              messageLabel="Your question"
              messagePlaceholder="Ask anything about eating during pregnancy, recovery or feeding…"
              submitLabel="Ask now"
              note="Answers are educational and are not a diagnosis or a treatment plan. For anything urgent, call your provider or 911."
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
