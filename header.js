document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = `
    <header class="site-header">
      <div class="header-inner">
 
        <div class="brand">
          <img src="/sitepics/scprlogo.png" alt="Second Chance Pigeon Rescue Logo" class="logo">
 
          <div class="brand-text">
            <h1 class="site-title">SECOND CHANCE</h1>
            <span class="sub-title">PIGEON RESCUE</span>
          </div>
        </div>
 
        <nav>
          <div class="menu-toggle" id="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
 
          <div class="nav-links" id="nav-links">
            <a href="/index.html">HOME</a>
            <a href="/about.html">ABOUT</a>
            <div class="dropdown" id="birds-dropdown">
              <div class="dropdown-top">
                <a href="/birds.html" class="dropdown-label">BIRDS</a>
                <button type="button" class="dropdown-toggle" id="birds-toggle" aria-label="Show bird pages" aria-expanded="false">&#9662;</button>
              </div>
              <div class="dropdown-menu">
                <a href="/birds.html">BIRDS</a>
                <a href="/foster.html">FOSTER</a>
                <a href="/adopt.html">ADOPT</a>
              </div>
            </div>
            <a href="/apply.html">APPLY</a>
            <a href="/FAQ.html">FAQ</a>
            <a href="/blogs.html">BLOG</a>
            <a href="/contact.html">CONTACT</a>
          </div>
        </nav>
 
      </div>
    </header>
  `;
 
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
 
  // Mobile menu toggle
  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
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
 
  // Active page
  const links = document.querySelectorAll("#nav-links a");
  const path = window.location.pathname;
  let currentPage = path.split("/").pop();
 
  // Blog posts and bird profiles highlight their parent page
  if (path.includes("/blog/")) currentPage = "blogs.html";
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
});