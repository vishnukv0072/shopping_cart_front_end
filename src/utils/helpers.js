export async function convertCurrency({rejectWithValue, amount = 1, to = "INR"}) {
  try {
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=GBP&to=${to}`);
    const data = await response.json();
    if (!response.ok) {
      return rejectWithValue(data);
    }
    return data.rates[to];
  } catch (err) {
    return rejectWithValue({message: err.message || "Network error"})
  }
}

export function formatCurrency(value, currency = "INR") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(value);
}