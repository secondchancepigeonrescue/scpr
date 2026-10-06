import { ArticleLayout, Figure, FoldOut, ImageRow, articleMetadata } from "@/components/Article";

const slug = "scprs-guide-to-pigeon-care";
export const metadata = articleMetadata(slug);

const references = (
  <>
    <li>
      Corbitt, C., Satre, D., Adamson, L. A., Cobbs, G. A., &amp; Bentley, G. E. (2007). Dietary phytoestrogens and photoperiodic
      response in a male songbird, the dark-eyed junco (Junco hyemalis). General and Comparative Endocrinology, 154(1-3), 16-21.{" "}
      <a href="https://doi.org/10.1016/j.ygcen.2007.06.026" target="_blank">
        https://doi.org/10.1016/j.ygcen.2007.06.026
      </a>
    </li>
    <li>
      Mabuchi, Y., &amp; Frankel, T. L. (2016). Functions of innate and acquired immune system are reduced in domestic pigeons
      (Columba livia domestica) given a low protein diet. Royal Society open science, 3(3), 150408.{" "}
      <a href="https://doi.org/10.1098/rsos.150408" target="_blank">
        https://doi.org/10.1098/rsos.150408
      </a>
    </li>
    <li>
      Sales, J., &amp; Janssens, G. P. J. (2003). Nutrition of the domestic pigeon (Columba livia domestica). World’s Poultry Science
      Journal, 59(2), 221–232.{" "}
      <a href="https://doi.org/10.1079/WPS20030014" target="_blank">
        https://doi.org/10.1079/WPS20030014
      </a>
    </li>
    <li>
      Shapiro, M. D., &amp; Domyan, E. T. (2013). Domestic pigeons. Current biology : CB, 23(8), R302&mdash;R303.{" "}
      <a href="https://doi.org/10.1016/j.cub.2013.01.063" target="_blank">
        https://doi.org/10.1016/j.cub.2013.01.063
      </a>
    </li>
    <li>
      Stamenov, Anton &amp; Arkumarev, Volen &amp; Nikolov, Stoyan. (2025).{" "}
      <a href="http://www.ornis.hu/articles/OrnisHungarica_vol33(1)_p213-227.pdf">
        Impact of raptor predation on racing pigeon losses: Insights from Bulgaria and implications for mitigation strategies
      </a>
      . Ornis Hungarica. 33. 213-227. 10.2478/orhu-2025-0014.
    </li>
  </>
);

export default function Page() {
  return (
    <ArticleLayout slug={slug} references={references}>
      <h2>Introduction</h2>
      <p>
        Pigeons are among the most historically significant and widely misunderstood birds that the human race has domesticated. Our
        current domesticated pigeons have one common ancestor, the rock pigeon (<i>Columba livia</i>). These birds were native to
        numerous areas in Europe, North Africa, the Middle East, and South Asia. According to Shapiro and Domyan, it was likely that
        humans used pigeons as utility birds for a food source as early as 10,000 years ago in the Fertile Crescent, though it isn&apos;t
        known whether they were domesticated that early or simply hunted consistently. It is also noted by Shapiro and Domyan that fancy
        breeds were developed anywhere from 2000 years ago to the present.
      </p>
      <p>
        One well-recognized trait of the wild rock pigeon is its innate homing instinct. For millennia, they served as messengers. Their
        service is well documented in the history of both World Wars. Among the most famous is G.I. Joe, a U.S. Army pigeon and arguably
        the best-known carrier pigeon of World War II, who saved over 1,000 British troops in 1943 when he delivered a message canceling
        an Allied air raid as planes were preparing to take off. He was the first non-British recipient of the Dickin Medal. Another is
        Mary of Exeter from the United Kingdom, who also received a Dickin Medal. She was severely wounded yet still delivered her
        message.
      </p>
      <p>
        After World War II, however, new technology pushed pigeons to the side, and militaries no longer had a use for them. Many were
        killed or abandoned after the war ended. Those who continued to breed and train homing pigeons developed pigeons worth their
        weight in gold and more. Pigeon racing became a popular sport, with prize purses ranging up to thousands of dollars. However,
        studies have shown pigeon racing to be very harmful to the birds. Predation is one of the largest risks, accounting for the
        majority of lost birds. Other causes include being disoriented, colliding with power lines or other objects, or poisoning.
      </p>
      <p>
        As pigeon owners, pigeon lovers, and rescuers, all of whom dedicate their time to learning more about these animals, it&apos;s
        our duty to provide the best possible care we can. This means not only advocating for them, but also practicing the advice we
        give to others. Pigeons are our responsibility. Advocating for them starts with learning about what they need.
      </p>
      <p>
        Understand that while studies on pigeons do exist, many of them focus specifically on racing pigeons and treat pigeons as
        livestock rather than pets. Pet pigeon owners need to apply their findings with some nuance. Much information discussed by the
        pet pigeon community is often anecdotal. In addition, there are pet pigeon influencers who have in the past spread
        misinformation regarding pet pigeon care, which many took as fact, repeated, and used as the basis for their approach to pigeon
        care. Do your research. Use any advice, including ours, at your own discretion.
      </p>

      <FoldOut title="Diet and Nutrition">
        <h3>Seeds</h3>
        <p>
          Pigeons are granivores and require a nutritionally balanced seed-based diet. In addition, a complete multivitamin and mineral
          supplement is required in order to keep your pigeon healthy. Most pigeon feeds will be found in feed stores, not pet stores.
        </p>
        <ImageRow>
          <Figure
            src="https://dmfnaturecenter.com/wp/wp-content/uploads/2019/08/special-no-corn-pigeon-mix-50fd4d4c.jpg"
            alt="Pigeon seed"
            caption="Des Moines No Corn Special Mix (13.5%)."
          />
          <Figure
            src="https://globalpigeonsupply.com/cdn/shop/products/browns_pigeon_bag_98e7eae3-f787-424c-94b8-e13083fee392_700x700.jpg?v=1658854074"
            alt="Bag of pigeon seed"
            caption="Brown's Bucket of Gold is a popular mix."
          />
        </ImageRow>
        <p>
          We recommend starting out with 2 tbsp fed each morning for a 400g bird. Your bird may need more if they&apos;re eating all of
          their food by early evening, and may need less if they have food left over by the time you go to bed. If fed too much food,
          pigeons will often pick out the fattier seeds, leaving behind the rest after they&apos;re full, leading to an imbalanced diet.
        </p>
        <p>Our recommended nutritional ratio is as follows:</p>
        <ul>
          <li>
            <b>Protein</b>: 12-15%
          </li>
          <li>
            <b>Fat</b>: 2-5%
          </li>
          <li>
            <b>Fiber</b>: 3-6%
          </li>
        </ul>
        <p>
          Pigeon seeds will contain some mixture of grains, legumes, and oil seeds. Among these, wheat, barley, or sorghum will be added
          for grains. Peas, lentils, or vetch will be added for legumes. For oil seeds, safflower or flax seeds are appropriate, with
          safflower being the most common. The mixture of these creates a balanced diet when properly mixed, which is why we want your
          bird to eat most of its food by the end of the day.
        </p>
        <p>
          We do advise avoiding any feed mixes with corn or soybeans. Corn on its own is often considered a &quot;filler food&quot; for
          pet pigeons, and its fat content is too high compared to other seeds. Additionally, soybeans are known to cause issues in
          pigeons due to the presence of isoflavones. Isoflavones are present in soybeans and are classified as phytoestrogens, which
          can interact with estrogen receptors, with some studies reporting increased egg laying. It&apos;s important to note that many
          of these studies vary in results.
        </p>
        <p>
          The following seed brands are recommended for those in the United States. Check nutritional contents before buying to ensure
          they&apos;re right for indoor pets, as listed above. Below are some brands and specific mixes we can recommend within these
          guidelines. Note that seed mixes can go slightly above these parameters, but we do not recommend going below them.
        </p>
        <ul>
          <li>Versele-Laga (Show Standard without Maize, Classic 15% No Corn Mix)</li>
          <li>Des Moines (No Corn Special Mix)</li>
          <li>Brown&apos;s (Developer Popcorn)</li>
          <li>Foy&apos;s</li>
        </ul>

        <h3>Multivitamins &amp; Grit</h3>
        <p>
          In addition to seeds, we recommend two things: multivitamins and grit, each given 2-3 times per week. Although pigeons are
          granivores, seeds alone don&apos;t meet their nutritional requirements! Multivitamins deliver additional vitamins not present
          in seeds. Soluble grit is required as well. It&apos;s a myth that pigeons need insoluble grit to break down food. The main
          reason to feed pigeons soluble grit is for additional calcium and minerals.
        </p>
        <p>
          Hens also require a calcium supplement for egg laying, along with UVB light. Sunlight through a window does not count. Calcium
          supplements should be provided 1-3 times per week, with more doses right before and after laying. UVB bulbs should be
          replaced every 8 to 12 months. Place the light on top of the cage, and provide ~12 hours of light per day.
        </p>
        <p>
          Note that some pigeon guides may say that a multivitamin is not required for birds that are receiving grit and seeds. This is
          completely false. Pigeons, especially laying hens, <i>require</i> multivitamins. Hens specifically need multivitamins to
          properly recover and produce eggs healthily, and lack of a multivitamin can cause egg binding. Note that only hens need
          supplemental calcium.
        </p>
        <p>Our current recommendations:</p>
        <ul>
          <li>
            <b>Multivitamins</b>: Zoo Med Avian Plus, Nekton-S, Aviform Avigold
          </li>
          <li>
            <b>Soluble Grit</b>: Des Moines Red Grit &amp; Mineral Plus, Foy&apos;s Red Grit
          </li>
          <li>
            <b>Calcium Supplement (hens)</b>: Most avian calcium supplements are safe
          </li>
          <li>
            <b>UVB Lighting (hens)</b>: Arcadia Bird PureSun Mini/Midi
          </li>
        </ul>

        <h3>Treats</h3>
        <p>
          Treats are a great way to gain your bird&apos;s trust and even train them. We recommend offering a few treats when you have
          time to try and bond with your bird. We also recommend around 1-2 tsp of treats per week. Recommended treats include safflower
          or shelled sunflower seeds. Your pigeon may have other preferences than these, however.
        </p>

        <h3>Water</h3>
        <p>
          Provide clean water daily, and change it whenever it gets dirty. We recommend using filtered water. If you use tap or well
          water, use water with a hardness of no more than 100 ppm.
        </p>
      </FoldOut>

      <FoldOut title="Housing">
        <h3>Basics of Housing</h3>
        <p>
          Pigeons should be housed in a cage no smaller than a 42-inch dog kennel. This is recommended for those who can provide at
          least four hours of free roam time in a bird-proofed and predator-proofed room free of household dangers. There are, however,
          other alternative housing options. Some choose to house their birds in outdoor aviaries in their yard or on their porch. In
          addition, we&apos;ll go over the requirements within a pigeon&apos;s enclosure to ensure they have enough space when
          you&apos;re gone.
        </p>

        <h3>Indoor Housing</h3>
        <p>
          <b>Indoor Enclosure Options</b>
        </p>
        <ul>
          <li>Dog kennels/crates; 42 inches or larger</li>
          <li>Parrot flight cages; 2ft x 3ft x 4ft or greater (larger preferred)</li>
          <li>Large rabbit hutches</li>
          <li>C&amp;C panel cage (panels zip tied together)</li>
        </ul>
        <p>
          <b>Considerations</b>
        </p>
        <ul>
          <li>
            <b>Predator-proofing.</b> If you have cats, dogs, or parrots, the spacing between cage bars should not be large enough to
            allow paws, claws, or beaks through. Predators can be sneaky in opening cages, and parrots are known to injure or be injured
            by pigeons. Use cages with narrow spacing or cover the cage sides with galvanized hardware cloth with 1/4 to 1/2 inch spacing,
            and around 16 gauge.
          </li>
          <li>
            <b>Flooring.</b> Flooring should be flat and made of something easily cleaned, such as wood, linoleum, or plastic. Wire
            flooring is inappropriate for pigeons. Other alternatives include puppy pads or washable blankets.
          </li>
          <li>
            <b>Cleaning.</b> Spot cleaning should be done daily, with deeper cleans every 3-4 days. At least once a week, we recommend
            removing everything from the enclosure and deep cleaning it via a 1:1 ratio of white vinegar to water, soaking items in bleach
            water, rinsing, and air drying.
          </li>
          <li>
            <b>Perches.</b> Offering flat perches is a must. These can be purchased or crafted. You can also offer natural branch perches
            or rope perches, but flat perches must be offered, as they complement pigeons&apos; behavioral preferences and anatomy.
          </li>
          <li>
            <b>Air purifiers are NOT optional.</b> HEPA and ozone-free air purifiers are a MUST. Pigeons are incredibly dusty birds.
            Without an air purifier, you risk contracting things like bird fancier&apos;s lung or worsening allergies and asthma. DO NOT
            SKIP GETTING AN AIR PURIFIER.
          </li>
        </ul>
        <ImageRow>
          <Figure
            src="/blog/images/IMG_2784.jpg"
            alt="A dog cage used as a pigeon enclosure indoors."
            caption="This cage is appropriate for pigeons without other pets in the home."
          />
        </ImageRow>

        <h3>Outdoor Housing</h3>
        <ul>
          <li>
            One recommendation by{" "}
            <a href="https://www.pigeonrescue.org/2021/10/03/how-to-diy-make-the-easiest-safe-pigeon-or-dove-aviary/" target="_blank">
              Palomacy (pigeon rescue)
            </a>{" "}
            is a 10ft x 5ft x 6ft dog kennel or larger, fitting around ten pigeons. It&apos;s required to wrap the entire cage in
            galvanized wire with 1/4 to 1/2 inch spacing, securing with zip ties, to ensure predator-proofing.
          </li>
          <li>
            <b>Premade aviaries</b> are often not safe for pigeons. The Wingzstore aviaries are known to be safe.
          </li>
          <li>
            <b>Sizing.</b> Aviaries should be at least 6 feet tall, with around 5-6 square feet per bird. An 8ft x 8ft x 6ft aviary can
            fit around a dozen birds.
          </li>
          <li>
            <b>Foundations</b> can be built onto a wooden floor or the ground lined with hardware cloth or on cement. The entire mesh
            should be covered with wood, tile, vinyl, or cement. Smooth, slightly sloped flooring aids with drainage, but drainage can be
            built into some aviaries with the right space and work.
          </li>
          <li>
            <b>Predator proofing</b> is achieved through the mentioned galvanized wire. All aviaries should be lined on the sides, top,
            and bottom, unless there&apos;s solid flooring/roofing that negates the need for it. Locks should also be predator-proofed.
          </li>
          <li>
            <b>Nest boxes</b> should be provided for nesting birds. This is not for breeding, but for the birds to practice natural
            behaviors, as they are year-round layers, not seasonal.
          </li>
          <li>
            <b>Perches</b> should include flat wooden ones, which can include ramps from perch to perch. Natural branches work well
            outdoors and give pigeons variety, which aids foot health.
          </li>
        </ul>
        <ImageRow>
          <Figure
            src="https://www.pigeonrescue.org/wp-content/uploads/2012/03/Helen_Aviary20130116_142925-620x465.jpg"
            alt="A pigeon-safe aviary."
            caption="A pigeon-safe aviary capable of housing ~10 birds (Credit to Palomacy Pigeon & Dove Rescue)"
          />
          <Figure
            src="https://www.pigeonrescue.org/wp-content/uploads/2012/03/ShaeAviary2-225x300.jpg"
            alt="A smaller pigeon-safe aviary."
            caption="A smaller pigeon-safe aviary capable of housing a few pairs of pigeons (Credit to Palomacy Pigeon & Dove Rescue)"
          />
        </ImageRow>
      </FoldOut>

      <FoldOut title="Enrichment & Cage Decor">
        <h3>Bowls</h3>
        <p>
          Use washable bowls for seed and grit. We recommend one for water and one for seed, as grit and multivitamins are sprinkled on
          food or in water. Terracotta, porcelain, metal, or hard plastic make great bowls.
        </p>

        <h3>Toys &amp; Foraging Enrichment</h3>
        <ul>
          <li>
            Foraging mats and dig boxes are great for sprinkling seeds or treat seeds, allowing pigeons to display natural foraging
            behavior. You can fill dig boxes with things like crinkle paper or natural chews used for parrots, like large cork bark or
            coconut toys.
          </li>
          <li>Cat crinkle toys, bell balls, or other toys work great for birds who enjoy throwing things around.</li>
          <li>Natural bird toys are great for pigeons, though notably not every pigeon likes them.</li>
          <li>Plush toys are good for pigeons to wrestle with or bond to.</li>
          <li>
            <b>Warning:</b> though mirrors are often recommended for pigeons, we do not recommend them. Only some pigeons can recognize
            themselves in the mirror, and some birds may bond to their reflection.
          </li>
        </ul>

        <h3>Perches</h3>
        <ul>
          <li>Flat perches must be offered to pigeons, as they best complement their natural behavior of preferring cliffs and ledges in the wild.</li>
          <li>Natural branch perches offer variety in the enclosure.</li>
          <li>
            Rope perches are good for additional variety. Watch for fraying, as pigeons can ingest loose threads, which can lead to
            blockages or other digestive issues.
          </li>
          <li>Platforms or bricks can be provided, which pigeons also prefer.</li>
        </ul>

        <h3>Nesting &amp; Nesting Materials</h3>
        <ul>
          <li>
            <b>Nest boxes</b> can be anything from 12 x 12 inch boxes to cat beds or hides. Some also like large dog bowls.
          </li>
          <li>
            <b>Nesting materials</b> are a bit of a picky topic with pigeons. Some prefer certain thicknesses or colors. Regardless, we
            recommend Q-tips, strips of paper, crinkled paper of varying colors, straw, hay, or coconut fiber.
          </li>
        </ul>

        <h3>UVB Lighting</h3>
        <p>
          UVB lighting is essential for hens of laying age, as it allows them to produce the vitamin D3 needed for laying. Without it,
          egg binding can occur. We recommend using the PureSun Mini or PureSun Midi, and placing it on top of the cage on one side, near
          a perch, so that your hen can self-regulate toward or away from the lighting. Around 12 hours of UVB light should be provided
          per day.
        </p>
      </FoldOut>
    </ArticleLayout>
  );
}
