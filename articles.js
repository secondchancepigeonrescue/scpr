const posts = [
  {
    title: "SCPR's Guide to Pigeon Care",
    date: "March 9, 2026",
    tags: ["getting started", "nutrition", "housing"],
    excerpt: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
    link: "blog/scprs-guide-to-pigeon-care.html",
    image: "blog/images/pigeoncareguide.jpg"
  },
  {
    title: "Are Pigeons Right For You?",
    date: "March 9, 2026",
    tags: ["getting started"],
    excerpt: "Pigeons make wonderful pets, but only for the right people. Here, we discuss the considerations, including positives and negatives, of owning pet pigeons long term.",
    link: "blog/are-pigeons-right-for-you.html",
    image:"blog/images/arepigeonsrightforyou.jpg",
    imagePosition: "center 32%"
  },
  {
    title: "I Found An Injured Pigeon",
    date: "March 11, 2026",
    tags: ["rescue"],
    excerpt: "If you've found a pigeon you believe is in danger, sick, or hurt, you've already taken the first step: noticing a pigeon in need. We discuss how to catch, restrain, and house a sick or injured pigeon before transport to a rescuer.",
    link: "blog/i-found-an-injured-pigeon.html",
    image:"blog/images/ifoundapigeon.jpg"
  },
  {
    title: "Greens, Fruits, & Toxic Foods",
    date: "March 10, 2026",
    tags: ["nutrition", "health"],
    excerpt: "Greens and vegetables can be great enrichment items! However, some foods are toxic. It's important to know what these are so your pigeon doesn't eat them.",
    link: "blog/greens-fruits-and-toxic-foods.html",
    image:"blog/images/safevstoxicfoods.jpg"
  },
    {
    title: "Household Hazards To Pigeons",
    date: "March 12, 2026",
    tags: ["getting started", "health"],
    excerpt: "Many everyday household items, from nonstick cookware to houseplants, can be dangerous to pigeons. Here, we cover hazards in the air, toxic plants, physical dangers, and items that are easily swallowed.",
    link: "blog/household-hazards-to-pigeons.html",
    image:"blog/images/hazards.jpg"
  }
];

const filters = [
  { label: "All", value: "all" },
  { label: "Getting Started", value: "getting started" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Health", value: "health" },
  { label: "Rescue", value: "rescue" }
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const articlesRoot = document.getElementById("articles-root");
const filterBar = el("div", "article-filters");

// On the home page the list is cut short: <div id="articles-root" data-limit="3">
const limit = Number(articlesRoot.dataset.limit) || posts.length;
const articleList = el("div", "article-list");

function renderPosts(filter) {
  articleList.innerHTML = "";

  posts
    .filter(post => filter === "all" || post.tags.includes(filter))
    .slice(0, limit)
    .forEach(post => {
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
      row.appendChild(text);

      articleList.appendChild(row);
    });

  filterBar.querySelectorAll("button").forEach(button => {
    button.classList.toggle("on", button.dataset.filter === filter);
  });
}

filters.forEach(f => {
  const button = el("button", null, f.label);
  button.type = "button";
  button.dataset.filter = f.value;
  button.addEventListener("click", () => {
    renderPosts(f.value);

    // Restart the short fade each time a filter is pressed
    articleList.classList.remove("list-fade");
    void articleList.offsetWidth;
    articleList.classList.add("list-fade");
  });
  filterBar.appendChild(button);
});

if (!articlesRoot.dataset.limit) articlesRoot.appendChild(filterBar);
articlesRoot.appendChild(articleList);
renderPosts("all");
