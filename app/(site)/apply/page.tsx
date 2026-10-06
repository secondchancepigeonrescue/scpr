import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Photo, Section, SplitLayout, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Apply" };

export default function ApplyPage() {
  return (
    <>
      <PageHero title="Apply" image="/sitepics/applybanner.webp" position="center 42%" />

      <Section>
        <SplitLayout reverse>
          <Photo src="/sitepics/adopt2pix.jpeg" alt="Rescue pigeon" position="center 15%" />
          <TextColumn>
            <p>
              Thank you for choosing to welcome a pigeon into your home! Second Chance Pigeon Rescue&apos;s goal is to place every one
              of our rescue birds in a loving home. We allow potential adopters to inquire about birds they&apos;re interested in, but
              ultimately we will match you with the bird best suited to you. We offer shipping in good weather, or we can meet within
              two hours of Franklin, OH.
            </p>
            <ButtonLink href="/adoption-application" target="_blank">
              Adoption Application
            </ButtonLink>
          </TextColumn>
        </SplitLayout>
      </Section>
    </>
  );
}
