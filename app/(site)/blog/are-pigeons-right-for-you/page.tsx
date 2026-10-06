import { ArticleLayout, articleMetadata } from "@/components/Article";

const slug = "are-pigeons-right-for-you";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <h2>Introduction</h2>
      <p>
        Pigeons exhibit a variety of personalities, both among individuals and within the flock. Those who currently have pet pigeons
        have nearly all been misled by a myth in the pet pigeon community.
      </p>
      <p>
        Before bringing your future pet pigeon home, it&apos;s important to take everything into consideration. Pigeons have different
        needs, behaviors, and long-term care requirements than other birds. These needs also vary from pigeon to pigeon based on
        individual preferences. Pigeon care requirements are often overlooked, but the commitment of time and resources is vital to
        caring for them.
      </p>
      <p>
        Pigeons also thrive on routine and a stable environment. Veterinary care, housing, a balanced diet, and daily enrichment of some
        sort are required to keep them happy and healthy. This post is designed to help potential caretakers evaluate if a pet pigeon is
        the right choice for their home. We want everyone to make informed decisions, not impulsive ones.
      </p>

      <h2>Considerations</h2>
      <ul className="space-y-6">
        <li>
          <b>Personalities differ in pigeons, regardless of where they came from.</b> Some breeders claim their birds are consistently
          affectionate and sweet, while many rescues take months to warm up. But the reverse also often happens, with birds from
          breeders being skittish for weeks or months, and rescue birds being sweet and affectionate within days. Not all pigeons are the
          same when it comes to preference and personality!
        </li>
        <li>
          <b>Pigeons are messy and dusty.</b> For this reason, air purifiers are a must. Those who have respiratory issues such as
          allergies or asthma, or something more serious, may not be able to keep pigeons without additional air purifiers. In
          addition, pigeons molt essentially year-round, with a few bigger molts throughout the year, increasing the need for cleaning.
          Pigeons also throw seed around much more than you&apos;d think!
        </li>
        <li>
          <b>Pigeons need adequate time for both free roam and interaction.</b> Free roaming is indoors ONLY. This does not apply to
          birds housed in properly sized outdoor aviaries. With our recommended minimum of a 42-inch dog kennel, the enclosure provides
          enough space for the rest of the day outside the 4+ hours of recommended free roam time.
        </li>
        <li>
          <b>Pigeons aren&apos;t family pets.</b> Pigeons usually bond with a single bird or person, rather than bonding to multiple
          members of the family. They may even go as far as to chase and bite others they don&apos;t view as their mate.
        </li>
        <li>
          <b>Pigeons may show a range of behavior if they bond to you.</b> This includes some romantic behavior, including being nesty,
          wanting cuddles, and wanting to be in your space. Unfortunately, that includes mating behavior. Male birds will hump and often
          ejaculate on their owners. Some birds may playfight, which includes a lot of biting!
        </li>
        <li>
          <b>Pigeons are difficult to take across international borders.</b> Many places have strict regulations on bringing birds from
          other countries, and pigeons are often classified as poultry when shipped.
        </li>
        <li>
          <b>Pigeons are quieter than some birds, but they can still be noisy.</b> Pigeons don&apos;t scream or make shrill noises as
          parrots do, but coos can be loud and constant, and often you can&apos;t get them to stop despite your best efforts.
        </li>
        <li>
          <b>Pigeons can&apos;t be trained by punishment.</b> Screaming, yelling, hitting, etc., don&apos;t register with pigeons as a
          sign they did something wrong. They can only be trained by positive reinforcement.
        </li>
        <li>
          <b>Pigeons cannot be with other pets.</b> Dogs, cats, ferrets, and other pets all pose a predatory risk for pigeons. Parrots
          and even other dove species cannot be kept with pigeons due to behavioral differences.
        </li>
        <li>
          <b>With pairs, if you get two birds from two different sources, they may not be compatible.</b> You may have to rehome one or
          both birds if it doesn&apos;t work out.
        </li>
        <li>
          <b>With pairs, double the bird and double the mess!</b> Pigeons are already messy on their own. Two birds double the mess, so
          expect to clean at least twice as much.
        </li>
        <li>
          <b>For same-sex pairs, you need to replace eggs with fakes.</b> You cannot stop pigeons, even single hens bonded to you, from
          producing eggs. You need to replace the eggs with fake eggs and throw the real ones away. If you can&apos;t handle this,
          don&apos;t get a same-sex pair.
        </li>
      </ul>
    </ArticleLayout>
  );
}
