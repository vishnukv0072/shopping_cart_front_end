export async function convertCurrency(amount, to = "INR", from = "GBP") {
  const response = await fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
  );
  const data = await response.json();
  if (!data.rates) throw new Error(data.message);
  return await data.rates[to];
}

export function formatCurrency(value, currency = "INR") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(value);
}