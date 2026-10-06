import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getArticle } from "@/lib/articles";
import PageHero from "./PageHero";

/** Page title for an article, taken from lib/articles.ts */
export function articleMetadata(slug: string): Metadata {
  return { title: getArticle(slug).title };
}

function BackLink({ bottom }: { bottom?: boolean }) {
  return (
    <div className={`wrap py-3.5 ${bottom ? "mt-[50px] border-t border-line pt-5 pb-0" : ""}`}>
      <Link href="/articles" className="font-heading text-[16px] tracking-[1.5px] uppercase hover:text-heading">
        &larr; Back to Articles
      </Link>
    </div>
  );
}

/**
 * The frame around every article: back links, photo banner, date and references.
 * Title, date and photo come from the article's entry in lib/articles.ts.
 */
export function ArticleLayout({ slug, references, children }: { slug: string; references?: React.ReactNode; children: React.ReactNode }) {
  const article = getArticle(slug);

  return (
    <>
      <BackLink />
      <PageHero title={article.title} image={article.image} position={article.heroPosition} />

      <section className="rich-text mx-auto mt-10 max-w-[820px] px-5 after:clear-both after:table after:content-[''] [&_h2]:mt-10 [&_h2]:text-[30px] [&_h2:first-of-type]:mt-2.5 [&_h3]:mt-6 [&_h3]:text-[22px]">
        <p className="mb-3.5 text-[14px] font-bold tracking-[2px] text-link uppercase">{formatDate(article.date)}</p>
        {children}
      </section>

      {references && (
        <section className="mx-auto mt-[60px] max-w-[820px] border-t border-line px-5 pt-[30px]">
          <h2 className="text-[26px]">References</h2>
          <ol className="list-decimal pl-5 text-[15px] text-muted [&_li]:mb-2.5 [&_li]:[overflow-wrap:anywhere]">{references}</ol>
        </section>
      )}

      <BackLink bottom />
    </>
  );
}

/** Photo floated to the right of the text (full width on phones) */
export function FloatImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="mb-[15px] block w-full rounded min-[601px]:float-right min-[601px]:ml-5 min-[601px]:w-[250px]"
    />
  );
}

/** A row of captioned photos */
export function ImageRow({ children }: { children: React.ReactNode }) {
  return <div className="my-5 flex flex-wrap justify-center gap-5">{children}</div>;
}

export function Figure({ src, alt, caption }: { src: string; alt: string; caption: React.ReactNode }) {
  return (
    <figure className="m-0 max-w-[330px]">
      <img src={src} alt={alt} className="block w-full rounded" />
      <figcaption className="mt-1.5 text-center text-[14px] text-muted">{caption}</figcaption>
    </figure>
  );
}

/** Fold-out section */
export function FoldOut({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group mb-3 rounded border border-line">
      <summary className="flex cursor-pointer list-none items-center justify-between bg-surface-soft px-5 py-4 font-heading text-[22px] tracking-[1px] text-heading uppercase after:text-[12px] after:text-accent after:transition-transform after:duration-200 after:content-['▼'] group-open:after:rotate-180 [&::-webkit-details-marker]:hidden">
        {title}
      </summary>
      <article className="px-5 pt-1 pb-5">{children}</article>
    </details>
  );
}
