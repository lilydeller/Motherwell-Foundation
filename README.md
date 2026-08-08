# The MotherWell Foundation

Next.js (App Router) + Tailwind v4. Ivory, butter yellow and light blue, soft
wavy edges, one pill button style throughout.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

| What | Where |
| --- | --- |
| Contact details, crisis line, Instagram | `src/content/site.ts` |
| Partner studios a

nd their intake emails | `src/content/studios.ts` |
| Recipes and nutrition guides | `src/content/nutrition.ts` |
| Mind topics and helplines | `src/content/mind.ts` |
| Team bios | `src/content/people.ts` |
| Colours, button, form field, stripes | `src/app/globals.css` |
| Logo artwork | `public/brand/` |

Pages: `/`, `/movement`, `/movement/[city]`, `/nutrition`, `/mind`, `/about`,
`/contact`. Form handlers: `src/app/api/intake` and `src/app/api/contact`.

## Before launch

1. **Studio emails.** Fill in `email` for each studio in
   `src/content/studios.ts`. That address is where the studio's own intake form
   is delivered. Studios left blank fall back to the foundation inbox.
2. **Email delivery.** Copy `.env.example` to `.env.local` and set
   `RESEND_API_KEY` and `MAIL_FROM`. Until then, submissions are validated and
   logged to the server console rather than sent. The provider is isolated in
   `src/lib/notify.ts` if you'd rather use something else.
3. **Photography.** Every image slot is currently a tinted placeholder — no
   stock or AI photos anywhere. Search the codebase for `PHOTO` to find them.
   Roughly nine are needed: hero, movement hero, a class in progress, food,
   mind, about, three city shots, plus recipe and studio thumbnails (those two
   grids reuse whatever you give them).
4. **Content review.** Nutrition guides and Mind topics are placeholder copy
   written to be safe and accurate; they should be reviewed by the dietitian
   partner and medical student lead. Team bios in `people.ts` are placeholders.
5. **Logo.** `public/brand/` holds transparent cut-outs of the supplied
   artwork in three brand colours. Replace those PNGs when the final logo
   arrives — same filenames, nothing else needs to change.
6. **Real partner list.** The studios currently listed are examples so the
   flow is clickable. Swap them for confirmed partners.

## Design notes

- One button style only: `.btn` (butter yellow, pill, 3rem tall). `.btn-quiet`
  is the same shape outlined.
- Wide stripes appear once per page as a faded band, never as a full
  background. `<StripeBand />`.
- The wavy edge is `<Ruffle />` — used at the top of the footer and on the
  intake form. The nav bar is a flat blue bar.
- Curved text is `<CurvedText />`, used twice site-wide on purpose.
- No icons. Section dividers use a thin rule and numerals instead.
