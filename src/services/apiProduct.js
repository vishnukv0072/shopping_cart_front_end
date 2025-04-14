const BASE_URL = "http://localhost:3000/api/v1/";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data;
}

export async function getProducts(query) {
  const res = await fetch(`${BASE_URL}/products/search?q=${query}`);
  const data = await res.json();
  console.log(data);
  return data;
}
