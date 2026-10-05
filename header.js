// Links and pictures are built from where this file sits, so the header
// works the same from the main pages and from the blog/ and birds/ folders.
const SITE = new URL(".", document.currentScript.src).href;
const ASSETS = SITE;

const sunIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
const moonIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>`;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a class="brand" href="${SITE}index.html">
          <img src="${ASSETS}sitepics/scprlogo.png" alt="Second Chance Pigeon Rescue Logo" class="logo">

          <div class="brand-text">
            <span class="site-title">SECOND CHANCE</span>
            <span class="sub-title">PIGEON RESCUE</span>
          </div>
        </a>

        <nav>
          <div class="nav-links" id="nav-links">
            <a href="${SITE}index.html">HOME</a>
            <a href="${SITE}about.html">ABOUT</a>
            <div class="dropdown" id="birds-dropdown">
              <div class="dropdown-top">
                <a href="${SITE}birds.html" class="dropdown-label">BIRDS</a>
                <button type="button" class="dropdown-toggle" id="birds-toggle" aria-label="Show bird pages" aria-expanded="false">&#9662;</button>
              </div>
              <div class="dropdown-menu">
                <a href="${SITE}birds.html">BIRDS</a>
                <a href="${SITE}foster.html">FOSTER</a>
                <a href="${SITE}adopt.html">ADOPT</a>
              </div>
            </div>
            <a href="${SITE}FAQ.html">FAQ</a>
            <a href="${SITE}articles.html">ARTICLES</a>
            <a href="${SITE}contact.html">CONTACT</a>
            <a href="${SITE}apply.html" class="nav-cta">APPLY</a>
          </div>

          <button type="button" class="theme-toggle" id="theme-toggle"></button>

          <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

      </div>
    </header>
  `;

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  // Mobile menu toggle
  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("active");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  // Birds dropdown: the arrow opens and closes it (needed on touch screens)
  const dropdown = document.getElementById("birds-dropdown");
  const dropdownToggle = document.getElementById("birds-toggle");

  dropdownToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close the dropdown when tapping or clicking anywhere else
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Light / dark button: remembers the visitor's choice
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  function showTheme() {
    const isDark = root.dataset.theme === "dark";
    themeToggle.innerHTML = isDark ? sunIcon : moonIcon;
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.title = isDark ? "Light mode" : "Dark mode";
  }

  themeToggle.addEventListener("click", function () {
    // Let the colors fade for a moment instead of snapping
    root.classList.add("theme-fade");
    setTimeout(() => root.classList.remove("theme-fade"), 450);

    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("scpr-theme", root.dataset.theme);
    } catch (e) {}
    showTheme();
  });

  showTheme();

  // Active page
  const links = document.querySelectorAll("#nav-links a");
  const path = window.location.pathname;
  let currentPage = path.split("/").pop();

  // Articles and bird profiles highlight their parent page
  if (path.includes("/blog/")) currentPage = "articles.html";
  if (path.includes("/birds/")) currentPage = "birds.html";

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("selected");
    }
  });

  // Underline the top BIRDS link on any page inside the dropdown
  if (["birds.html", "foster.html", "adopt.html"].includes(currentPage)) {
    document.querySelector(".dropdown-label").classList.add("selected");
  }

  // Scroll reveal: blocks fade in and rise slightly as they come into view.
  // Skipped for visitors whose device is set to reduce motion.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const blocks = document.querySelectorAll(
      ".section .home-layout, .band .home-layout, .link-card, .section-head, .bird-card, .article-row, .callout .container"
    );

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const block = entry.target;
        observer.unobserve(block);
        block.classList.add("revealed");

        // Once it has faded in, hand the block back to its normal hover effects
        setTimeout(function () {
          block.classList.remove("reveal", "revealed");
          block.style.transitionDelay = "";
        }, 1000);
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    blocks.forEach(block => {
      // Cards in a row come in one after another
      if (block.matches(".link-card, .bird-card")) {
        const position = Array.from(block.parentNode.children).indexOf(block);
        block.style.transitionDelay = (position * 90) + "ms";
      }

      block.classList.add("reveal");
      observer.observe(block);
    });
  }
});
