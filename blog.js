const posts = [
  {
    title: "I Found A Pigeon",
    date: "UNFINISHED",
    tags: ["rescue"],
    excerpt: "If you've found a pigeon you believe is in danger, sick, or hurt, you've already taken the first step: noticing a pigeon in need. We discuss how to catch, restrain, and house a sick or injured pigeon before transport to a rescuer.",
    link: "/blog/i-found-an-injured-pigeon.html",
    image:"/blog/images/ifoundapigeon.jpg"
  },
  {
    title: "Greens, Fruits, & Toxic Foods",
    date: "March 10, 2026",
    tags: ["nutrition"],
    excerpt: "Greens and vegetables can be great enrichment items! However, some foods are toxic. It's important to understand what these are to avoid allowing your pigeon to ingest them.",
    link: "/blog/greens-fruits-and-toxic-foods.html",
    image:"/blog/images/safevstoxicfoods.jpg"
  },
  {
    title: "SCPR's Guide to Pigeon Care",
    date: "March 9, 2026",
    tags: ["getting started", "nutrition", "housing"],
    excerpt: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
    link: "/blog/scprs-guide-to-pigeon-care.html",
    image: "/blog/images/pigeoncareguide.jpg"
  },
  {
    title: "Are Pigeons Right For You?",
    date: "March 9, 2026",
    tags: ["getting started"],
    excerpt: "Pigeons make wonderful pets, but only for the right people. Here, we discuss the considerations, including positives and negatives, of owning pet pigeons long term.",
    link: "/blog/are-pigeons-right-for-you.html",
    image:"/blog/images/arepigeonsrightforyou.jpg"
  }
];

function BlogList() {

  const [filter, setFilter] = React.useState("all");

  const filteredPosts = posts.filter(post =>
    filter === "all" || post.tags.includes(filter)
  );

  return (
    <div>

      <div className="blog-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("getting started")}>Getting Started</button>
        <button onClick={() => setFilter("nutrition")}>Nutrition</button>
        <button onClick={() => setFilter("health")}>Health</button>
        <button onClick={() => setFilter("rescue")}>Rescue</button>
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <a href={post.link} key={post.link} className="blog-card">

            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>

            <h2>{post.title}</h2>

            <small className="post-date">{post.date}</small>

            <p>{post.excerpt}</p>

            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <span className="read-more">Read More →</span>

          </a>
        ))}
      </div>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("blog-root"));
root.render(<BlogList />);
