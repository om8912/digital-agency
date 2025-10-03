import { useParams } from "react-router-dom";

const portfolioItems = [
  { id: 1, title: "Project One", details: "Full details of Project One" },
  { id: 2, title: "Project Two", details: "Full details of Project Two" }
];

function PortfolioDetails() {
  const { id } = useParams();
  const item = portfolioItems.find(p => String(p.id) === id);

  if (!item) return <p>Project not found.</p>;

  return (
    <main>
      <h1>{item.title}</h1>
      <p>{item.details}</p>
    </main>
  );
}

export default PortfolioDetails;