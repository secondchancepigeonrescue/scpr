import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Articles" };

export default function ArticlesPage() {
  return (
    <>
      <PageHero title="Articles" />
      <section className="pt-10">
        <div className="wrap">
          <ArticleList />
        </div>
      </section>
    </>
  );
}
