import {useSelector} from "react-redux";
import {getCartItems} from "./cartSlice.js";
import { useMemo,} from "react";
import {getCurrencyValue} from "../otherSlices/miscSlice.js";
import {formatCurrency} from "../../utils/helpers.js";

function CartTotal() {
  const items = useSelector(getCartItems);
  const currencyValue = useSelector(getCurrencyValue);

  // const [cartTotal, setCartTotal] = useState(0);
  const cartTotal = useMemo(() => {
    return  Object.values(items).reduce((a, i) => a + i.totalPrice, 0)
    // return items.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  }, [items]);

  //This triggers an extra re-render
  //But memo can't be async and the logic is extracted from Cart.jsx so it is not that expensive
  // useEffect(() => {
  //   async function abc() {
  //     const total = items.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  //     const converted = await convertCurrency(total);
  //     const formatted = await formatCurrency(converted);
  //     setCartTotal(formatted);
  //   }
  //   abc();
  // }, [items]);

  return (
    <p className="font-semibold text-end">Total cart price: {formatCurrency((cartTotal * currencyValue).toFixed(2))}</p>
  );
}

export default CartTotal;