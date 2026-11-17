import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> MADE FOR YOUR EVERYDAY</span>
            <h1>Find your next<br /><em>favorite thing.</em></h1>
            <p>Thoughtful picks for your home, your work, and everywhere in between. Shop local, live well.</p>
            <Link className="button button-light" to="/products">Explore the collection <span aria-hidden="true">↗</span></Link>
            <div className="hero-note"><span className="note-line" /> A little good goes a long way.</div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun-shape" />
            <div className="hero-product hero-product-one">🎧</div>
            <div className="hero-product hero-product-two">⌚</div>
            <div className="hero-sticker">GOOD<br />THINGS<br /><span>↓</span></div>
            <span className="hero-side-note">SELECTED WITH CARE · KAYONZA</span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>SHOP THE GOOD STUFF</span><span>01 — 04</span>
        </div>
      </section>
      <section className="section-wrap featured-section">
        <div className="section-heading">
          <div><span className="eyebrow">A FEW OF OUR FAVORITES</span><h2>Good things, <em>picked for you.</em></h2></div>
          <Link className="text-link" to="/products">Shop all products ↗</Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <section className="promise-strip">
        <div><span>01</span><p><strong>Good quality</strong><br />Everyday essentials, made to last.</p></div>
        <div><span>02</span><p><strong>Easy shopping</strong><br />A simple, friendly experience.</p></div>
        <div><span>03</span><p><strong>Made for Rwanda</strong><br />From our home to yours.</p></div>
      </section>
    </>
  );
}
