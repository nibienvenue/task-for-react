import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, removeItem, setQuantity } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="page-shell">
        <div className="page-intro"><div><span className="eyebrow">YOUR GOOD FINDS</span><h1>Your <em>shopping bag.</em></h1></div></div>
        <div className="empty-state">
          <span className="eyebrow">NOTHING IN YOUR BAG YET</span>
          <h2>Let’s find something good.</h2>
          <p>Browse the collection and add your favorites to the cart.</p>
          <Link className="button button-dark" to="/products">Explore products</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="page-intro">
        <div><span className="eyebrow">YOUR GOOD FINDS</span><h1>Your <em>shopping bag.</em></h1><p>Your picks, all in one place.</p></div>
        <span className="collection-count">{String(items.reduce((count, item) => count + item.quantity, 0)).padStart(2, "0")} ITEMS</span>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {items.map(({ product, quantity }) => (
            <article className="cart-item" key={product.id}>
              <div className={`cart-item-art ${product.color}`}>{product.icon}</div>
              <div className="cart-item-copy"><span className="eyebrow">ABC PICK</span><h2>{product.name}</h2>
                <div className="quantity-control">
                  <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => setQuantity(product.id, quantity - 1)}>−</button>
                  <span>{quantity}</span>
                  <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => setQuantity(product.id, quantity + 1)}>＋</button>
                  <button className="remove-item" type="button" onClick={() => removeItem(product.id)}>Remove</button>
                </div>
              </div>
              <strong>{(product.price * quantity).toLocaleString()} <small>RWF</small></strong>
            </article>
          ))}
          <Link className="text-link" to="/products">← Keep browsing</Link>
        </div>
        <aside className="order-summary"><span className="eyebrow">THE TOTAL</span><div><span>Subtotal</span><strong>{subtotal.toLocaleString()} RWF</strong></div><div><span>Delivery</span><span>Calculated at checkout</span></div><div className="summary-total"><span>Total</span><strong>{subtotal.toLocaleString()} RWF</strong></div><button className="button button-dark" type="button" disabled>Checkout coming soon</button><p>Checkout and delivery options will be available soon.</p></aside>
      </div>
    </main>
  );
}
