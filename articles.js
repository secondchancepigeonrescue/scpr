// =========================================================
// ARTICLES
//
// To add an article, copy one of the blocks below and fill it in.
//   date      decides the order on the page (newest first by default)
//   tags      which filter button it appears under: "pigeon care",
//             "rescue & health", "stories" or "other topics"
//   keywords  extra words the search box should find; never shown on the page
//
// The FEATURED articles on the right of the Articles page are set
// just below the list.
// =========================================================

const posts = [
  {
    title: "SCPR's Guide to Pigeon Care",
    date: "March 9, 2026",
    tags: ["pigeon care"],
    keywords: ["getting started", "nutrition", "housing", "care", "diet", "seed", "feed", "grit", "cage", "enclosure", "aviary", "toys", "beginner"],
    excerpt: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
    link: "blog/scprs-guide-to-pigeon-care.html",
    image: "blog/images/pigeoncareguide.jpg"
  },
  {
    title: "Are Pigeons Right For You?",
    date: "March 9, 2026",
    tags: ["other topics"],
    keywords: ["getting started", "pet", "adopt", "adoption", "commitment", "pros", "cons", "beginner"],
    excerpt: "Pigeons make wonderful pets, but only for the right people. Here, we discuss the considerations, including positives and negatives, of owning pet pigeons long term.",
    link: "blog/are-pigeons-right-for-you.html",
    image:"blog/images/arepigeonsrightforyou.jpg",
    imagePosition: "center 32%"
  },
  {
    title: "I Found An Injured Pigeon",
    date: "March 11, 2026",
    tags: ["rescue & health"],
    keywords: ["found", "injured", "sick", "hurt", "catch", "trap", "emergency", "rescuer"],
    excerpt: "If you've found a pigeon you believe is in danger, sick, or hurt, you've already taken the first step: noticing a pigeon in need. We discuss how to catch, restrain, and house a sick or injured pigeon before transport to a rescuer.",
    link: "blog/i-found-an-injured-pigeon.html",
    image:"blog/images/ifoundapigeon.jpg"
  },
  {
    title: "Greens, Fruits, & Toxic Foods",
    date: "March 10, 2026",
    tags: ["pigeon care"],
    keywords: ["nutrition", "health", "food", "diet", "vegetables", "fruit", "greens", "toxic", "poison", "avocado", "treats"],
    excerpt: "Greens and vegetables can be great enrichment items! However, some foods are toxic. It's important to know what these are so your pigeon doesn't eat them.",
    link: "blog/greens-fruits-and-toxic-foods.html",
    image:"blog/images/safevstoxicfoods.jpg"
  },
    {
    title: "Household Hazards To Pigeons",
    date: "March 12, 2026",
    tags: ["other topics"],
    keywords: ["getting started", "health", "safety", "danger", "toxic", "poison", "plants", "nonstick", "teflon", "candles", "fumes"],
    excerpt: "Many everyday household items, from nonstick cookware to houseplants, can be dangerous to pigeons. Here, we cover hazards in the air, toxic plants, physical dangers, and items that are easily swallowed.",
    link: "blog/household-hazards-to-pigeons.html",
    image:"blog/images/hazards.jpg"
  },
  {
    title: "Seeds & Pellets: An Overview",
    date: "October 6, 2026",
    tags: ["pigeon care"],
    keywords: ["nutrition", "diet", "food", "feed", "seed", "seeds", "grain", "pellet", "pellets", "protein", "fat", "fiber", "macronutrients", "mazuri", "harrison's", "des moines", "versele-laga", "purgrain", "brown's"],
    excerpt: "Seeds, pellets, or both? We go over the protein, fat, and fiber pet pigeons need, the seed mixes and pellets we recommend, and why pellets aren't the villain they're made out to be.",
    link: "blog/seeds-and-pellets-an-overview.html",
    image: "blog/images/seedsandpellets.jpg"
  },
  {
    title: "Finding a Vet for Your Pigeon",
    date: "October 6, 2026",
    tags: ["pigeon care", "rescue & health", "other topics"],
    keywords: ["vet", "veterinarian", "avian", "aav", "health", "emergency", "screening", "red flags", "fenbendazole", "panacur", "dewormer", "insurance", "nationwide", "cost"],
    excerpt: "Not every avian vet knows pigeons. Here's how to find one before an emergency, the questions to ask when screening them, the red flags to watch for, and what to know about paying for care.",
    link: "blog/finding-a-vet-for-your-pigeon.html",
    image: "blog/images/findingavet.jpg"
  },
  {
    title: "Calcium & Vitamin D3",
    date: "October 8, 2026",
    tags: ["pigeon care", "rescue & health"],
    keywords: ["nutrition", "health", "supplement", "supplements", "calcium", "vitamin d", "d3", "uvb", "multivitamin", "grit", "phosphorus", "hen", "hens", "egg", "eggs", "egg binding", "laying", "kidney", "morning bird", "calcivet", "vetafarm"],
    excerpt: "Calcium and vitamin D3 go hand in hand, and both are especially important for hens. We cover what each one does, what happens with too little or too much, and how to supplement them.",
    link: "blog/calcium-and-vitamin-d3.html",
    image: "blog/images/calciumandd3.webp"
  }
];

// Featured articles (right side of the Articles page).
// title must match one of the titles above exactly; summary is yours to write.
// To feature more than one, copy a { ... } block and separate them with commas.
// With two or more, they turn into a gallery with arrows automatically.
const featured = [
  {
    title: "SCPR's Guide to Pigeon Care",
    summary: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more."
  },
  {
    title: "Seeds & Pellets: An Overview",
    summary: "Seeds, pellets, or both? We go over the protein, fat, and fiber pet pigeons need, the seed mixes and pellets we recommend, and why pellets aren't the villain they're made out to be."
  }
];

const filters = [
  { label: "All", value: "all" },
  { label: "Pigeon Care", value: "pigeon care" },
  { label: "Rescue & Health", value: "rescue & health" },
  { label: "Stories", value: "stories" },
  { label: "Other Topics", value: "other topics" }
];

const sorts = [
  { label: "Newest to oldest", value: "newest" },
  { label: "Oldest to newest", value: "oldest" },
  { label: "Alphabetical (A to Z)", value: "alphabetical" }
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const articlesRoot = document.getElementById("articles-root");

// On the home page the list is cut short and has no search, sorting or
// featured article: <div id="articles-root" data-limit="3">
const isShortList = Boolean(articlesRoot.dataset.limit);
const limit = Number(articlesRoot.dataset.limit) || posts.length;

// How many articles show at once on the Articles page before the arrows appear
const PAGE_SIZE = 5;

const filterBar = el("div", "article-filters");
const articleList = el("div", "article-list");
const pager = el("div", "article-pager");

// What the visitor has currently chosen
let currentFilter = "all";
let currentSort = "newest";
let currentSearch = "";
let currentPage = 0;

function sortPosts(list) {
  const sorted = list.slice();

  if (currentSort === "alphabetical") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (currentSort === "oldest") sorted.reverse();
  }

  return sorted;
}

// Every word typed must appear somewhere in the title, description, tags or keywords
function matchesSearch(post) {
  const words = currentSearch.toLowerCase().split(/\s+/).filter(Boolean);
  const text = [post.title, post.excerpt, post.tags.join(" "), (post.keywords || []).join(" ")]
    .join(" ")
    .toLowerCase();

  return words.every(word => text.includes(word));
}

function articleRow(post) {
  const row = el("a", "article-row");
  row.href = post.link;

  const thumb = el("div", "article-thumb");
  const img = document.createElement("img");
  img.src = post.image;
  img.alt = "";
  if (post.imagePosition) img.style.objectPosition = post.imagePosition;
  thumb.appendChild(img);
  row.appendChild(thumb);

  const text = el("div", "article-text");
  text.appendChild(el("h3", null, post.title));
  text.appendChild(el("p", null, post.excerpt));
  text.appendChild(el("span", "article-date", post.date));
  row.appendChild(text);

  return row;
}

function renderPosts() {
  articleList.innerHTML = "";

  const matching = sortPosts(posts)
    .filter(post => currentFilter === "all" || post.tags.includes(currentFilter))
    .filter(matchesSearch);

  // Home page: just the first few. Articles page: one page of PAGE_SIZE at a time.
  const pageCount = isShortList ? 1 : Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, pageCount - 1);

  const shown = isShortList
    ? matching.slice(0, limit)
    : matching.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  shown.forEach(post => articleList.appendChild(articleRow(post)));
  renderPager(pageCount);

  if (shown.length === 0) {
    const inCategory = posts.filter(post => currentFilter === "all" || post.tags.includes(currentFilter));

    if (inCategory.length === 0) {
      // Nothing has been written for this category yet
      const empty = el("div", "article-empty");
      empty.appendChild(el("h3", null, "No articles yet!"));
      empty.appendChild(el("p", null, "Check back later to see if we're updated."));
      articleList.appendChild(empty);
    } else {
      // The category has articles, but the search didn't match any
      articleList.appendChild(el("p", "article-empty", "No articles found."));
    }
  }

  filterBar.querySelectorAll("button").forEach(button => {
    button.classList.toggle("on", button.dataset.filter === currentFilter);
  });
}

// Arrows under the list, shown only when there is more than one page
function renderPager(pageCount) {
  pager.innerHTML = "";
  pager.hidden = pageCount < 2;
  if (pageCount < 2) return;

  function arrow(symbol, label, page) {
    const button = el("button", "featured-arrow", symbol);
    button.type = "button";
    button.setAttribute("aria-label", label);
    button.disabled = page < 0 || page >= pageCount;
    button.addEventListener("click", () => {
      currentPage = page;
      renderPosts();
      fadeList();
      // Jump back up if the top of the list has scrolled out of view (110 clears the header)
      if (articleList.getBoundingClientRect().top < 110) {
        window.scrollBy(0, filterBar.getBoundingClientRect().top - 110);
      }
    });
    return button;
  }

  pager.appendChild(arrow("\u2190", "Previous articles", currentPage - 1));
  pager.appendChild(el("span", null, "Page " + (currentPage + 1) + " of " + pageCount));
  pager.appendChild(arrow("\u2192", "Next articles", currentPage + 1));
}

// Restart the short fade when the list changes
function fadeList() {
  articleList.classList.remove("list-fade");
  void articleList.offsetWidth;
  articleList.classList.add("list-fade");
}

filters.forEach(f => {
  const button = el("button", null, f.label);
  button.type = "button";
  button.dataset.filter = f.value;
  button.addEventListener("click", () => {
    currentFilter = f.value;
    currentPage = 0;
    renderPosts();
    fadeList();
  });
  filterBar.appendChild(button);
});

if (isShortList) {
  articlesRoot.appendChild(articleList);
} else {
  // Search box and sort dropdown
  const tools = el("div", "article-tools");

  const search = document.createElement("input");
  search.type = "search";
  search.className = "article-search";
  search.placeholder = "Search articles";
  search.setAttribute("aria-label", "Search articles");
  search.addEventListener("input", () => {
    currentSearch = search.value;
    currentPage = 0;
    renderPosts();
  });
  tools.appendChild(search);

  const sortSelect = document.createElement("select");
  sortSelect.className = "article-sort";
  sortSelect.setAttribute("aria-label", "Sort articles");
  sorts.forEach(s => {
    const option = el("option", null, s.label);
    option.value = s.value;
    sortSelect.appendChild(option);
  });
  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    currentPage = 0;
    renderPosts();
    fadeList();
  });
  tools.appendChild(sortSelect);

  // Left: tools, filter buttons, list
  const main = el("div", "articles-main");
  main.appendChild(tools);
  main.appendChild(filterBar);
  main.appendChild(articleList);
  main.appendChild(pager);

  const layout = el("div", "articles-layout");
  layout.appendChild(main);

  // Right: featured articles
  const featuredCards = featured
    .map(item => ({ post: posts.find(post => post.title === item.title), summary: item.summary }))
    .filter(item => item.post)
    .map(item => {
      const card = el("a", "featured-card");
      card.href = item.post.link;

      const photo = el("div", "featured-photo");
      const img = document.createElement("img");
      img.src = item.post.image;
      img.alt = "";
      if (item.post.imagePosition) img.style.objectPosition = item.post.imagePosition;
      photo.appendChild(img);
      card.appendChild(photo);

      card.appendChild(el("h3", null, item.post.title));
      card.appendChild(el("p", null, item.summary));
      return card;
    });

  if (featuredCards.length > 0) {
    const side = el("aside", "article-featured");
    side.appendChild(el("p", "tagline", "Featured"));

    if (featuredCards.length === 1) {
      side.appendChild(featuredCards[0]);
    } else {
      // Gallery: one card showing at a time, with arrows and dots underneath
      const gallery = el("div", "featured-gallery");
      featuredCards.forEach(card => gallery.appendChild(card));
      side.appendChild(gallery);

      const nav = el("div", "featured-nav");
      const dots = el("div", "featured-dots");
      let current = 0;

      function show(index) {
        current = (index + featuredCards.length) % featuredCards.length;
        featuredCards.forEach((card, i) => card.classList.toggle("off", i !== current));
        dots.querySelectorAll("button").forEach((dot, i) => {
          dot.classList.toggle("on", i === current);
          dot.setAttribute("aria-current", i === current ? "true" : "false");
        });
      }

      const prev = el("button", "featured-arrow", "\u2190");
      prev.type = "button";
      prev.setAttribute("aria-label", "Previous featured article");
      prev.addEventListener("click", () => show(current - 1));

      const next = el("button", "featured-arrow", "\u2192");
      next.type = "button";
      next.setAttribute("aria-label", "Next featured article");
      next.addEventListener("click", () => show(current + 1));

      featuredCards.forEach((card, i) => {
        const dot = el("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Featured article " + (i + 1) + " of " + featuredCards.length);
        dot.addEventListener("click", () => show(i));
        dots.appendChild(dot);
      });

      nav.appendChild(prev);
      nav.appendChild(dots);
      nav.appendChild(next);
      side.appendChild(nav);

      show(0);
    }

    layout.appendChild(side);
  }

  articlesRoot.appendChild(layout);
}

renderPosts();
