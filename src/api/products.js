const API_BASE_URL = 'http://localhost:5000/api'; // change to your backend URL

// Fetch all products
export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

// Fetch single product by ID
export async function getProductById(id) {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
