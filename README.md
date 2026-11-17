# ABC Rwanda E-commerce

A React storefront built with Vite and React Router v7 for the ABC Rwanda practical task.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## Routes

- `/` — home page
- `/products` — product collection; filter with `?category=electronics` or `?price=low`
- `/products/:id` — product overview
- `/products/:id/reviews` — product reviews
- `/products/:id/specs` — product specifications
- `/cart` — shopping cart
- `/profile` — user profile
- `/home` — redirects to `/`
- Any other URL — not-found page

Product detail pages let shoppers add items to the cart. Cart quantities, item removal, and the navigation item count update immediately during the session.

Product category and price filters can be combined, for example `/products?category=electronics&price=low`.
