const posts = [
  {
    title: "SCPR's Guide to Pigeon Care",
    date: "March 7, 2026",
    excerpt: "A basic guide to taking care of pet pigeons, brought to you by Second Chance Pigeon Rescue. Includes diet and nutrition, enrichment, housing and enclosures, and more.",
    link: "/blog/scprs-guide-to-pigeon-care.html",
    image: "/blog/images/pigeoncareguide.jpg"
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
