// Announcement strip under the header on every page.
// Set MESSAGE to a sentence to show it, or to null to hide it.
// Last used: "SCPR is closed to intakes until September 1st, 2026. We apologize for the delay."
const MESSAGE: string | null = null;

export default function Banner() {
  if (!MESSAGE) return null;
  return <div className="bg-heading px-5 py-3.5 text-center text-[15px] font-bold text-page">{MESSAGE}</div>;
}
