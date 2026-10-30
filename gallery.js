// =========================================================
// SLIDESHOW GALLERY
//
// Turns every <div class="rescue-gallery"> on the page into a slideshow:
// one card showing at a time, with arrows and dots underneath.
// The arrows loop around, so after the last card comes the first.
// To add a slide, add another <a class="rescue-card"> inside the gallery.
// =========================================================

document.querySelectorAll(".rescue-gallery").forEach(gallery => {
  const cards = Array.from(gallery.querySelectorAll(".rescue-card"));
  if (cards.length < 2) return;

  const nav = document.createElement("div");
  nav.className = "featured-nav";
  const dots = document.createElement("div");
  dots.className = "featured-dots";
  let current = 0;

  function show(index) {
    current = (index + cards.length) % cards.length;
    cards.forEach((card, i) => {
      card.classList.toggle("off", i !== current);
      // Keep hidden cards out of the tab order
      card.tabIndex = i === current ? 0 : -1;
    });
    dots.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("on", i === current);
      dot.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  function arrow(symbol, label, step) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "featured-arrow";
    button.textContent = symbol;
    button.setAttribute("aria-label", label);
    button.addEventListener("click", () => show(current + step));
    return button;
  }

  cards.forEach((card, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    const name = card.querySelector("h3");
    dot.setAttribute("aria-label", (name ? name.textContent : "Photo " + (i + 1)) + ", " + (i + 1) + " of " + cards.length);
    dot.addEventListener("click", () => show(i));
    dots.appendChild(dot);
  });

  nav.appendChild(arrow("←", "Previous photo", -1));
  nav.appendChild(dots);
  nav.appendChild(arrow("→", "Next photo", 1));
  gallery.after(nav);

  show(0);
});
