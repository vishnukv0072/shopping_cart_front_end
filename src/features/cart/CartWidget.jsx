import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {getFooterHeight} from "../otherSlices/miscSlice.js";
import {Link} from "react-router-dom"

function CartWidget({cartItemsCount}) {
  const cart = useRef(null);
  const cartPosReference = useRef(null);

  const totalHeight = useRef(null);
  const footerHeight = useSelector(getFooterHeight);
  const scrolledHeight = useRef(null);
  const distanceToWidget = useRef(null);
  const [cartIsAbove, setCartIsAbove] = useState(scrolledHeight.current ? scrolledHeight.current < distanceToWidget.current : true);

  function cartIcon() {
    scrolledHeight.current = window.pageYOffset + cartPosReference.current.getBoundingClientRect().bottom;
    // if (scrolledHeight.current < distanceToWidget.current && !cart.current.classList.contains("cart-items-above")) {
    if (scrolledHeight.current < distanceToWidget.current) {
      console.log("above")
        cart.current.classList.remove("cart-items-below");
        cart.current.classList.add("cart-items-above");
        setCartIsAbove(true);
    }
    // if (scrolledHeight.current > distanceToWidget.current && !cart.current.classList.contains("cart-items-below")) {
    if (scrolledHeight.current > distanceToWidget.current) {
      console.log("below")
      cart.current.classList.remove("cart-items-above");
      cart.current.classList.add("cart-items-below");
      setCartIsAbove(false);
    }
  }

  useEffect(() => {
    if (cartItemsCount > 0) {
      totalHeight.current = document.body.scrollHeight;
      distanceToWidget.current = totalHeight.current - footerHeight;
      scrolledHeight.current = window.pageYOffset + cartPosReference.current.getBoundingClientRect().bottom;
      cartIcon()
      document.addEventListener("scroll", cartIcon);
      return () => document.removeEventListener("scroll", cartIcon);
    }
  }, []);

  if (cartItemsCount === 0) return null;
  return (
    <Link to="/cart">
      <div
        className={`fixed cart-items-above right-8 ${cartIsAbove ? 'bg-dark text-light' : 'bg-light text-dark'} rounded-full w-20 h-20 cursor-pointer`}
        id="cart-items" ref={cart}>
        <div className="absolute left-[30%] top-[9%]">
          <span className="ms-4">{cartItemsCount}</span>
          <img src={cartIsAbove ? "/public/shoppingCartLight.png" : "/public/shoppingCartDark.png"} alt="Cart"
               className="absolute top-5"/>
        </div>
      </div>
      <div className="fixed cart-items-above right-8" ref={cartPosReference}></div>
    </Link>
  );
}

export default CartWidget;