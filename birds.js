const birds = [
  {
    name: "Brute",
    age: "Age Unknown",
    sex: "Male",
    tags: ["Male", "Not DNA Confirmed", "Single"],
    image: "/birds/images/brute.png",
    link: "/birds/brute.html",
    status: "AVAILABLE"
  }
];

function BirdList() {
  return (
    <div className="blog-grid">

      {birds.map((bird) => (
        <a href={bird.link} key={bird.name} className="blog-card">

          <div className="bird-image">
            <img src={bird.image} alt={bird.name} />
          </div>

          <div className="bird-status">
            {bird.status}
          </div>

          <h2>{bird.name}</h2>

          <small className="post-date">
            {bird.sex} • {bird.age}
          </small>

          <div className="post-tags">
            {bird.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

        </a>
      ))}

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("birds-root"));
root.render(<BirdList />);
