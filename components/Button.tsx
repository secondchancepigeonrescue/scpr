import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-block cursor-pointer rounded-lg border-none px-7 py-[11px] font-heading text-[17px] font-medium tracking-[1.5px] uppercase no-underline transition-colors duration-200";

const variants = {
  // Filled purple
  solid: "bg-accent text-on-accent hover:bg-heading hover:text-page",
  // Filled purple, turns white on hover (on the dark mission band)
  "solid-light": "bg-accent text-on-accent hover:bg-white hover:text-plum",
  // Outline only
  outline: "bg-transparent text-heading shadow-[inset_0_0_0_2px_currentColor] hover:bg-heading hover:text-page",
  // Outline only, white (over a photo)
  "outline-light": "bg-transparent text-white shadow-[inset_0_0_0_2px_currentColor] hover:bg-white hover:text-plum",
};

export type ButtonVariant = keyof typeof variants;

export function buttonClass(variant: ButtonVariant = "solid", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = ComponentProps<"a"> & {
  href: string;
  variant?: ButtonVariant;
};

/** A link styled as a button. Pages on this site use <Link>; everything else a plain <a>. */
export function ButtonLink({ href, variant, className, ...props }: ButtonLinkProps) {
  const classes = buttonClass(variant, className);
  if (href.startsWith("/") && !props.target) {
    return <Link href={href} className={classes} {...props} />;
  }
  return <a href={href} className={classes} {...props} />;
}

export function ButtonRow({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mt-6 flex flex-wrap gap-4 ${className}`}>{children}</div>;
}
