import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <div className="flex gap-3">
      <NavLink to="/cart"><img src="/public/shoppingCart.png" alt="shopping cart" className="max-w-[30px]"/></NavLink>
      <NavLink to="/profile"><img src="/public/shoppingProfile.png" alt="shopping profile" className="max-w-[30px]"/></NavLink>
      {/*<div className="flex items-center gap-1">*/}
      {/*  <span>Logout</span>*/}
      {/*  <img src="/public/shoppingLogout.png" alt="shopping log out" className="max-w-[25px]"/>*/}
      {/*</div>*/}
    </div>
  );
}

export default Navigation;