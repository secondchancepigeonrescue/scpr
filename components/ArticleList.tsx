"use client";

import Link from "next/link";
import { useState } from "react";
import { type Article, articleHref, articles, featured, filters, formatDate, sorts } from "@/lib/articles";

const field =
  "box-border rounded border border-line bg-page px-3.5 py-[11px] font-body text-[15px] text-ink [color-scheme:light] focus:border-accent focus:outline-2 focus:outline-offset-1 focus:outline-accent dark:bg-surface-soft dark:[color-scheme:dark]";

function sortArticles(list: Article[], sort: string) {
  const sorted = list.slice();
  if (sort === "alphabetical") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === "oldest") sorted.reverse();
  }
  return sorted;
}

// Every word typed must appear somewhere in the title, description, tags or keywords
function matchesSearch(article: Article, search: string) {
  const words = search.toLowerCase().split(/\s+/).filter(Boolean);
  const text = [article.title, article.excerpt, ...article.tags, ...article.keywords].join(" ").toLowerCase();
  return words.every((word) => text.includes(word));
}

export function ArticleRow({ article, compact }: { article: Article; compact?: boolean }) {
  return (
    <Link
      href={articleHref(article)}
      data-reveal
      className={`group flex items-start gap-4 border-b border-line py-7 text-inherit min-[601px]:gap-[26px] ${compact ? "last:border-b-0 last:pb-0" : ""}`}
    >
      <div className="aspect-square w-24 shrink-0 overflow-hidden rounded bg-surface min-[601px]:aspect-[3/2] min-[601px]:w-[220px]">
        <img
          src={article.image}
          alt=""
          className="block size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          style={article.imagePosition ? { objectPosition: article.imagePosition } : undefined}
        />
      </div>
      <div>
        <h3 className="mb-2 text-[19px] transition-colors duration-200 group-hover:text-link min-[601px]:text-[26px]">{article.title}</h3>
        <p className="text-[14px] leading-[1.6] text-muted min-[601px]:text-[15px]">{article.excerpt}</p>
        <span className="mt-2 block text-[13px] text-muted">{formatDate(article.date)}</span>
      </div>
    </Link>
  );
}

/** The newest few articles, without search, filters or the featured article (home page) */
export function LatestArticles({ limit }: { limit: number }) {
  return (
    <div className="wrap">
      {sortArticles(articles, "newest")
        .slice(0, limit)
        .map((article) => (
          <ArticleRow key={article.slug} article={article} compact />
        ))}
    </div>
  );
}

/** The full Articles page: search, sort, filter buttons, list and featured article */
export default function ArticleList() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const inCategory = articles.filter((a) => filter === "all" || a.tags.includes(filter));
  const shown = sortArticles(inCategory, sort).filter((a) => matchesSearch(a, search));
  const featuredArticle = articles.find((a) => a.slug === featured.slug);

  return (
    <div className="grid grid-cols-1 items-start gap-9 min-[901px]:grid-cols-[minmax(0,1fr)_320px] min-[901px]:gap-[60px]">
      <div>
        {/* Search box and sort dropdown */}
        <div className="mb-3.5 flex flex-wrap gap-2.5">
          <input
            type="search"
            placeholder="Search articles"
            aria-label="Search articles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${field} min-w-[200px] flex-1`}
          />
          <select aria-label="Sort articles" value={sort} onChange={(e) => setSort(e.target.value)} className={`${field} cursor-pointer`}>
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-2.5 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`cursor-pointer rounded border px-[18px] py-[9px] font-body text-[14px] font-semibold transition-colors duration-200 hover:border-accent ${
                f.value === filter ? "border-accent bg-accent text-on-accent" : "border-line bg-transparent text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Remounted (and faded in) whenever the filter or sort changes */}
        <div key={`${filter}-${sort}`} className="animate-fade-in motion-reduce:animate-none">
          {shown.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}

          {shown.length === 0 &&
            (inCategory.length === 0 ? (
              // Nothing has been written for this category yet
              <div className="py-7 text-muted">
                <h3 className="mb-2.5 text-[clamp(32px,5vw,46px)]">No articles yet!</h3>
                <p>Check back later to see if we&apos;re updated.</p>
              </div>
            ) : (
              // The category has articles, but the search didn't match any
              <p className="py-7 text-muted">No articles found.</p>
            ))}
        </div>
      </div>

      {featuredArticle && (
        <aside className="-order-1 min-[901px]:sticky min-[901px]:top-[110px] min-[901px]:order-none">
          <p className="mb-3.5 text-[14px] font-bold tracking-[2px] text-link uppercase">Featured</p>
          <Link
            href={articleHref(featuredArticle)}
            className="group block overflow-hidden rounded-lg border border-line bg-surface-soft text-inherit transition-colors duration-200 hover:border-accent"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={featuredArticle.image}
                alt=""
                className="block size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                style={featuredArticle.imagePosition ? { objectPosition: featuredArticle.imagePosition } : undefined}
              />
            </div>
            <h3 className="mx-5 mt-[18px] mb-2 text-[24px]">{featuredArticle.title}</h3>
            <p className="mx-5 mb-5 text-[15px] leading-[1.6] text-muted">{featured.summary}</p>
          </Link>
        </aside>
      )}
    </div>
  );
}
