import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

// Every page except the adoption application and contract
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Banner />
      {/* Space above the footer, except when the page ends with a colored band */}
      <main className="pb-20 has-[>.callout:last-child]:pb-0">{children}</main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
