import {useSelector} from "react-redux";
import {getCartItems} from "./cartSlice.js";
import {useEffect, useMemo, useState} from "react";
import {formatCurrency} from "../../utils/helpers.js";
import { Zoom} from "@mui/material";


function CartTotal({currencyValue}) {
  const items = useSelector(getCartItems);
  const [inZoom, setInZoom] = useState(false);



  // const [cartTotal, setCartTotal] = useState(0);
  const cartTotal = useMemo(() => {
    return Object.values(items).reduce((a, i) => a + i.totalPrice, 0)
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

  useEffect(() => {
    setInZoom(false);
    const timeout = setTimeout(() => {
      setInZoom(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [cartTotal]);

  return (
    <div className="flex justify-end sticky top-0">
      {/*DELETE ZOOM IF TOO SLOW*/}
      <Zoom in={inZoom}>
      <p className="font-semibold inline bg-teal-700 text-light px-4 py-2 rounded">
        Total cart price: {formatCurrency((cartTotal * currencyValue).toFixed(2))}
      </p>
    </Zoom>
    </div>
  );
}

export default CartTotal;