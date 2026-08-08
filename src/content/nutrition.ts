/**
 * PLACEHOLDER CONTENT — written so the Nutrition page is complete and usable
 * today. Everything here should be reviewed and replaced by the dietitian
 * partner and the medical student lead before launch.
 */

export type Recipe = {
  slug: string;
  title: string;
  blurb: string;
  time: string;
  tags: string[];
};

export const RECIPES: Recipe[] = [
  {
    slug: "overnight-oats",
    title: "One-handed overnight oats",
    blurb:
      "Oats, milk, chia and whatever fruit you have. Made the night before, eaten with a baby on your other arm.",
    time: "5 min + overnight",
    tags: ["Breakfast", "No cook", "Fibre"],
  },
  {
    slug: "sheet-pan-chicken",
    title: "Sheet-pan chicken and vegetables",
    blurb:
      "One tray, one temperature, enough leftovers for tomorrow's lunch. Protein-forward and very forgiving.",
    time: "35 min",
    tags: ["Dinner", "Leftovers", "Protein"],
  },
  {
    slug: "lentil-soup",
    title: "Freezer lentil soup",
    blurb:
      "Iron-rich and cheap. Make a double batch and freeze it flat — a good thing to have on hand before delivery.",
    time: "40 min",
    tags: ["Freezer", "Iron", "Batch"],
  },
  {
    slug: "yogurt-bowl",
    title: "Savoury yoghurt bowl",
    blurb:
      "Greek yoghurt, olive oil, salt, cucumber, toasted seeds. Protein without another sweet thing.",
    time: "5 min",
    tags: ["Snack", "Protein", "No cook"],
  },
  {
    slug: "trail-mix",
    title: "Nursing-station trail mix",
    blurb:
      "Nuts, dried fruit and dark chocolate in a jar by wherever you feed. Calories that don't need two hands.",
    time: "5 min",
    tags: ["Snack", "Batch", "Energy"],
  },
  {
    slug: "big-salad",
    title: "The big salad that keeps",
    blurb:
      "Sturdy greens, a grain, a protein and a jar of dressing. Assembles in a minute for three days running.",
    time: "20 min",
    tags: ["Lunch", "Batch", "Vegetables"],
  },
];

export const GUIDES: { title: string; body: string }[] = [
  {
    title: "Eating enough while breastfeeding",
    body: "Milk production takes real energy — usually a few hundred extra calories a day, plus more fluid than you think. The most common issue we see isn't the wrong food, it's not enough of it. Keep something you can eat one-handed wherever you feed, and drink water at every session.",
  },
  {
    title: "Iron, and why you might be exhausted",
    body: "Blood loss during delivery can leave iron stores low for months, and low iron feels a lot like ordinary new-parent tiredness. Red meat, lentils, beans and fortified cereals all help, and vitamin C alongside them improves absorption. If exhaustion isn't improving, ask your provider about a ferritin check.",
  },
  {
    title: "Protein across the day, not all at dinner",
    body: "Recovery and tissue repair go better with protein spread across meals rather than saved for the evening. A rough target is a palm-sized portion at each meal plus a protein-containing snack — eggs, yoghurt, beans, fish, chicken, tofu.",
  },
  {
    title: "Feeding yourself when there's no time",
    body: "Perfect is not the goal. A stocked freezer, a few things that need no cooking, and accepting every offer of food are all legitimate nutrition strategies in the fourth trimester.",
  },
  {
    title: "Supplements: what's usually worth it",
    body: "Many providers suggest continuing a prenatal vitamin while breastfeeding, and vitamin D is commonly recommended in our region. Supplements interact with medications and conditions, so run your list past your OB, midwife or dietitian rather than a website.",
  },
];
