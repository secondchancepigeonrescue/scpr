const posts = [
  {
    title: "SCPR's Guide to Pigeon Care",
    date: "unfinished: March 8th, 2026 set release date",
    excerpt: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
    link: "/blog/scprs-guide-to-pigeon-care.html",
    image: "/blog/images/pigeoncareguide.jpg"
  },
  {
    title: "Are Pigeons Right For You?",
    date: "UNFINISHED",
    excerpt: "Pigeons make wonderful pets, but only for the right people. Here, we discuss the considerations, including positives and negatives, of owning pet pigeons long term.",
    link: "/blog/are-pigeons-right-for-you.html",
    image:"/blog/images/arepigeonsrightforyou.jpg"
  },
  {
    title: "Safe VS Toxic Foods For Pigeons",
    date: "UNFINISHED",
    excerpt: "Many foods that are considered safe for other animals may be considered toxic to pigeons! It's important to understand what these are to avoid allowing your pigeon to ingest them.",
    link: "/blog/save-vs-toxic-foods-for-pigeons.html",
    image:"/blog/images/safevstoxicfoods.jpg"
  },
  {
    title: "I Found A Pigeon",
    date: "UNFINISHED",
    excerpt: "If you've found a pigeon you believe is in danger, sick, or hurt, you've already taken the first step: noticing a pigeon in need. We discuss how to catch, restrain, and house a sick or injured pigeon before transport to a rescuer.",
    link: "/blog/i-found-an-injured-pigeon.html",
    image:"/blog/images/ifoundapigeon.jpg"
  }
];

function BlogList() {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <a href={post.link} key={post.link} className="blog-card">
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>

          <h2>{post.title}</h2>
          <small className="post-date">{post.date}</small>
          <p>{post.excerpt}</p>

          <span className="read-more">Read More →</span>
        </a>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("blog-root"));
root.render(<BlogList />);
