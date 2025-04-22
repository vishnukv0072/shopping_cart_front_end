import {BASE_URL} from "../constants/index.js";

export async function updateCartItems({data}) {
  const res = await fetch(`${BASE_URL}/cart/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  return await res.json();
}