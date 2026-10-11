// api.js: every network call lives here.
// The rest of the app never calls fetch() directly.

const BASE_URL = "https://dummyjson.com";

// One helper for every GET request
async function getJSON(path) {
  const response = await fetch(`${BASE_URL}${path}`);

  // fetch() only rejects on a NETWORK failure.
  // A 404 or 500 still "succeeds", so check response.ok ourselves.
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

// GET /products?limit=12  ->  { products: [...], total, skip, limit }
export function getProducts(limit = 12) {
  return getJSON(`/products?limit=${limit}`);
}

// GET /products/search?q=phone  ->  { products: [...], total, ... }
export function searchProducts(query, limit = 12) {
  return getJSON(`/products/search?q=${encodeURIComponent(query)}&limit=${limit}`);
}

// GET /products/7  ->  { id, title, description, price, images, ... }
export function getProduct(id) {
  return getJSON(`/products/${id}`);
}
