import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems(prevItems => {
        const existing = prevItems.find(item => item._id === product._id);
        if (existing) {
            return prevItems.map(item =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        return [...prevItems, { ...product, quantity: 1 }];
        });
    }
    
    function removeFromCart(productId) {
        setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
    }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
