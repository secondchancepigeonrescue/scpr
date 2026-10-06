import { ArticleLayout, articleMetadata } from "@/components/Article";

const slug = "household-hazards-to-pigeons";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <ArticleLayout
      slug={slug}
      references={
        <li>
          Shuster, K. A., Brock, K. L., Dysko, R. C., DiRita, V. J., &amp; Bergin, I. L. (2012). Polytetrafluoroethylene toxicosis in
          recently hatched chickens (Gallus domesticus). Comparative medicine, 62(1), 49-52.
        </li>
      }
    >
      <h2>Introduction</h2>
      <p>
        One big adjustment many new pigeon owners have to make is changing everyday household habits. Your home likely contains items
        that are dangerous to birds (though we&apos;ll give seasoned pigeon and parrot owners some credit). Birds have very sensitive
        respiratory systems. Things that are harmless to us in smaller amounts can be deadly to pigeons. In addition, many things that
        are usually considered safe or low risk for other pets can be incredibly dangerous to pigeons. Note that pigeons usually
        can&apos;t chew on plants, but a determined pigeon might be able to tear and break off pieces with some consistent effort.
      </p>

      <h2>Hazards In The Air</h2>
      <ul>
        <li>
          PTFE/Teflon coated cookware items (pots, pans, waffle makers), space heaters, irons and ironing board covers, and hair tools
        </li>
        <li>Aerosol sprays, including air fresheners, spray cleaners, hairspray, and spray-on deodorants</li>
        <li>Scented products, including candles, wax melts, incense, perfumes, and body sprays</li>
        <li>Smoke from cigarettes, vapes, fireplaces, or burnt food</li>
        <li>
          Strong cleaners like bleach, ammonia, and oven cleaner. While you may be able to use these in your home, the solution should be
          very diluted and used away from your bird.
        </li>
      </ul>
      <p>
        One of the biggest concerns on this list is PTFE (polytetrafluoroethylene)-coated products, including Teflon, since many people
        don&apos;t realize it&apos;s an issue until it&apos;s too late. It is known to be one of the leading causes of bird deaths in the
        home. The PTFE coating begins to degrade and releases fumes when heated to 500°F or 260°C, though fumes have been reported at
        lower temperatures, from around 460°F or 238°C. When inhaled by birds, it can quickly cause respiratory distress and
        neurological symptoms. Perivascular edema (swelling around the blood vessels) has been noted, leading to hemorrhage (breakage or
        damage to blood vessels causing heavy bleeding). According to a study done regarding PTFE toxicosis in young chicks,
        &quot;Overheating of nonstick cookware is a known cause of PTFE toxicosis in avian species and has often been reported
        anecdotally in pet birds in the veterinary clinical literature.&quot;
      </p>

      <h2>Toxic Houseplants</h2>
      <p>
        People disagree on whether pigeons bother with plants at all, or whether they can even chew or tear them. In short, yes, pigeons
        can tear off pieces of plants given enough time and effort. However, many pigeons will simply ignore houseplants or not tear them
        at all. If you notice your pigeon pecking at or tearing plants, keep it away from any that are toxic.
      </p>
      <ul>
        <li>
          <b>Houseplants:</b> philodendron, dumb cane, pothos, calla lilies, peace lilies, snake plants, monstera, croton, schefflera
        </li>
        <li>
          <b>Flowers:</b> azalea, foxglove, holly, hydrangea, morning glory, iris, larkspur, chrysanthemum
        </li>
        <li>
          <b>Other:</b> tobacco, shamrock, rhubarb, oleander, mistletoe, yew
        </li>
      </ul>
      <p>
        For a full list, take a look at Niles Animal Hospital and Bird Medical Center&apos;s file on{" "}
        <a href="https://nilesanimalhospital.com/files/2012/05/Toxic-Plants-for-Pet-Birds.pdf" target="_blank">
          Toxic Plants for Pet Birds
        </a>
        .
      </p>

      <h2>Physical Hazards</h2>
      <ul>
        <li>Windows and large mirrors may be crashed into</li>
        <li>Ceiling fans when turned on can kill a bird that tries to fly around or into them</li>
        <li>Hot stoves and pots; don&apos;t let your bird out while cooking</li>
        <li>Loose screen doors/windows, or doors/windows left open leading outside</li>
        <li>Other pets, specifically cats, dogs, and ferrets who are known to be predatory</li>
      </ul>

      <h2>Easily Ingested Items</h2>
      <p>
        Beware of items left out in the open that pigeons can ingest easily. Many of these can cause blockages in the gut, requiring
        surgery to remove, which is both dangerous and expensive. Lead in particular is very toxic to pigeons.
      </p>
      <ul>
        <li>Lead weights</li>
        <li>Small jewelry</li>
        <li>Small plastic pieces</li>
        <li>Thread or string</li>
      </ul>
    </ArticleLayout>
  );
}
