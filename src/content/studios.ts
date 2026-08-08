/**
 * ────────────────────────────────────────────────────────────────────────────
 * PARTNER STUDIOS — PLACEHOLDER DATA
 *
 * These entries exist so the Movement flow is fully built and clickable. Every
 * studio below still needs: confirmed partnership, correct address, and the
 * `email` field filled in — that address is where its intake form is delivered.
 * Studios with an empty `email` fall back to the foundation inbox.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type Studio = {
  slug: string;
  name: string;
  address: string;
  /** Where this studio's intake form is delivered. Empty = foundation inbox. */
  email: string;
  blurb: string;
  offerings: string[];
  /** Optional external schedule link, shown as a secondary action. */
  scheduleUrl?: string;
};

export type City = {
  slug: string;
  name: string;
  state: string;
  intro: string;
  studios: Studio[];
};

export const CITIES: City[] = [
  {
    slug: "charleston",
    name: "Charleston",
    state: "SC",
    intro:
      "Partner studios across the Charleston area offering pre- and postnatal movement, mom-and-baby classes and small-group strength work.",
    studios: [
      {
        slug: "harbor-pilates",
        name: "Harbor Pilates",
        address: "Downtown Charleston, SC",
        email: "",
        blurb:
          "Reformer and mat classes with instructors trained in postpartum core and pelvic floor recovery.",
        offerings: ["Reformer", "Postnatal core", "Private sessions"],
      },
      {
        slug: "peninsula-movement",
        name: "Peninsula Movement",
        address: "West Ashley, Charleston, SC",
        email: "",
        blurb:
          "Small-group strength and mobility built around the realities of the fourth trimester.",
        offerings: ["Strength", "Mobility", "Mom & baby"],
      },
      {
        slug: "tidewater-studio",
        name: "Tidewater Studio",
        address: "Mount Pleasant, SC",
        email: "",
        blurb:
          "Gentle mat Pilates and breathwork, with babies welcome in every class.",
        offerings: ["Mat Pilates", "Breathwork", "Babies welcome"],
      },
    ],
  },
  {
    slug: "columbia",
    name: "Columbia",
    state: "SC",
    intro:
      "Partner studios in the Midlands, close to the School of Medicine, offering supported returns to movement.",
    studios: [
      {
        slug: "congaree-pilates",
        name: "Congaree Pilates",
        address: "Downtown Columbia, SC",
        email: "",
        blurb:
          "Progressive reformer programming that meets you where your recovery actually is.",
        offerings: ["Reformer", "Progressive return", "Private sessions"],
      },
      {
        slug: "midlands-mom-strong",
        name: "Midlands Mom Strong",
        address: "Forest Acres, Columbia, SC",
        email: "",
        blurb:
          "Strength classes for postpartum moms, with childcare during weekday mornings.",
        offerings: ["Strength", "Childcare available", "Weekday mornings"],
      },
    ],
  },
  {
    slug: "greenville",
    name: "Greenville",
    state: "SC",
    intro:
      "Partner studios in the Upstate, from first walks after delivery through a full return to training.",
    studios: [
      {
        slug: "reedy-river-pilates",
        name: "Reedy River Pilates",
        address: "Downtown Greenville, SC",
        email: "",
        blurb:
          "Pre- and postnatal reformer with an instructor-led plan for your first twelve weeks back.",
        offerings: ["Reformer", "Prenatal", "12-week plan"],
      },
      {
        slug: "upstate-movement-co",
        name: "Upstate Movement Co.",
        address: "Greenville, SC",
        email: "",
        blurb:
          "Mom-and-baby mat classes plus a quiet space to feed and change before or after.",
        offerings: ["Mat classes", "Mom & baby", "Feeding space"],
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getStudio(citySlug: string, studioSlug: string) {
  const city = getCity(citySlug);
  const studio = city?.studios.find((s) => s.slug === studioSlug);
  return studio ? { city, studio } : undefined;
}
