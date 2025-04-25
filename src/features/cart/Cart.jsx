import {useSelector} from "react-redux";
import {clearCart, fetchItems, getCartItemIds} from "./cartSlice.js";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import CartTotal from "./CartTotal.jsx";

function Cart() {
  const itemIds = useSelector(getCartItemIds);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!itemIds.length) dispatch(fetchItems());
  }, []);

  function clearFromCart() {
    dispatch(clearCart());
  }

  if (itemIds.length === 0) return <EmptyCart/>
  return (
    <div className="py-8 px-4">
      <ul>
        {
          itemIds.map(id => <CartItem id={id} key={id}/>)
        }
      </ul>
      <div className="flex justify-center space-x-5 pt-8">
        <Button type="remove" onClick={clearFromCart}>Clear cart</Button>
        <Button type="dark">Checkout</Button>
      </div>
      <CartTotal/>
    </div>
  );
}

export default Cart;