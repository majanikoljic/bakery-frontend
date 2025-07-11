import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
`;

function ProductList({ products, onAddToCart }) {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </ListContainer>
  );
}

export default ProductList;
