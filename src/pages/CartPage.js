import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';  // <-- import useNavigate

const Container = styled.div`
  padding: 2rem;
`;

const Item = styled.div`
  background: #fff0f5;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 1rem;
`;

const Button = styled.button`
  background: #d48f99;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #b36b7c;
  }
`;

const Total = styled.h3`
  text-align: right;
  margin-top: 2rem;
  color: #4b2e2e;
`;

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();  // <-- initialize navigate

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <Item key={item._id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </ItemDetails>
              <Button onClick={() => removeFromCart(item._id)}>Remove</Button>
            </Item>
          ))}
          <Total>Total: ${getTotalPrice()}</Total>
          <Button onClick={clearCart}>Clear Cart</Button>

          {/* Checkout button */}
          <Button onClick={() => navigate('/checkout')}>Proceed to Checkout</Button>
        </>
      )}
    </Container>
  );
}

export default CartPage;
