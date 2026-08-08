import Link from "next/link";
import { ArchFrame } from "@/components/ArchFrame";
import { CurvedText } from "@/components/CurvedText";
import {
  Container,
  PillLink,
  Rule,
  Section,
  SectionHeading,
  StripeBand,
} from "@/components/ui";
import { CITIES } from "@/content/studios";
import { site } from "@/content/site";

const PILLARS = [
  {
    href: "/movement",
    label: "Movement",
    title: "Move at the pace your body is actually at",
    body: "Partner studios in Charleston, Columbia and Greenville offering pre- and postnatal classes, with a short form that goes straight to the studio you pick.",
  },
  {
    href: "/nutrition",
    label: "Nutrition",
    title: "Real food support, from people who know",
    body: "Recipes, guides, monthly Zoom sessions, and a question box answered by a dietitian or medical student within about 24 hours.",
  },
  {
    href: "/mind",
    label: "Mind",
    title: "The part nobody prepares you for",
    body: "Plain, honest information on sleep, mental load, addiction and the difference between baby blues and postpartum depression.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-ivory pb-16 pt-14 sm:pt-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow mb-5">Charleston · Columbia · Greenville</p>
              <h1 className="text-balance text-[2.6rem] leading-[1.06] sm:text-6xl">
                Supporting moms.
                <br />
                Nourishing wellness.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink">
                Movement, nutrition and mental health support for every stage of
                motherhood — built with local studios, dietitians and medical
                students across South Carolina.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <PillLink href="/movement">Explore our programs</PillLink>
                <PillLink href="/about" quiet>
                  Our mission
                </PillLink>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              {/* PHOTO 1 — hero. Real image to be supplied by the client. */}
              <ArchFrame tone="sky" ratio="4 / 5" priority />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Three pillars ──────────────────────────────────────────────── */}
      <Section tone="cream" className="border-y border-sky-soft">
        <Container>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {PILLARS.map((p, i) => (
              <article key={p.href} className="flex flex-col">
                <p className="font-display text-2xl text-butter-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <Rule className="mt-3" />
                <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {p.label}
                </h2>
                <p className="mt-3 font-display text-2xl leading-snug text-navy">
                  {p.title}
                </p>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  {p.body}
                </p>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy underline-offset-8 hover:underline"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Curved quote, with a stripe accent along the bottom ────────── */}
      <section className="bg-ivory pb-6 pt-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <CurvedText id="home-arc" curve={54} fontSize={36} width={640}>
              You don&rsquo;t have to do it all.
            </CurvedText>
            <p className="-mt-1 font-display text-2xl text-navy sm:text-3xl">
              You just have to take the next step.
            </p>
          </div>
        </Container>
      </section>
      <StripeBand tone="butter" height={110} className="mt-10" />

      {/* ── Cities ─────────────────────────────────────────────────────── */}
      <Section tone="sky-pale">
        <Container>
          <SectionHeading
            eyebrow="Movement"
            title="Find a studio near you"
            intro="Choose your city to see the partner studios in your area and request a class."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/movement/${city.slug}`}
                className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(31,52,85,0.5)]"
              >
                {/* PHOTO — city. Real image to be supplied by the client. */}
                <ArchFrame
                  tone={city.slug === "columbia" ? "butter" : "sky"}
                  ratio="16 / 10"
                  rounded="soft"
                  className="m-3 mb-0"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl">{city.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                    {city.studios.length} partner{" "}
                    {city.studios.length === 1 ? "studio" : "studios"}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy underline-offset-8 group-hover:underline">
                    View studios →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Support strip ──────────────────────────────────────────────── */}
      <Section tone="ivory">
        <Container>
          <div className="card grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow mb-3">You are not alone</p>
              <h2 className="max-w-xl text-balance text-3xl leading-snug">
                Whatever stage you&rsquo;re in, there&rsquo;s a place to start
                here.
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink">
                Questions about a class, a recipe, or how you&rsquo;re feeling —
                we read every message. If you are in crisis,{" "}
                <a
                  href={site.crisis.href}
                  className="font-semibold text-navy underline underline-offset-4"
                >
                  {site.crisis.text}
                </a>{" "}
                to reach the {site.crisis.label}, free and 24/7.
              </p>
            </div>
            <PillLink href="/contact">Get in touch</PillLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
