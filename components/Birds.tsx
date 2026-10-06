import Link from "next/link";
import { type Bird, birds } from "@/lib/birds";
import { ButtonLink, ButtonRow } from "./Button";

export function BirdGrid() {
  return (
    <div className="wrap grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[30px]">
      {birds.map((bird) => (
        <Link
          key={bird.slug}
          href={`/birds/${bird.slug}`}
          data-reveal="stagger"
          className="group block overflow-hidden rounded border border-line bg-surface-soft text-inherit transition-colors duration-200 hover:border-accent"
        >
          <div className="aspect-square overflow-hidden">
            <img src={bird.image} alt={bird.name} className="block size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
          </div>
          <div className="px-5 pt-[18px] pb-5">
            <div className="mb-1.5 text-[12px] font-bold tracking-[2px] text-link">{bird.status}</div>
            <h2 className="mb-1 text-[28px]">{bird.name}</h2>
            <div className="text-[14px] text-muted">
              {bird.sex} • {bird.age}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {bird.tags.map((tag) => (
                <span key={tag} className="rounded border border-line bg-page px-[9px] py-1 text-[12px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** A bird's profile page: story on the left, photo and Apply button on the right */
export function BirdProfile({ bird, status, children }: { bird: Bird; status: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto mt-10 flex w-[88%] max-w-[1100px] flex-col-reverse gap-[30px] pt-[30px] md:flex-row md:items-start md:gap-[60px] md:pt-[50px]">
      <div className="rich-text flex-1">
        <h1 className="mb-3 text-[clamp(40px,6vw,64px)] font-semibold">{bird.name}</h1>
        <p className="mb-3.5 text-[14px] font-bold tracking-[2px] text-link uppercase">{status}</p>
        {children}
      </div>

      <div className="w-full shrink-0 md:w-[380px]">
        <img src={bird.image} alt={bird.name} className="block w-full rounded" />
        <ButtonRow>
          <ButtonLink href="/apply" className="w-full text-center">
            Apply to Adopt
          </ButtonLink>
        </ButtonRow>
      </div>
    </section>
  );
}
