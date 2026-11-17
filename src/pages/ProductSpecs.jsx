import { useOutletContext } from "react-router-dom";

export default function ProductSpecs() {
  const { product } = useOutletContext();
  return (
    <dl className="spec-list">
      {product.specs.map((spec, index) => (
        <div key={spec}><dt>DETAIL {String(index + 1).padStart(2, "0")}</dt><dd>{spec}</dd></div>
      ))}
    </dl>
  );
}
