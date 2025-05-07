import {useSelector} from "react-redux";
import {clearCart, fetchItems, getCartItemIds} from "./cartSlice.js";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import CartTotal from "./CartTotal.jsx";
import {getCurrencyValue} from "../otherSlices/miscSlice.js";
import {useNavigate} from "react-router-dom";

function Cart() {
  const itemIds = useSelector(getCartItemIds);
  const dispatch = useDispatch();
  const currencyValue = useSelector(getCurrencyValue);
  const navigate = useNavigate();

  useEffect(() => {
    if (!itemIds.length) dispatch(fetchItems());
  }, []);

  function clearFromCart() {
    dispatch(clearCart());
  }

  if (itemIds.length === 0) return <EmptyCart/>
  return (
    <div className="py-8 px-4">
      <CartTotal currencyValue={currencyValue}/>
      <ul className="pt-4">
        {
          itemIds.map(id => <CartItem id={id} key={id} currencyValue={currencyValue}/>)
        }
      </ul>
      <div className="flex justify-center space-x-5 pt-8">
        <Button type="remove" onClick={clearFromCart}>Clear cart</Button>
        <Button type="dark" onClick={() => navigate("/checkout")}>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;