import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, ButtonRow } from "@/components/Button";
import { AccentHeading, Section, SplitLayout, Tagline, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Adopt" };

export default function AdoptPage() {
  return (
    <>
      <PageHero title="Adopt" image="/sitepics/adoptbanner.webp" position="center 50%" />

      <Section>
        <SplitLayout>
          <TextColumn>
            <AccentHeading>Adopt</AccentHeading>
            <Tagline>their second chance starts with you!</Tagline>
            <p>
              Adopting is a lifelong commitment. Despite their short lifespan in the wild, often less than five years, pigeons in
              captivity can live 10 to 15 years, with some known to pass 20! Our priority as a rescue is to ensure our birds are well
              cared for and that our adopters understand the commitment they&apos;re making when they adopt, matching potential owners
              to birds so that both parties are happy. Second Chance Pigeon Rescue offers open communication and lifelong advice to the
              adopters of birds we&apos;ve placed, ensuring our birds receive the highest quality of care adopters can provide after
              they leave our location.
            </p>
            <p>
              With any animal, adoption isn&apos;t a decision to be made lightly. See our <Link href="/articles">articles</Link> for
              more information on proper pigeon care and experiences.
            </p>
            <ButtonRow>
              <ButtonLink href="/birds">View Our Gallery</ButtonLink>
            </ButtonRow>
          </TextColumn>
        </SplitLayout>
      </Section>
    </>
  );
}
