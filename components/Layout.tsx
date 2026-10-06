// Small building blocks shared by the content pages.

/** Section with space above it */
export function Section({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <section className={`pt-10 md:pt-[60px] ${className}`}>{children}</section>;
}

/** Text beside a photo; stacks on narrow screens. `reverse` puts the photo on the right. */
export function SplitLayout({ reverse, children }: { reverse?: boolean; children: React.ReactNode }) {
  return (
    <div
      data-reveal
      className={`wrap flex flex-col gap-[30px] md:items-center md:gap-[60px] ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {children}
    </div>
  );
}

/** The text column of a SplitLayout */
export function TextColumn({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rich-text max-w-[780px] flex-1 ${className}`}>{children}</div>;
}

/** The photo column of a SplitLayout */
export function Photo({ src, alt, position }: { src: string; alt: string; position?: string }) {
  return (
    <div className="flex-1">
      <div className="aspect-[4/3] overflow-hidden rounded">
        <img src={src} alt={alt} className="block size-full object-cover" style={position ? { objectPosition: position } : undefined} />
      </div>
    </div>
  );
}

/** The logo shown whole in place of a photo */
export function LogoPhoto() {
  return (
    <div className="flex-1">
      <img src="/sitepics/scprlogo.png" alt="Second Chance Pigeon Rescue logo" className="mx-auto block w-full max-w-[300px]" />
    </div>
  );
}

/** Page heading with a short accent rule above it */
export function AccentHeading({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <h2 className={`before:mb-[18px] before:block before:h-1 before:w-14 before:bg-accent before:content-[''] ${className}`}>
      {children}
    </h2>
  );
}

/** Small purple uppercase line under a heading */
export function Tagline({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <p className={`mb-3.5 text-[14px] font-bold tracking-[2px] text-link uppercase ${className}`}>{children}</p>;
}

/** Full-width colored band at the bottom of a page */
export function Callout({ className = "", title, children }: { className?: string; title: string; children: React.ReactNode }) {
  return (
    <section className={`callout bg-surface py-14 text-center ${className}`}>
      <div data-reveal className="wrap">
        <p className="mb-[22px] font-heading text-[30px] font-medium tracking-[1px] text-heading uppercase">{title}</p>
        <div className="flex flex-wrap justify-center gap-1">{children}</div>
      </div>
    </section>
  );
}
