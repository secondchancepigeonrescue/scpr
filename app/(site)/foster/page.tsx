import type { Metadata } from "next";
import { Section, SplitLayout, Tagline, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Foster" };

export default function FosterPage() {
  return (
    <>
      <PageHero title="Foster" image="/sitepics/fosterpic.jpg" position="center 5%" />

      <Section>
        <SplitLayout>
          <TextColumn>
            <Tagline>temporary home with lifelong impact</Tagline>
            <p>
              Due to the small scale of our rescue, we do not currently offer foster opportunities to the general public via
              application. If you&apos;re interested in being a temporary foster for rescued and adoptable pigeons, please contact us to
              discuss details.
            </p>
            <p>We do not currently offer a foster-to-adopt program.</p>
          </TextColumn>
        </SplitLayout>
      </Section>
    </>
  );
}
