import {useSelector} from "react-redux";
import {clearCart, fetchItems, getCartItems} from "./cartSlice.js";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function Cart() {
  const items = useSelector(getCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) dispatch(fetchItems());
  }, []);

  function clearFromCart() {
    dispatch(clearCart());
  }

  if (items.length === 0) return <EmptyCart/>
  return (
    <div>
      <ul>
        {
          items.map(item => <CartItem item={item} key={item.id}/>)
        }
      </ul>
      <Button type="remove" onClick={clearFromCart}>Clear cart</Button>
    </div>
  );
}

export default Cart;