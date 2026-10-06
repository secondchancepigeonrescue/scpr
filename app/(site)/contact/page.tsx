import type { Metadata } from "next";
import { ButtonLink, buttonClass } from "@/components/Button";
import { Field, Form } from "@/components/Form";
import { AccentHeading, Callout, Section, SplitLayout, Tagline, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { CONTACT, FORMS, LINKS } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" image="/sitepics/contact.jpg" position="center 32%" />

      <Section>
        <SplitLayout>
          <TextColumn>
            <AccentHeading>Contact</AccentHeading>
            <Tagline>
              Found a pigeon? Post on the <a href={LINKS.palomacyGroup}>Palomacy Help Group on Facebook</a> and/or join the{" "}
              <a href={LINKS.rescueDiscord}>Pigeon Rescue &amp; Rehab Discord</a>.
            </Tagline>
            <p>
              We welcome inquiries about adoption, fostering, support, or general pigeon care. We usually reply within 24 to 48 hours,
              but as a small rescue, we may occasionally need up to a week to respond. We appreciate your patience.
            </p>

            {/* Ways to reach us */}
            <ul className="mb-0 list-none pl-0 [&>li]:border-b [&>li]:border-line [&>li]:py-3 [&>li]:[overflow-wrap:anywhere] [&>li:first-child]:border-t">
              <li>
                <b>Facebook:</b>{" "}
                <a href={CONTACT.facebook} target="_blank">
                  Second Chance Pigeon Rescue
                </a>
              </li>
              <li>
                <b>Email:</b> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <b>Phone:</b> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                <span className="block text-[14px] text-muted">{CONTACT.phoneNote}</span>
              </li>
            </ul>

            <Form action={FORMS.contact}>
              <Field name="email" label="Your Email" type="email" />
              <Field name="message" label="Your Message" rows={5} />
              <button type="submit" className={buttonClass()}>
                Send Message
              </button>
            </Form>
          </TextColumn>
        </SplitLayout>
      </Section>

      <Callout title="Join our community: Pet Pigeon Society!" className="mt-20">
        <ButtonLink href={LINKS.societyFacebook}>Facebook</ButtonLink>
        <ButtonLink href={LINKS.societyDiscord}>Discord</ButtonLink>
      </Callout>
    </>
  );
}
