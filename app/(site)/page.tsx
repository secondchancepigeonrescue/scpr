import type { Metadata } from "next";
import Link from "next/link";
import { LatestArticles } from "@/components/ArticleList";
import { BirdGrid } from "@/components/Birds";
import { ButtonLink, ButtonRow } from "@/components/Button";
import { AccentHeading, Callout, LogoPhoto, Photo, Section, SplitLayout, TextColumn } from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { CONTACT, LINKS } from "@/lib/site";

export const metadata: Metadata = { title: "Home" };

const cards = [
  { href: "/adopt", title: "Adopt", text: "their second chance starts with you!", image: "/sitepics/adoptbanner.webp" },
  { href: "/foster", title: "Foster", text: "temporary home with lifelong impact", image: "/sitepics/fosterpic.jpg", position: "center 20%" },
  { href: "/contact", title: "Contact", text: "have questions or concerns?", image: "/sitepics/contact.jpg" },
];

/** Heading on the left, link on the right */
function SectionHead({ title, href, link }: { title: string; href: string; link: string }) {
  return (
    <div data-reveal className="wrap mb-[26px] flex flex-wrap items-baseline justify-between gap-5">
      <h2 className="mb-0">{title}</h2>
      <Link href={href} className="font-heading text-[17px] tracking-[1.5px] text-link uppercase after:content-['_\2192'] hover:text-heading">
        {link}
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <PageHero title="Second Chance Pigeon Rescue" image="/sitepics/threebirds.jpg" position="center 45%" large>
        <p className="mt-4 border-l-4 border-accent pl-3.5 text-[15px] font-bold tracking-[2px] text-white uppercase">
          A second chance for birds left behind
        </p>
        <ButtonRow className="mt-7">
          <ButtonLink href="/birds">Available Birds</ButtonLink>
          <ButtonLink href="/apply" variant="outline-light">
            Apply
          </ButtonLink>
        </ButtonRow>
      </PageHero>

      {/* About */}
      <Section>
        <SplitLayout>
          <Photo src="/sitepics/twopigeons.jpg" alt="Two pigeons in enclosure" />
          <TextColumn>
            <p>
              <b>Second Chance Pigeon Rescue</b> is an independently operated pigeon rescue based in <b>Franklin, Ohio</b>. We are not
              currently a nonprofit organization, and donations made to SCPR are not tax-deductible, but help us cover the cost of
              veterinary care, food, housing, supplies, and other necessities involved in caring for rescued pigeons.
            </p>
            <ButtonRow>
              <ButtonLink href="/about">About SCPR</ButtonLink>
              <ButtonLink href={CONTACT.donate} variant="outline" target="_blank" rel="noopener">
                Donate
              </ButtonLink>
            </ButtonRow>
          </TextColumn>
        </SplitLayout>
      </Section>

      {/* Three photo links */}
      <Section>
        <div className="wrap grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              data-reveal="stagger"
              className="block overflow-hidden rounded-lg border border-line bg-surface-soft text-inherit transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img src={card.image} alt="" className="block size-full object-cover" style={card.position ? { objectPosition: card.position } : undefined} />
              </div>
              <div className="px-5 pt-[18px] pb-5">
                <h3 className="mb-1.5 text-[26px] after:text-accent after:content-['_\2192']">{card.title}</h3>
                <p className="text-[13px] leading-normal font-bold tracking-[1.5px] text-link uppercase">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <section className="mt-[50px] bg-band py-[50px] text-band-ink md:mt-[70px] md:py-[70px]">
        <SplitLayout reverse>
          <LogoPhoto />
          <TextColumn>
            <AccentHeading className="text-band-ink">Our Mission</AccentHeading>
            <p>
              We focus on rehabilitation, veterinary care, adoption, and advocacy for domestic pigeons (including feral birds) who are
              overlooked by traditional rescue systems. Our goal is to provide the second chance these birds need while promoting
              responsible pigeon ownership and welfare.
            </p>
            <ButtonLink href="/adopt" variant="solid-light">
              Adopt
            </ButtonLink>
          </TextColumn>
        </SplitLayout>
      </section>

      {/* Birds */}
      <Section>
        <SectionHead title="Available Birds" href="/birds" link="View Our Gallery" />
        <BirdGrid />
      </Section>

      {/* Articles */}
      <section className="mt-[50px] bg-surface-soft py-[50px] md:mt-[70px] md:py-[70px]">
        <SectionHead title="Articles" href="/articles" link="All Articles" />
        <LatestArticles limit={3} />
      </section>

      <Callout title="join the pet pigeon society!">
        <ButtonLink href={LINKS.societyDiscord}>Discord</ButtonLink>
      </Callout>
    </>
  );
}
