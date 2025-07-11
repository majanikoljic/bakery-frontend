import API_BASE_URL from './config';

// Create a new order
export async function createOrder(orderData) {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  if (!res.ok) throw new Error('Failed to create order');
  return res.json();
}

// Fetch all orders (optional, admin use)
export async function getOrders() {
  const res = await fetch(`${API_BASE_URL}/orders`);
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}
