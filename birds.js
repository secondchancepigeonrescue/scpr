const birds = [
  {
    name: "Brute",
    age: "Age Unknown",
    sex: "Male",
    tags: ["Male", "Not DNA Confirmed", "Single"],
    image: "/birds/images/brutepic.png",
    link: "/birds/brute.html",
    status: "PENDING ADOPTION"
  },
  {
    name: "Ranch",
    age: "2 months old",
    sex: "Male",
    tags: ["Male", "Not DNA Confirmed", "Single"],
    image: "/birds/images/ranchpic.png",
    link: "/birds/ranch.html",
    status: "AVAILABLE"
  }
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const birdGrid = el("div", "blog-grid");

birds.forEach(bird => {
  const card = el("a", "blog-card");
  card.href = bird.link;

  const imageWrap = el("div", "bird-image");
  const img = document.createElement("img");
  img.src = bird.image;
  img.alt = bird.name;
  imageWrap.appendChild(img);
  card.appendChild(imageWrap);

  card.appendChild(el("div", "bird-status", bird.status));
  card.appendChild(el("h2", null, bird.name));
  card.appendChild(el("small", "post-date", bird.sex + " \u2022 " + bird.age));

  const tags = el("div", "post-tags");
  bird.tags.forEach(tag => tags.appendChild(el("span", "tag", tag)));
  card.appendChild(tags);

  birdGrid.appendChild(card);
});

document.getElementById("birds-root").appendChild(birdGrid);
