import type { Metadata } from "next";
import Link from "next/link";
import { AccentHeading, Section, SplitLayout, Tagline, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { CONTACT, LINKS } from "@/lib/site";

export const metadata: Metadata = { title: "FAQ" };

/** One question on its own line above its answer */
function Question({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 border-b border-line pb-5">
      <h3 className="mb-1.5 text-[21px] leading-[1.7] tracking-[0.5px] normal-case">{q}</h3>
      <p className="mb-0">{children}</p>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" image="/sitepics/aboutpic2.jpg" position="center 18%" />

      <Section>
        <SplitLayout>
          <TextColumn>
            <AccentHeading>Frequently Asked Questions</AccentHeading>

            <Tagline>common questions</Tagline>
            <Question q="What species does SCPR take in?">
              We ONLY take in domestic rock doves, otherwise known as pigeons, with plans to set up enclosures for domestic dove intake.
              We do not provide support or rehabilitation to native species of wildlife. If you are located in Ohio and find a native
              bird species in need of help, please find a rehabilitator through the{" "}
              <a href="https://www.owra.org/find-a-rehabilitator">Ohio Wildlife Rehabilitators Association</a>.
            </Question>
            <Question q="Do you accept owner surrenders?">
              We do not accept owner surrenders <b>except</b> in cases of emergency. Details regarding the emergency are never shared
              with the public. If you require emergency surrender, please <Link href="/contact">contact us</Link> as soon as possible.
              For quicker response time, please message us through <a href={CONTACT.facebook}>Facebook Messenger</a>.
            </Question>
            <Question q="I found a pigeon. What do I do?">
              Please read our article <Link href="/blog/i-found-an-injured-pigeon">I Found An Injured Pigeon</Link> for more information
              on how to help a downed, injured, ill, or sick pigeon. You can also <Link href="/contact">contact us</Link> for more
              assistance. If we are unable to assist you, please post the pigeon and your location to the{" "}
              <a href={LINKS.palomacyGroup}>Palomacy Help Group for Pigeon &amp; Dove Rescue &amp; Adoption</a>. If the pigeon has been
              attacked by a cat, please contact the closest pigeon-friendly rescue and post on{" "}
              <a href={LINKS.palomacyGroup}>Palomacy Help Group (Facebook)</a> immediately.
            </Question>
            <Question q="Can I come visit the rescue?">
              No. Unfortunately, we do not have a physical public location for visitors or adopters.
            </Question>

            <Tagline className="mt-10">adoption questions</Tagline>
            <Question q="Are pigeons good pets?">
              Pigeons are great pets for many people who want a gentler, quieter bird than a parrot. They still coo loudly, make messes,
              and need daily care. However, they have unique personalities, can be trained to do simple tricks, and can live as long as
              or longer than many other pets.
            </Question>
            <Question q="I have dogs/cats. Can I still have a pet pigeon?">
              Yes! Many people have <i>multiple</i> dogs and/or cats and still keep pigeons safely. This requires proper
              predator-proofing of the pigeon&apos;s living space, and careful supervision when the birds are out of their enclosure. We
              recommend absolutely zero predator-prey interaction, and free roaming your bird(s) in areas where your other animals are
              not free roamed. Additionally, we do not recommend free roaming your pigeons with any other pets, including other birds
              (even other dove species), parrots, rabbits, etc.
            </Question>
            <Question q="What do you require to adopt?">
              Potential adopters must be 18 years old or older, or have the consent of a parent or guardian (who must fill out the
              application). You can apply via our <Link href="/apply">adoption application</Link>. Adopters are required to keep their
              birds in a secure enclosure and home, keep a smoke-free home, and provide adequate care. Additionally, pigeons from our
              rescue cannot be free flown, bred, or shown in pigeon shows, and must never be abandoned or dumped.
            </Question>
            <Question q="What if I can't keep my bird?">
              If you&apos;re unable to keep your bird any longer, regardless of the reason, SCPR will always take back a bird from any
              adopter. Please <Link href="/contact">contact us</Link> if you cannot keep your bird so we can arrange transport.
            </Question>

            <Tagline className="mt-10">pigeon questions</Tagline>
            <Question q="Don't pigeons carry diseases?">
              Contrary to popular belief, pigeons are not as disease-ridden as many claim they are. Of the diseases and parasites
              pigeons can carry, those that can spread to humans (zoonotic diseases) pose a low risk. The highest risk comes from
              inhaling or ingesting dust and feces.
            </Question>
            <Question q="How long do pigeons live?">
              Pigeons live on average 10 to 15 years, with some individual birds living over 20 years. If you plan to adopt a pigeon,
              plan to care for them for many years!
            </Question>
          </TextColumn>
        </SplitLayout>
      </Section>
    </>
  );
}
