import { Link } from "react-router-dom";

export default function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card${compact ? " compact" : ""}`}>
      <Link
        className={`product-art ${product.color}`}
        to={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <span className="product-emoji" aria-hidden="true">{product.icon}</span>
        <span className="art-label">ABC GOOD THINGS</span>
      </Link>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span className="rating">★ {product.rating}</span>
        </div>
        <Link className="product-name" to={`/products/${product.id}`}>
          {product.name}
        </Link>
        <div className="product-buy-row">
          <strong>{product.price.toLocaleString()} <small>RWF</small></strong>
          {!compact && <Link className="text-link" to={`/products/${product.id}`}>View item ↗</Link>}
        </div>
      </div>
    </article>
  );
}
