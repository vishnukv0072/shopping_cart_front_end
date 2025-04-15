const BASE_URL = "http://localhost:3000/api/v1";

export async function getInterests() {
  const res = await fetch(`${BASE_URL}/products/interests`);
  return await res.json();
}

export async function getProducts({query, sortOrder}) {
  const url = `${BASE_URL}/products/${query}?`;
  const sort = sortOrder && sortOrder !== "None" ? sortOrder : "";
  const res = await fetch(`${url}sort_order=${sort}`);
  return await res.json();
}
