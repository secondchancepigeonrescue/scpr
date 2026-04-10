document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <div class="brand">
          <img src="scprlogo.png" alt="Second Chance Pigeon Rescue Logo" class="logo">

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
            <a href="index.html">HOME</a>
            <a href="about.html">ABOUT</a>
            <a href="adopt.html">ADOPT</a>
            <a href="foster.html">FOSTER</a>
            <a href="birds.html">BIRDS</a>
            <a href="apply.html">APPLY</a>
            <a href="blogs.html">BLOG</a>
            <a href="contact.html">CONTACT</a>
            <a href="discord.html>DISCORD</a>
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

// Active page
  const links = document.querySelectorAll("#nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("selected");
    }
  });
});
