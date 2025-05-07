import {useDispatch, useSelector} from "react-redux";
import {fetchItems, getCartItems} from "../cart/cartSlice.js";
import {useEffect} from "react";

function PriceBreakup() {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const subtotal = Object.values(cartItems).reduce((a, c) => a + c.totalPrice, 0);
  const shipping = 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (!cartItems.length) dispatch(fetchItems());
  }, []);

  return (
    <div>
      <div className="p-6">

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">Order Summary</h2>
          {/* Product List */}
          <div className="mb-6">
            {Object.values(cartItems).map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × ₹{item.unitPrice}
                  </p>
                </div>
                <div className="font-semibold">
                  ₹{item.unitPrice * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charges</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceBreakup;