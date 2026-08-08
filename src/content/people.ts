/**
 * TEAM — PLACEHOLDER BIOS.
 * Names, roles, photos and copy all still to come from the client.
 * Set `photo` to a path in /public once real images are supplied.
 */

export type Person = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  photo?: string;
};

export const PEOPLE: Person[] = [
  {
    slug: "founder",
    name: "Our founder", // TODO: real name
    role: "Founder & director",
    bio: [
      // TODO: replace both paragraphs with the founder's own words.
      "The MotherWell Foundation started the way most of these things do — from going through it, noticing how little support there was on the other side of delivery, and deciding that wasn't acceptable.",
      "What began as a list of studios worth trusting has grown into a network across Charleston, Columbia and Greenville, built around one question: what would have actually helped?",
    ],
  },
  {
    slug: "nutrition-lead",
    name: "Our nutrition lead", // TODO: real name
    role: "Medical student, School of Medicine — Columbia",
    bio: [
      "Our nutrition and medical content is led by a medical student at the School of Medicine in Columbia, working alongside our partner dietitian offices.",
      "She reviews the guides, answers questions submitted through the Nutrition page, and helps run the monthly Zoom sessions.",
    ],
  },
  {
    slug: "partnerships",
    name: "Partnerships", // TODO: real name / decide whether this is a person or a section
    role: "Studios & dietitian offices",
    bio: [
      "We work with local movement studios and dietitian offices rather than building everything ourselves — the expertise is already in these communities.",
      // TODO: add a short line about each partner once those relationships are finalised.
      "Every partner is chosen for one reason: they know how to work with a body that has just given birth.",
    ],
  },
];

export const VALUES = [
  {
    title: "Evidence-based, always",
    body: "Everything on this site is reviewed by someone qualified to review it, and we say plainly when something is educational rather than medical advice.",
  },
  {
    title: "Local, not theoretical",
    body: "Real studios and real offices in Charleston, Columbia and Greenville — support you can actually get to on a Tuesday morning.",
  },
  {
    title: "Whole-body, whole-person",
    body: "Movement, nutrition and mental health are the same conversation. When moms thrive, families thrive.",
  },
  {
    title: "No barrier to entry",
    body: "Asking a question here is free, and it stays between you, us and the person answering it.",
  },
];
