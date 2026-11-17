import { useOutletContext } from "react-router-dom";

export default function ProductOverview() {
  const { product } = useOutletContext();
  return (
    <div className="overview-copy">
      <span className="eyebrow">A LITTLE MORE ABOUT IT</span>
      <p>{product.description} Designed to fit naturally into your day, with quality details you can count on.</p>
    </div>
  );
}
