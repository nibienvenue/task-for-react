import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
  { to: "/profile", label: "User Profile" },
];

export default function Navbar() {
  const { items } = useCart();
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="ABC Rwanda home">
          <span className="brand-mark">a.</span>
          <span>abc<span className="brand-accent">rwanda</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {label}
              {label === "Cart" && cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
