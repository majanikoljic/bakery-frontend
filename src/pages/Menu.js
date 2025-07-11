import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Menu() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/products')  // Your backend URL
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
      ))}
    </Container>
  );
}

export default Menu;
