import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff0f5;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(212, 143, 153, 0.2);
  text-align: center;
  width: 220px;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  color: #d48f99;
  font-family: 'Dancing Script', cursive;
`;

const Price = styled.p`
  color: #4b2e2e;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #6b4c4c;
  margin: 0.5rem 0;
  font-family: 'Cursive', sans-serif;
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

function ProductCard({ product, onAddToCart }) {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Description>{product.description}</Description>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </Card>
  );
}

export default ProductCard;
