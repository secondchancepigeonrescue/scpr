import type { Metadata } from "next";
import { Mulish, Oswald } from "next/font/google";
import { SITE_NAME } from "@/lib/site";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-mulish",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.secondchancepigeonrescue.com"),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description:
    "Second Chance Pigeon Rescue is an independently operated pigeon rescue in Franklin, Ohio, focused on rehabilitation, veterinary care, adoption, and advocacy for domestic pigeons.",
};

// Runs before the page draws so the right colors are in place straight away.
// Follows the visitor's device setting unless they have pressed the light/dark button.
const themeScript = `(function () {
  var theme = null;
  try { theme = localStorage.getItem("scpr-theme"); } catch (e) {}
  if (!theme) theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mulish.variable} ${oswald.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
