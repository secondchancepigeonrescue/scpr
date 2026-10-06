// =========================================================
// ARTICLES
//
// To add an article, copy one of the blocks below and fill it in, then
// write the article itself at app/(site)/blog/<slug>/page.tsx
// (copy one of the existing ones).
//   date      YYYY-MM-DD; decides the order on the page (newest first by default)
//   tags      which filter button it appears under: "pigeon care",
//             "rescue & health", "stories" or "other topics"
//   keywords  extra words the search box should find; never shown on the page
//
// The FEATURED article on the right of the Articles page is set
// just below the list.
// =========================================================

export type Article = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  keywords: string[];
  excerpt: string;
  image: string;
  /** object-position for the list thumbnail */
  imagePosition?: string;
  /** background-position for the banner photo on the article page */
  heroPosition?: string;
};

export const articles: Article[] = [
  {
    slug: "scprs-guide-to-pigeon-care",
    title: "SCPR's Guide to Pigeon Care",
    date: "2026-03-09",
    tags: ["pigeon care"],
    keywords: ["getting started", "nutrition", "housing", "care", "diet", "seed", "feed", "grit", "cage", "enclosure", "aviary", "toys", "beginner"],
    excerpt: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
    image: "/blog/images/pigeoncareguide.jpg",
  },
  {
    slug: "are-pigeons-right-for-you",
    title: "Are Pigeons Right For You?",
    date: "2026-03-09",
    tags: ["pigeon care"],
    keywords: ["getting started", "pet", "adopt", "adoption", "commitment", "pros", "cons", "beginner"],
    excerpt: "Pigeons make wonderful pets, but only for the right people. Here, we discuss the considerations, including positives and negatives, of owning pet pigeons long term.",
    image: "/blog/images/arepigeonsrightforyou.jpg",
    imagePosition: "center 32%",
    heroPosition: "center 28%",
  },
  {
    slug: "i-found-an-injured-pigeon",
    title: "I Found An Injured Pigeon",
    date: "2026-03-11",
    tags: ["rescue & health"],
    keywords: ["found", "injured", "sick", "hurt", "catch", "trap", "emergency", "rescuer"],
    excerpt: "If you've found a pigeon you believe is in danger, sick, or hurt, you've already taken the first step: noticing a pigeon in need. We discuss how to catch, restrain, and house a sick or injured pigeon before transport to a rescuer.",
    image: "/blog/images/ifoundapigeon.jpg",
    heroPosition: "center 18%",
  },
  {
    slug: "greens-fruits-and-toxic-foods",
    title: "Greens, Fruits, & Toxic Foods",
    date: "2026-03-10",
    tags: ["pigeon care"],
    keywords: ["nutrition", "health", "food", "diet", "vegetables", "fruit", "greens", "toxic", "poison", "avocado", "treats"],
    excerpt: "Greens and vegetables can be great enrichment items! However, some foods are toxic. It's important to know what these are so your pigeon doesn't eat them.",
    image: "/blog/images/safevstoxicfoods.jpg",
  },
  {
    slug: "household-hazards-to-pigeons",
    title: "Household Hazards To Pigeons",
    date: "2026-03-12",
    tags: ["pigeon care"],
    keywords: ["getting started", "health", "safety", "danger", "toxic", "poison", "plants", "nonstick", "teflon", "candles", "fumes"],
    excerpt: "Many everyday household items, from nonstick cookware to houseplants, can be dangerous to pigeons. Here, we cover hazards in the air, toxic plants, physical dangers, and items that are easily swallowed.",
    image: "/blog/images/hazards.jpg",
    heroPosition: "center 30%",
  },
];

// Featured article (right side of the Articles page).
// slug must match one of the articles above; summary is yours to write.
export const featured = {
  slug: "scprs-guide-to-pigeon-care",
  summary: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
};

export const filters = [
  { label: "All", value: "all" },
  { label: "Pigeon Care", value: "pigeon care" },
  { label: "Rescue & Health", value: "rescue & health" },
  { label: "Stories", value: "stories" },
  { label: "Other Topics", value: "other topics" },
];

export const sorts = [
  { label: "Newest to oldest", value: "newest" },
  { label: "Oldest to newest", value: "oldest" },
  { label: "Alphabetical (A to Z)", value: "alphabetical" },
];

export function getArticle(slug: string): Article {
  const article = articles.find((a) => a.slug === slug);
  if (!article) throw new Error(`No article with slug "${slug}" in lib/articles.ts`);
  return article;
}

export function articleHref(article: Article) {
  return `/blog/${article.slug}`;
}

/** "2026-03-09" -> "March 9, 2026" */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
