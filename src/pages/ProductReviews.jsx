import { useOutletContext } from "react-router-dom";

export default function ProductReviews() {
  const { product } = useOutletContext();
  return (
    <div className="reviews-list">
      {product.reviews.map((review) => (
        <article className="review" key={review.name}>
          <div><strong>{review.name}</strong><span className="rating">{"★".repeat(review.rating)}</span></div>
          <p>{review.text}</p>
        </article>
      ))}
    </div>
  );
}
