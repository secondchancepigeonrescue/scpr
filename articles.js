// =========================================================
// ARTICLES
//
// To add an article, copy one of the blocks below and fill it in.
//   date      decides the order on the page (newest first by default)
//   tags      which filter button it appears under: "pigeon care",
//             "rescue & health", "stories" or "other topics"
//   keywords  extra words the search box should find; never shown on the page
//
// The FEATURED article on the right of the Articles page is set
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
    tags: ["pigeon care"],
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
    tags: ["pigeon care"],
    keywords: ["getting started", "health", "safety", "danger", "toxic", "poison", "plants", "nonstick", "teflon", "candles", "fumes"],
    excerpt: "Many everyday household items, from nonstick cookware to houseplants, can be dangerous to pigeons. Here, we cover hazards in the air, toxic plants, physical dangers, and items that are easily swallowed.",
    link: "blog/household-hazards-to-pigeons.html",
    image:"blog/images/hazards.jpg"
  }
];

// Featured article (right side of the Articles page).
// title must match one of the titles above exactly; summary is yours to write.
const featured = {
  title: "SCPR's Guide to Pigeon Care",
  summary: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more."
};

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

const filterBar = el("div", "article-filters");
const articleList = el("div", "article-list");

// What the visitor has currently chosen
let currentFilter = "all";
let currentSort = "newest";
let currentSearch = "";

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

  const shown = sortPosts(posts)
    .filter(post => currentFilter === "all" || post.tags.includes(currentFilter))
    .filter(matchesSearch)
    .slice(0, limit);

  shown.forEach(post => articleList.appendChild(articleRow(post)));

  if (shown.length === 0) {
    articleList.appendChild(el("p", "article-empty", "No articles found."));
  }

  filterBar.querySelectorAll("button").forEach(button => {
    button.classList.toggle("on", button.dataset.filter === currentFilter);
  });
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
    renderPosts();
    fadeList();
  });
  tools.appendChild(sortSelect);

  // Left: tools, filter buttons, list
  const main = el("div", "articles-main");
  main.appendChild(tools);
  main.appendChild(filterBar);
  main.appendChild(articleList);

  const layout = el("div", "articles-layout");
  layout.appendChild(main);

  // Right: featured article
  const featuredPost = posts.find(post => post.title === featured.title);

  if (featuredPost) {
    const side = el("aside", "article-featured");
    side.appendChild(el("p", "tagline", "Featured"));

    const card = el("a", "featured-card");
    card.href = featuredPost.link;

    const photo = el("div", "featured-photo");
    const img = document.createElement("img");
    img.src = featuredPost.image;
    img.alt = "";
    if (featuredPost.imagePosition) img.style.objectPosition = featuredPost.imagePosition;
    photo.appendChild(img);
    card.appendChild(photo);

    card.appendChild(el("h3", null, featuredPost.title));
    card.appendChild(el("p", null, featured.summary));
    side.appendChild(card);

    layout.appendChild(side);
  }

  articlesRoot.appendChild(layout);
}

renderPosts();
