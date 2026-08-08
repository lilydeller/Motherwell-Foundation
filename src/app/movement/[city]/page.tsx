import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioCard } from "@/components/StudioCard";
import { Container, PillLink, Section, StripeBand } from "@/components/ui";
import { CITIES, getCity } from "@/content/studios";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "Studios" };
  return {
    title: `${city.name} studios`,
    description: city.intro,
  };
}

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <section className="bg-ivory pb-12 pt-12 sm:pt-14">
        <Container>
          <Link
            href="/movement"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft underline-offset-8 hover:text-navy hover:underline"
          >
            ← Back to locations
          </Link>
          <h1 className="mt-6 text-balance text-4xl leading-[1.08] sm:text-5xl">
            {city.name} studios
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink">
            {city.intro}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Choose a studio and press <strong>Find a class</strong>. Your details
            go straight to that studio — not into a general inbox.
          </p>
        </Container>
      </section>

      <StripeBand tone="butter" />

      <Section tone="cream">
        <Container>
          <div className="flex flex-col gap-5">
            {city.studios.map((studio, i) => (
              <StudioCard
                key={studio.slug}
                studio={studio}
                citySlug={city.slug}
                cityName={city.name}
                index={i}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <PillLink key={c.slug} href={`/movement/${c.slug}`} quiet>
                {c.name} studios
              </PillLink>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
