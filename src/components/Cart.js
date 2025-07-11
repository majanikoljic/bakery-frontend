import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const CartContainer = styled.div`
  position: fixed;
  right: 1rem;
  top: 4rem;
  width: 300px;
  max-height: 400px;
  background: #fff0f5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(212, 143, 153, 0.3);
  overflow-y: auto;
  padding: 1rem;
  z-index: 100;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const ItemName = styled.span`
  font-weight: 600;
  color: #4b2e2e;
`;

const Quantity = styled.span`
  margin-left: 0.5rem;
  color: #a45c6a;
`;

const RemoveButton = styled.button`
  background: #d48f99;
  border: none;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #b36b7c;
  }
`;

const Total = styled.div`
  border-top: 1px solid #d48f99;
  padding-top: 1rem;
  font-weight: 700;
  color: #7b3b48;
  text-align: right;
`;

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <p>Your cart is empty 🛒</p>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <ItemName>
            {item.name} <Quantity>x{item.quantity}</Quantity>
          </ItemName>
          <RemoveButton onClick={() => removeFromCart(item.id)}>×</RemoveButton>
        </CartItem>
      ))}
      <Total>Total: ${totalPrice.toFixed(2)}</Total>
    </CartContainer>
  );
}

export default Cart;
