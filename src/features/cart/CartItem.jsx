import Button from "../../ui/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {increaseItemQuantity, decreaseItemQuantity, removeItem, getCartItemById} from "./cartSlice.js";

function CartItem({id}) {
  const dispatch = useDispatch();
  const item = useSelector(getCartItemById(id));

  function increaseQuantity() {
    dispatch(increaseItemQuantity(item));
  }

  function decreaseQuantity() {
    item.quantity === 1 ? dispatch(removeItem(item)) : dispatch(decreaseItemQuantity(item));
  }

  return (
    <li>
      <div className="grid" style={{gridTemplateColumns: "minMax(80px, 200px) 1fr", gap: "10px"}}>
        <div className="bg-red-100">
          <img src={item.imageUrl} alt={item.title}/>
        </div>
        <div className="bg-green-100">
          {item.title}
          <div className="flex align-center">
            <Button type="dark" onClick={decreaseQuantity}>-</Button>
            <p className="p-5">{item.quantity}</p>
            <Button type="dark" onClick={increaseQuantity}>+</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;