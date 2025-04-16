import React from "react";
import {Link} from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center space-x-3">
        <img className="me-1 max-w-[19%]" src="/public/shoppingBag.png" alt="shopping bag"/>
        <span className="text-light text-2xl font-semibold tracking-widest">
          Nexave
      </span>
      </div>
    </Link>
  );
}

export default Logo;
