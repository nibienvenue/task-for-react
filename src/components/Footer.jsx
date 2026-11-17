import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-brand" to="/">abc<span>rwanda</span></Link>
          <p>Good finds, delivered with care in Rwanda.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">User Profile</Link>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} ABC Rwanda</p>
      </div>
    </footer>
  );
}
