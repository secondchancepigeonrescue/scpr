import type { Metadata } from "next";
import { BirdGrid } from "@/components/Birds";
import { Section } from "@/components/Layout";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Adoptable Birds" };

// When no birds are available, swap <BirdGrid /> for this:
//
//   <SplitLayout reverse>
//     <LogoPhoto />
//     <TextColumn>
//       <p>
//         We do not currently have any birds available for adoption! Please email us to inquire about
//         soon-to-be-available birds, or check back later!
//       </p>
//     </TextColumn>
//   </SplitLayout>

export default function BirdsPage() {
  return (
    <>
      <PageHero title="Available Birds" image="/sitepics/aboutpic.jpeg" position="center 39%" />
      <Section>
        <BirdGrid />
      </Section>
    </>
  );
}
