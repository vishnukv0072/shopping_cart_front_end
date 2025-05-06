import {BASE_URL} from "../constants/index.js";

export async function getInterests() {
  const res = await fetch(`${BASE_URL}/products/interests`);
  return await res.json();
}

export async function getProducts({query, sortOrder, offset}) {
  const url = `${BASE_URL}/products/${query}?`;
  const sort = sortOrder && sortOrder !== "None" ? sortOrder : "";
  const res = await fetch(`${url}sort_order=${sort}&offset=${offset}`);
  return await res.json();
}
