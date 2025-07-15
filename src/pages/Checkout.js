import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext'; 

const Container = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background: #d48f99;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #b36b7c;
  }
`;

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderData = {
      orderItems: cartItems.map(item => ({
        name: item.name,
        qty: item.quantity,
        price: item.price,
        product: item._id,
        image: item.image,
      })),
      customerName: formData.name,
      totalPrice: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    try {
        const response = await fetch('https://bakery-backend-ljte.onrender.com/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });

      if (!response.ok) throw new Error('Failed to place order');

      alert(`Thank you for your order, ${formData.name}!`);
      clearCart();
    } catch (error) {
      alert('Error placing order. Please try again.');
      console.error(error);
    }
  }

  return (
    <Container>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />

        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

        <Label htmlFor="address">Pickup Address</Label>
        <Input id="address" name="address" value={formData.address} onChange={handleChange} required />

        <Button type="submit">Place Order</Button>
      </form>
    </Container>
  );
}

export default Checkout;
