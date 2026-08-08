/**
 * Single place for the details that change once things are finalised.
 * Everything marked TODO is a placeholder waiting on the client.
 */
export const site = {
  name: "The MotherWell Foundation",
  tagline: "Movement. Nutrition. Mind. You, supported.",
  description:
    "The MotherWell Foundation supports moms through movement, nutrition and mental wellness in Charleston, Columbia and Greenville, South Carolina.",

  // TODO: confirm the public-facing address for the foundation
  email: "hello@themotherwellfoundation.org",
  phone: "" as string, // TODO: add if you want a phone number listed publicly
  instagram: {
    handle: "@themotherwellfoundation",
    url: "https://instagram.com/themotherwellfoundation",
  },
  serving: "Charleston · Columbia · Greenville, South Carolina",

  crisis: {
    line: "988",
    label: "988 Suicide & Crisis Lifeline",
    href: "tel:988",
    text: "Call or text 988",
  },
} as const;
