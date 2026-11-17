import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductLayout from "./components/ProductLayout.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductOverview from "./pages/ProductOverview.jsx";
import ProductReviews from "./pages/ProductReviews.jsx";
import ProductSpecs from "./pages/ProductSpecs.jsx";
import Products from "./pages/Products.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <CartProvider>
      <div className="app-shell">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductLayout />}>
              <Route index element={<ProductOverview />} />
              <Route path="reviews" element={<ProductReviews />} />
              <Route path="specs" element={<ProductSpecs />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
