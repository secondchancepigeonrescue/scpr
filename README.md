# Second Chance Pigeon Rescue

Website for [secondchancepigeonrescue.com](https://www.secondchancepigeonrescue.com), built with Next.js, React and Tailwind CSS and exported as a static site for GitHub Pages.

## Working on the site

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the static site to out/
```

Pushing to `main` builds and publishes the site (`.github/workflows/deploy.yml`).

## Where things are

| To change…                         | Edit                                             |
| ---------------------------------- | ------------------------------------------------ |
| A page                             | `app/(site)/<page>/page.tsx`                     |
| An article                         | `app/(site)/blog/<slug>/page.tsx`                |
| Article list, dates, featured post | `lib/articles.ts`                                |
| A bird's profile                   | `app/(site)/birds/<slug>/page.tsx`               |
| Bird cards (status, age, tags)     | `lib/birds.ts`                                   |
| Email, phone, social links, forms  | `lib/site.ts`                                    |
| The announcement banner            | `components/Banner.tsx`                          |
| Menu / footer                      | `components/Header.tsx`, `components/Footer.tsx` |
| Colors (light and dark)            | `app/globals.css`                                |
| Photos, PDF, CNAME                 | `public/`                                        |

The adoption application and contract (`app/(forms)/`) open without the menu and footer.
