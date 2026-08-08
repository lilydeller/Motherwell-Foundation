import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import {
  Container,
  Rule,
  Section,
  StripeBand,
} from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The MotherWell Foundation — questions, partnerships, or just saying hello.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory pb-12 pt-14 sm:pt-16">
        <Container>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl">
            We&rsquo;d love to hear from you
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink">
            Have a question, want to partner with us, or just want to say hello?
            Reach out and we&rsquo;ll get back to you.
          </p>
        </Container>
      </section>

      <StripeBand tone="sky" />

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-display text-2xl">Get in touch</h2>
              <Rule className="mt-4" />

              <dl className="mt-8 space-y-6 text-[0.95rem]">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-navy underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>

                {site.phone ? (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                        className="text-navy underline underline-offset-4"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    Instagram
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.instagram.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-navy underline underline-offset-4"
                    >
                      {site.instagram.handle}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    Serving
                  </dt>
                  <dd className="mt-1 text-ink">{site.serving}</dd>
                </div>
              </dl>

              <div className="mt-10 rounded-[1.25rem] border border-sky-soft bg-sky-pale p-6">
                <h3 className="font-display text-lg leading-snug">
                  Looking for a class?
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink">
                  Class requests go directly to the studio you choose — start on
                  the{" "}
                  <Link
                    href="/movement"
                    className="font-semibold text-navy underline underline-offset-4"
                  >
                    Movement page
                  </Link>{" "}
                  instead of this form so it reaches them faster.
                </p>
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-butter-deep bg-butter-soft/60 p-6">
                <h3 className="font-display text-lg leading-snug">
                  In crisis?
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink">
                  This form isn&rsquo;t monitored around the clock.{" "}
                  <a
                    href={site.crisis.href}
                    className="font-semibold text-navy underline underline-offset-4"
                  >
                    {site.crisis.text}
                  </a>{" "}
                  to reach the {site.crisis.label} — free, confidential and
                  available 24/7. In an emergency, call 911.
                </p>
              </div>
            </div>

            <div>
              <ContactForm
                topic="General question"
                showTopicPicker
                note="We usually reply within a couple of days. Nothing you send here is shared outside the foundation."
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
