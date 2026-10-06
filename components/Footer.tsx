import Link from "next/link";
import { CONTACT } from "@/lib/site";

const column = "flex flex-col gap-2.5";
const heading = "mb-2.5 font-heading text-[16px] font-medium tracking-[2px] uppercase";
const footerLink = "text-[14px] text-inherit opacity-80 [overflow-wrap:anywhere] hover:underline hover:opacity-100";

export default function Footer() {
  return (
    <footer className="bg-footer px-10 pt-[60px] pb-[30px] text-footer-ink">
      <div className="mx-auto flex max-w-[1100px] flex-wrap justify-between gap-[60px]">
        <div className="max-w-[280px]">
          <img src="/sitepics/scprlogo.png" alt="SCPR Logo" className="mb-5 w-20" />
          <p className="mb-2 text-[14px] italic tracking-[1px] opacity-90">A second chance for birds left behind.</p>
          <p className="mb-2 text-[14px] opacity-90">Based in Franklin, Ohio.</p>
        </div>

        <div className={column}>
          <h4 className={heading}>Quick Links</h4>
          <Link href="/about" className={footerLink}>About</Link>
          <Link href="/adopt" className={footerLink}>Adopt</Link>
          <Link href="/foster" className={footerLink}>Foster</Link>
          <Link href="/birds" className={footerLink}>Available Birds</Link>
          <Link href="/apply" className={footerLink}>Apply</Link>
          <a href={CONTACT.donate} target="_blank" rel="noopener" className={footerLink}>Donate</a>
        </div>

        <div className={column}>
          <h4 className={heading}>Contact Us</h4>
          <Link href="/contact" className={footerLink}>Contact</Link>
          <a href={CONTACT.facebook} target="_blank" className={footerLink}>Facebook</a>
          <a href={`mailto:${CONTACT.email}`} className={footerLink}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref} className={footerLink}>{CONTACT.phone}</a>
          <p className="-mt-1 max-w-[260px] text-[12px] leading-normal opacity-65">{CONTACT.phoneNote}</p>
        </div>
      </div>

      <div className="mt-[50px] border-t border-white/20 pt-5 text-center text-[13px] opacity-80">
        © 2026 Second Chance Pigeon Rescue. All rights reserved.
      </div>
    </footer>
  );
}
