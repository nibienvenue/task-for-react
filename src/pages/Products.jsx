import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "all";
  const price = searchParams.get("price") ?? "all";

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesPrice = price === "all"
      || (price === "low" && product.price < 300)
      || (price === "high" && product.price >= 300);
    return matchesCategory && matchesPrice;
  }), [category, price]);

  function updateFilter(key, value) {
    const nextParams = new URLSearchParams(searchParams);
    if (value === "all") nextParams.delete(key);
    else nextParams.set(key, value);
    setSearchParams(nextParams);
  }

  return (
    <main className="page-shell">
      <div className="page-intro">
        <div>
          <span className="eyebrow">THE ABC COLLECTION</span>
          <h1>Made for <em>every day.</em></h1>
          <p>Thoughtful finds, chosen to make everyday living a little better.</p>
        </div>
        <span className="collection-count">0{visibleProducts.length} ITEMS</span>
      </div>
      <div className="filter-bar">
        <label>
          <span>Category</span>
          <select value={category} onChange={(event) => updateFilter("category", event.target.value)}>
            <option value="all">All categories</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="accessories">Accessories</option>
          </select>
        </label>
        <label>
          <span>Price</span>
          <select value={price} onChange={(event) => updateFilter("price", event.target.value)}>
            <option value="all">Any price</option>
            <option value="low">Under 300 RWF</option>
            <option value="high">300 RWF and above</option>
          </select>
        </label>
        <p className="filter-summary">
          Showing <strong>{visibleProducts.length}</strong> {visibleProducts.length === 1 ? "item" : "items"}
          {category !== "all" && <> in <strong>{category}</strong></>}
          {price !== "all" && <> · <strong>{price === "low" ? "lower price" : "higher price"}</strong></>}
        </p>
        {(category !== "all" || price !== "all") && <Link className="clear-filter" to="/products">Clear filters ×</Link>}
      </div>
      {visibleProducts.length > 0 ? (
        <div className="product-grid catalog-grid">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span className="eyebrow">NO MATCHES JUST YET</span>
          <h2>Try a different filter.</h2>
          <p>There are no products in this combination right now.</p>
          <Link className="button button-dark" to="/products">See everything</Link>
        </div>
      )}
    </main>
  );
}
