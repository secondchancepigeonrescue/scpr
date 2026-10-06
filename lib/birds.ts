// =========================================================
// BIRDS
//
// To add a bird, copy one of the blocks below and fill it in, then
// create its profile page at app/(site)/birds/<slug>/page.tsx
// (copy one of the existing ones).
// =========================================================

export type Bird = {
  slug: string;
  name: string;
  age: string;
  sex: string;
  tags: string[];
  image: string;
  /** Shown on the bird's card */
  status: string;
};

export const birds: Bird[] = [
  {
    slug: "brute",
    name: "Brute",
    age: "Age Unknown",
    sex: "Male",
    tags: ["Assumed Male", "Unsexed", "Single"],
    image: "/birds/images/brutepic.jpg",
    status: "Adopted!",
  },
  {
    slug: "ranch",
    name: "Ranch",
    age: "2 months old",
    sex: "Male",
    tags: ["Unsexed", "Single"],
    image: "/birds/images/ranchpic.jpg",
    status: "Ready to be adopted!",
  },
];

export function getBird(slug: string): Bird {
  const bird = birds.find((b) => b.slug === slug);
  if (!bird) throw new Error(`No bird with slug "${slug}" in lib/birds.ts`);
  return bird;
}
