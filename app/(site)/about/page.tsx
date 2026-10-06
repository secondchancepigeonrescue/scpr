import type { Metadata } from "next";
import { ButtonLink, ButtonRow } from "@/components/Button";
import { AccentHeading, Section, SplitLayout, Tagline, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image="/sitepics/aboutpic2.jpg" position="center 18%" />

      <Section>
        <SplitLayout>
          <TextColumn>
            <AccentHeading>About Us</AccentHeading>
            <Tagline>rescue, rehabilitation, and lifelong placement</Tagline>
            <p>
              <b>Second Chance Pigeon Rescue</b> was founded in January 2026 and is located in <b>Franklin, Ohio</b>. Since 2025, we have
              been developing our rehabilitation practices under the guidance of other pigeon rescues and organizations around the United
              States, alongside an avian veterinarian. Our mission is to take in non-releasable pigeons from southwest Ohio and surrounding
              areas, provide them with rehabilitation and veterinary care, and ultimately place them in safe homes through adoption.
            </p>
            <p>
              Pigeons are often excluded from traditional wildlife rehabilitation systems, and many animal shelters do not have the
              resources or programs necessary to care for them. As a result, injured, abandoned, and otherwise defenseless pigeons can
              have very few places to go. This is made worse by the long-standing perception of pigeons as vermin or &quot;sky rats,&quot;
              rather than as intelligent and complex animals deserving of care and compassion.
            </p>
            <p>
              We believe pigeons deserve a second chance despite the stereotypes and misconceptions surrounding them, and advocate for a
              better understanding of these often-overlooked birds, which can save them from being abandoned, injured, or otherwise left
              without a place to go. We aim to show the public that pigeons are far more than the stereotypes placed upon them.
            </p>
            <ButtonRow>
              <ButtonLink href="/birds">View Our Gallery</ButtonLink>
            </ButtonRow>
          </TextColumn>
        </SplitLayout>
      </Section>

      <Section>
        <SplitLayout>
          <TextColumn className="[&_p]:italic">
            <AccentHeading>About the Founder</AccentHeading>
            <Tagline className="not-italic">marilynn walz</Tagline>
            <p>
              I got into rehab just months into owning a pet pigeon, Violet. Derby City Pigeon Rescue played a major role in that.
            </p>
            <p>
              My first intake came in very skinny, and very weak. His name was Korys, and despite my best efforts, his body had been
              shutting down. He passed around 12 hours later. Regardless, I still rehabilitate. Korys was just one of millions of birds
              who are forced to race home. He had the luck of being in the comfort of a home, warm and safe, before he passed. Now I make
              it my goal to rescue and advocate against the racing and free flying of these beautiful birds.
            </p>
            <p>
              Now I rehabilitate under the guidance of trusted, well-respected pigeon rehabilitators from the United States, and with
              their help, plan to continue to do so for the foreseeable future! Just a month after recieving Korys, I recieved Goose, who
              is now bonded to my first pet pigeon, Violet, and remains as a member of our family.
            </p>
            <ButtonRow>
              <ButtonLink href="https://linktr.ee/localpigeonlady">My LinkTree</ButtonLink>
            </ButtonRow>
          </TextColumn>
        </SplitLayout>
      </Section>
    </>
  );
}
