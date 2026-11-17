import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return currentItems.map((item) => item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  }

  function removeItem(productId) {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  }

  function setQuantity(productId, quantity) {
    if (quantity < 1) return;
    setItems((currentItems) => currentItems.map((item) => item.product.id === productId
      ? { ...item, quantity }
      : item));
  }

  const value = useMemo(() => ({ items, addItem, removeItem, setQuantity }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
