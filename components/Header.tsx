"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const birdPages = [
  { href: "/birds", label: "BIRDS" },
  { href: "/foster", label: "FOSTER" },
  { href: "/adopt", label: "ADOPT" },
];

// Animated underline under the top-level links
const navLink =
  "relative py-2.5 nav:pb-[5px] nav:pt-0 font-heading text-[16px] tracking-[2px] text-ink after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:content-[''] hover:after:w-full";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  // Articles and bird profiles highlight their parent page
  if (href === "/articles" && pathname.startsWith("/blog/")) return true;
  if (href === "/birds" && pathname.startsWith("/birds/")) return true;
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [birdsOpen, setBirdsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the Birds dropdown when tapping or clicking anywhere else
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) setBirdsOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Close the menus after following a link
  function closeMenus(event: React.MouseEvent) {
    if ((event.target as HTMLElement).closest("a")) {
      setMenuOpen(false);
      setBirdsOpen(false);
    }
  }

  const link = (href: string, label: string) => {
    const current = isCurrent(pathname, href);
    return (
      <Link href={href} className={`${navLink} ${current ? "after:w-full" : "after:w-0"}`} aria-current={current ? "page" : undefined}>
        {label}
      </Link>
    );
  };

  const inBirds = birdPages.some((p) => isCurrent(pathname, p.href));
  const applyCurrent = isCurrent(pathname, "/apply");

  return (
    <header className="sticky top-0 z-[1000] bg-surface px-5 py-3 shadow-[0_1px_0_var(--color-line)] nav:px-10 nav:py-3.5">
      <div className="flex items-center justify-between gap-[30px]">
        <Link href="/" className="flex items-center gap-3.5">
          <img src="/sitepics/scprlogo.png" alt="Second Chance Pigeon Rescue Logo" className="block h-auto w-12 min-[481px]:w-16" />
          <div className="flex flex-col leading-[1.15]">
            <span className="font-heading text-[18px] font-semibold tracking-[2px] text-heading min-[481px]:text-[24px]">SECOND CHANCE</span>
            <span className="font-heading text-[11px] tracking-[3px] text-link min-[481px]:text-[14px] min-[481px]:tracking-[4px]">PIGEON RESCUE</span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 nav:gap-[22px]">
          <div
            onClick={closeMenus}
            className={`absolute top-full left-0 z-[2000] flex w-full flex-col items-center gap-5 overflow-hidden bg-surface shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-[max-height,padding] duration-400 nav:static nav:z-auto nav:max-h-none nav:w-auto nav:flex-row nav:gap-[30px] nav:overflow-visible nav:bg-transparent nav:p-0 nav:shadow-none ${
              menuOpen ? "max-h-[800px] py-5" : "max-h-0 py-0"
            }`}
          >
            {link("/", "HOME")}
            {link("/about", "ABOUT")}

            {/* Birds dropdown: the arrow opens and closes it (needed on touch screens) */}
            <div ref={dropdownRef} className="group relative flex flex-col items-center nav:block">
              <div className="flex items-center gap-1.5">
                <Link href="/birds" className={`${navLink} ${inBirds ? "after:w-full" : "after:w-0"}`}>
                  BIRDS
                </Link>
                <button
                  type="button"
                  aria-label="Show bird pages"
                  aria-expanded={birdsOpen}
                  onClick={() => setBirdsOpen(!birdsOpen)}
                  className={`cursor-pointer border-none bg-transparent py-2.5 text-[14px] leading-none text-ink transition-transform duration-200 nav:pt-0 nav:pb-[5px] nav:text-[12px] ${birdsOpen ? "rotate-180" : ""}`}
                >
                  &#9662;
                </button>
              </div>
              <div
                className={`mt-2.5 min-w-[200px] overflow-hidden bg-surface-soft text-center nav:absolute nav:top-full nav:-left-[18px] nav:z-[3000] nav:mt-0 nav:block nav:min-w-[160px] nav:rounded-b nav:bg-surface nav:text-left nav:shadow-[0_6px_15px_rgba(0,0,0,0.15)] nav:transition-[opacity,transform,visibility] nav:duration-[180ms] nav:motion-reduce:transition-none ${
                  birdsOpen
                    ? "block nav:visible nav:translate-y-0 nav:opacity-100"
                    : "hidden nav:invisible nav:-translate-y-1.5 nav:opacity-0 nav:group-focus-within:visible nav:group-focus-within:translate-y-0 nav:group-focus-within:opacity-100 nav:group-hover:visible nav:group-hover:translate-y-0 nav:group-hover:opacity-100"
                }`}
              >
                {birdPages.map((page) => {
                  const current = isCurrent(pathname, page.href);
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      aria-current={current ? "page" : undefined}
                      className={`block px-[18px] py-3 font-heading text-[16px] tracking-[2px] hover:bg-accent hover:text-on-accent ${
                        current ? "bg-accent text-on-accent" : "text-ink"
                      }`}
                    >
                      {page.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {link("/FAQ", "FAQ")}
            {link("/articles", "ARTICLES")}
            {link("/contact", "CONTACT")}

            {/* Apply stands out in the menu */}
            <Link
              href="/apply"
              aria-current={applyCurrent ? "page" : undefined}
              className={`rounded-lg px-7 py-2.5 font-heading text-[16px] tracking-[2px] transition-colors duration-200 hover:bg-heading hover:text-page nav:px-5 nav:py-2 ${
                applyCurrent ? "bg-heading text-page" : "bg-accent text-on-accent"
              }`}
            >
              APPLY
            </Link>
          </div>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-1.5 nav:hidden"
          >
            <span className={`h-[3px] w-7 bg-heading transition-all duration-300 ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
            <span className={`h-[3px] w-7 bg-heading transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[3px] w-7 bg-heading transition-all duration-300 ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </div>
    </header>
  );
}
