import Button from "../../ui/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {increaseItemQuantity, decreaseItemQuantity, removeItem, getCartItemById} from "./cartSlice.js";
import {formatCurrency} from "../../utils/helpers.js";

function CartItem({id, currencyValue}) {
  //eslint-disable-next-line
  debugger
  const dispatch = useDispatch();
  const item = useSelector(getCartItemById(id));
  const price = item.quantity * currencyValue * item.unitPrice;

  function increaseQuantity() {
    dispatch(increaseItemQuantity(item));
  }

  function decreaseQuantity() {
    item.quantity === 1 ? dispatch(removeItem(item)) : dispatch(decreaseItemQuantity(item));
  }

  return (
    <li className="py-2">
      <div className="flex flex-wrap gap-x-20 bg-white p-2">
        <div className="shrink-1 basis-auto">
          <img src={item.imageUrl} alt={item.title} className="w-50"/>
        </div>

        <div className="flex-1 flex flex-wrap items-center justify-between gap-y-5 lg:pe-20 xl:pe-30">
          <div>
            <p>{item.title}</p>
            <p className="mt-4 font-semibold text-lg" title={formatCurrency(price.toFixed(2))}>
              {item.quantity} X {formatCurrency((currencyValue * item.unitPrice).toFixed(2))}
            </p>
          </div>
          <div className="flex items-center">
            <Button type="dark" onClick={decreaseQuantity}>-</Button>
            <p className="px-5">{item.quantity}</p>
            <Button type="dark" onClick={increaseQuantity}>+</Button>
          </div>
        </div>

      </div>
    </li>
  );
}

export default CartItem;