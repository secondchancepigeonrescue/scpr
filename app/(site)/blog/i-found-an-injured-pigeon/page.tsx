import { ArticleLayout, Figure, FloatImage, ImageRow, articleMetadata } from "@/components/Article";
import { LINKS } from "@/lib/site";

const slug = "i-found-an-injured-pigeon";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <ArticleLayout
      slug={slug}
      references={
        <>
          <li>
            Haag-Wackernagel, D., &amp; Moch, H. (2004). Health hazards posed by feral pigeons. The Journal of infection, 48(4),
            307-313.{" "}
            <a href="https://doi.org/10.1016/j.jinf.2003.11.001" target="_blank">
              https://doi.org/10.1016/j.jinf.2003.11.001
            </a>
          </li>
          <li>
            New York City Department of Health and Mental Hygiene. (n.d.). Pigeon-related diseases.{" "}
            <a href="https://www.nyc.gov/site/doh/health/health-topics/pigeon.page" target="_blank">
              https://www.nyc.gov/site/doh/health/health-topics/pigeon.page
            </a>
          </li>
        </>
      }
    >
      <h2>Identifying A Pigeon In Need</h2>
      <p>
        The first step to helping rescue a pigeon is to identify if the bird even needs your help in the first place. A common issue for
        pigeon rescues, and wildlife rescues in general, is birds being taken into human care when it was never needed at all.
      </p>
      <p>A pigeon likely needs your help if any of the following apply:</p>
      <FloatImage
        src="https://unbelievable-facts.com/wp-content/uploads/2022/10/baby-pigeon-development.jpg"
        alt="Baby pigeon development by age"
      />
      <ul>
        <li>
          <b>BEHAVIOR:</b> Most pigeons will fly away when you get too close. If the bird is easy to approach and allows you to touch it,
          then it&apos;s likely in dire need of rescue. Some birds may also show signs of neurological damage, such as twisted necks,
          inability to balance, and difficulty eating, drinking, or otherwise living a normal life.
        </li>
        <li>
          <b>AGE:</b> Note if the bird looks like a fully grown adult, or if the bird is still yellow with baby fuzz. Younger pigeons may
          be feathered but still look a little different from adults. Most pigeons are fine once they leave the nest: by around four
          weeks old, they can eat mostly seeds and stay within their parents&apos; flock.
        </li>
        <li>
          <b>COLOR:</b> Pigeons that are all white or mostly white may require help. These are often ceremonial release doves, which are
          actually white pigeons. These birds stand out in the wild and often won&apos;t be able to join a flock on their own or take
          care of themselves.
        </li>
        <li>
          <b>INJURY:</b> If the bird is unable to fly, is limping, has stringfoot, or appears to have open injuries, then it needs help.
        </li>
        <li>
          <b>BANDED:</b> Bands are often placed on pigeons for identification purposes. Most banded birds you see will be racing
          pigeons, followed by release doves and pets. Many banded birds may need help, though those that have joined a flock and appear
          otherwise healthy often do not.
        </li>
      </ul>

      <h2>Catching A Pigeon</h2>
      <p>
        If you&apos;ve identified that the pigeon needs help, your next step is to prepare and capture it. If you have time before the
        catch, prepare a box or carrier with blankets or towels on the bottom for comfort and warmth. Do not be scared of pigeons. Their
        bites hurt very little, if at all, and most pigeons won&apos;t bite or even wing slap you; they&apos;ll try to escape instead.
      </p>
      <p>
        Once you have the pigeon in your hands, hold it securely. Make sure you have a decent grip! Their feet can catch on your skin
        and hurt a little as they try to push themselves free. You can push the bird into your stomach or chest with one hand, and use
        your free hand as needed.
      </p>
      <ul>
        <li>Docile birds or those unable to move can be caught with your hands.</li>
        <li>Birds that allow you to get close can have a towel or shirt thrown over them.</li>
        <li>Use either a crate or a box trap to capture pigeons who are a bit more skittish, but still hungry.</li>
      </ul>

      <ImageRow>
        <Figure
          src="/blog/images/catching-traps.jpg"
          alt="Diagram of a laundry basket trap and a pet carrier trap"
          caption="Top: laundry basket trap; bottom: pet carrier trap"
        />
      </ImageRow>

      <p>
        For other methods to catch pigeons, we recommend checking out Palomacy Pigeon &amp; Dove Rescue&apos;s article on{" "}
        <a href="https://www.pigeonrescue.org/faqs-2/how-to-catch-a-pigeon-or-dove-in-need-of-rescue/" target="_blank">
          &quot;How to Catch a Pigeon or Dove in Need of Rescue.&quot;
        </a>
      </p>
      <p>
        Finally, there are a lot of myths about pigeons, which is why people are often scared of catching them, with the main concern
        being biosecurity and the risk of catching a disease or illness from pigeons. While some diseases carried by pigeons can be
        spread to other birds, they are seldom spread to humans. In fact, there were only 176 documented transmissions of illness from
        feral pigeons to humans between 1941 and 2003 (Haag-Wackernagel, D., &amp; Moch, H., 2004). That&apos;s 176 people in 62 years,
        or ~3 people per year. Additionally, the biggest risk of infection comes from inhaling dust from dried pigeon droppings,
        especially when cleaning large accumulations. Routine cleaning poses little risk (New York City Department of Health and Mental
        Hygiene, n.d.).
      </p>

      <h2>Temporary Care</h2>
      <p>
        All pigeons should be transferred to a rehabilitator with experience caring for pigeons. There, the bird has the best chance of
        receiving veterinary care and consistent treatment, without accidental harm from inexperienced care.{" "}
        <b>Unless prescribed and told by a vet or rehabber, DO NOT GIVE THE PIGEON ANY SORT OF MEDICATION.</b> Contact the closest rescue
        to you, or utilize the{" "}
        <a href={LINKS.palomacyGroup} target="_blank">
          Palomacy Help Group for Pigeon &amp; Dove Rescue &amp; Adoption
        </a>
        . This is an international Facebook group. Include your local area and any information you have about the bird. Many
        independent rescuers also rehabilitate rock pigeons, not just established rescues.
      </p>
      <p>
        Keep the pigeon securely in its container in a dark, quiet spot, preferably somewhere warm. You can also use a heating pad on
        the underside of the container, set on low. Provide a dish of water, preferably somewhat deep. Unlike most birds, pigeons drink
        by sucking water up through their beaks like a straw, rather than scooping it and tilting their heads back. You can also provide
        a shallow dish of bird seed. In an emergency, any sort of bird seed works.
      </p>
      <p>
        Injured or orphaned babies have a different protocol. <b>Do not try to feed the baby yourself.</b> Place a heating pad
        underneath, but only on one half of the box, so the baby can regulate temperature. Pigeons younger than two weeks old may have
        difficulty with seeds and water. We recommend calling a wildlife hospital helpline for assistance or following the advice of a
        pigeon rehabilitator who can aid you more closely with young pigeons.
      </p>
    </ArticleLayout>
  );
}
