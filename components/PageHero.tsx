type PageHeroProps = {
  title: string;
  /** Background photo. Leave out for a plain purple band. */
  image?: string;
  /** CSS background-position for the photo */
  position?: string;
  /** Taller banner with a bigger title (home page) */
  large?: boolean;
  children?: React.ReactNode;
};

/** Photo banner with the page title at the bottom-left. */
export default function PageHero({ title, image, position = "center", large, children }: PageHeroProps) {
  return (
    <section
      className={`relative flex items-end bg-cover bg-no-repeat ${
        image
          ? `${large ? "min-h-[480px]" : "min-h-[380px]"} before:absolute before:inset-0 before:bg-[linear-gradient(to_top,rgba(22,14,32,0.88),rgba(22,14,32,0.15)_75%)]`
          : "bg-footer"
      }`}
      style={image ? { backgroundImage: `url('${image}')`, backgroundPosition: position } : undefined}
    >
      <div className={`wrap relative ${large ? "py-[50px]" : "py-10"} *:animate-fade-up *:motion-reduce:animate-none [&>*:nth-child(2)]:[animation-delay:120ms] [&>*:nth-child(3)]:[animation-delay:240ms]`}>
        <h1
          className={`font-semibold ${image ? "text-white" : "text-footer-ink"} ${
            large ? "max-w-[700px] text-[clamp(40px,7vw,84px)]" : "max-w-[800px] text-[clamp(36px,6vw,68px)]"
          }`}
        >
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
