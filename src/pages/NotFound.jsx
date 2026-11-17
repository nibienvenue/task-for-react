import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-shell not-found">
      <span className="eyebrow">404 · WRONG TURN?</span>
      <h1>Well, this is <em>unexpected.</em></h1>
      <p>We can’t find the page you’re looking for. Let’s get you back to the good stuff.</p>
      <Link className="button button-dark" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
