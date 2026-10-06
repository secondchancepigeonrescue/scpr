"use client";

// Light / dark button: remembers the visitor's choice.
// Both icons are rendered and CSS shows the right one, so the button
// matches the theme set by the script in app/layout.tsx before React loads.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;

    // Let the colors fade for a moment instead of snapping
    root.classList.add("theme-fade");
    setTimeout(() => root.classList.remove("theme-fade"), 450);

    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("scpr-theme", root.dataset.theme);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Light / dark mode"
      className="flex size-10 cursor-pointer items-center justify-center rounded border border-line bg-transparent text-heading transition-colors duration-200 hover:bg-accent hover:text-on-accent"
    >
      {/* Moon (shown in light mode) */}
      <svg className="dark:hidden" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
      {/* Sun (shown in dark mode) */}
      <svg className="hidden dark:block" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
