import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  background: #fff0f5;
  padding: 1rem 2rem;
  border-radius: 12px;
`;

const Title = styled.h2`
  color: #b36b7c;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  border-bottom: 1px solid #d48f99;
`;

const Button = styled.button`
  background: #d48f99;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #b36b7c;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  flex: 1 1 200px;
`;

function Admin() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Strawberry Cupcake', price: 4.99 },
    { id: 2, name: 'Vanilla Macaron', price: 2.99 },
  ]);
  const [orders] = useState([
    { id: 1, customer: 'Anna', total: 15.98, status: 'Pending' },
    { id: 2, customer: 'Mike', total: 7.98, status: 'Completed' },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  // Example useEffect: you can replace with API fetch calls later
  useEffect(() => {
    // fetch products and orders from backend here, then update state
    // Example:
    // fetch('/api/products').then(res => res.json()).then(setProducts);
    // fetch('/api/orders').then(res => res.json()).then(setOrders);
  }, []);

  function handleAddProduct(e) {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const newId = products.length
      ? Math.max(...products.map(p => p.id)) + 1
      : 1;
    setProducts([...products, { id: newId, name: newProduct.name, price: parseFloat(newProduct.price) }]);
    setNewProduct({ name: '', price: '' });
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter(p => p.id !== id));
  }

  return (
    <Container>
      <Section>
        <Title>Manage Products</Title>
        <List>
          {products.map(product => (
            <ListItem key={product.id}>
              <span>{product.name} — ${product.price.toFixed(2)}</span>
              <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
            </ListItem>
          ))}
        </List>
        <Form onSubmit={handleAddProduct}>
          <Input
            type="text"
            placeholder="Product name"
            value={newProduct.name}
            onChange={e => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
            required
          />
          <Input
            type="number"
            step="0.01"
            placeholder="Price"
            value={newProduct.price}
            onChange={e => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
            required
          />
          <Button type="submit">Add Product</Button>
        </Form>
      </Section>

      <Section>
        <Title>Orders</Title>
        <List>
          {orders.map(order => (
            <ListItem key={order.id}>
              <span>
                Order #{order.id} — {order.customer} — ${order.total.toFixed(2)} — {order.status}
              </span>
              {/* You can add buttons to update status here */}
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  );
}

export default Admin;
