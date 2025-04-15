const BASE_URL = "http://localhost:3000/api/v1";

export async function getInterests() {
  const res = await fetch(`${BASE_URL}/products/interests`);
  return await res.json();
}

export async function getProducts(query) {
  const res = await fetch(`${BASE_URL}/products/${query}`);
  return await res.json();
}
