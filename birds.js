const birds = [
  {
    name: "Ranch",
    age: "2 months old",
    sex: "Unsexed",
    tags: ["Unsexed", "Single"],
    image: "birds/images/ranchpic.jpg",
    link: "birds/ranch.html",
    status: "Ready to be adopted!"
  },
  {
    name: "Caviar",
    age: "Age Unknown",
    sex: "Unsexed",
    tags: ["Unsexed", "Single"],
    image: "birds/images/caviar.jpg",
    link: "birds/caviar.html",
    status: "Ready to be adopted!"
  },
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const birdGrid = el("div", "bird-grid");

birds.forEach(bird => {
  const card = el("a", "bird-card");
  card.href = bird.link;

  const photo = el("div", "bird-photo");
  const img = document.createElement("img");
  img.src = bird.image;
  img.alt = bird.name;
  photo.appendChild(img);
  card.appendChild(photo);

  const info = el("div", "bird-info");
  const statusClass = /^adopted/i.test(bird.status) ? " adopted" : /^ready/i.test(bird.status) ? " ready" : "";
  info.appendChild(el("div", "bird-status" + statusClass, bird.status));
  info.appendChild(el("h2", null, bird.name));
  info.appendChild(el("div", "bird-details", bird.sex + " \u2022 " + bird.age));

  const tags = el("div", "bird-tags");
  bird.tags.forEach(tag => tags.appendChild(el("span", "tag", tag)));
  info.appendChild(tags);

  card.appendChild(info);
  birdGrid.appendChild(card);
});

document.getElementById("birds-root").appendChild(birdGrid);
