import {BASE_URL} from "../constants/index.js";

export async function updateCartItems({data, rejectWithValue}) {
  try {
    const res = await fetch(`${BASE_URL}/cart/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    const json = await res.json()
    if (!res.ok) {
      // throw new Error(JSON.stringify(json))
      return rejectWithValue(json)
    }
    return json;
  } catch (err) {
    return rejectWithValue({message: err.message || "Network error"});
  }

}

export async function fetchCartItems({rejectWithValue}) {
  try {
    const res = await fetch(`${BASE_URL}/cart/index`);
    const json = await res.json();
    if (!res.ok) {
      return rejectWithValue(json)
    }
    return json;
  } catch (err) {
    return rejectWithValue({message: err.message || "Network error"});
  }
}