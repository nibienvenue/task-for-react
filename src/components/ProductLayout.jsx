import { NavLink, Outlet, useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductLayout() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <section className="page-shell narrow">
        <div className="empty-state">
          <span className="eyebrow">PRODUCT NOT FOUND</span>
          <h1>We couldn’t find that item.</h1>
          <NavLink className="button button-dark" to="/products">Browse products</NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="breadcrumbs"><NavLink to="/products">Products</NavLink><span>/</span>{product.name}</div>
      <div className="detail-grid">
        <div className={`detail-art ${product.color}`}><span aria-hidden="true">{product.icon}</span></div>
        <div className="detail-copy">
          <span className="eyebrow">{product.category} · ★ {product.rating}</span>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <p className="detail-price">{product.price.toLocaleString()} <span>RWF</span></p>
          <button className="button button-dark" type="button" onClick={() => addItem(product)}>
            Add to cart <span aria-hidden="true">＋</span>
          </button>
        </div>
      </div>
      <div className="detail-tabs">
        <NavLink to="." end>Overview</NavLink>
        <NavLink to="reviews">Reviews <span>({product.reviews.length})</span></NavLink>
        <NavLink to="specs">Specifications</NavLink>
      </div>
      <div className="detail-panel"><Outlet context={{ product }} /></div>
    </section>
  );
}
