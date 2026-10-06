import type { NextConfig } from "next";

// The site is exported as plain HTML files and hosted on GitHub Pages.
// Pages are written as about.html, blog/<slug>.html, etc., so the old
// links to the hand-written .html files keep working.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
