import { Link } from "react-router-dom";

const portfolioItems = [
  { id: 1, title: "Project One", summary: "Description of project one" },
  { id: 2, title: "Project Two", summary: "Description of project two" }
];

function Portfolio() {
  return (
    <main>
      <h1>Portfolio</h1>
      <div className="portfolio-list">
        {portfolioItems.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <Link to={`/portfolio/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Portfolio;