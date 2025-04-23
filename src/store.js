import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";
import searchSlice from "./features/search/searchSlice.js";
import cartSlice from "./features/cart/cartSlice.js";
import footerSlice from "./features/otherSlices/footerSlice.js";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    search: searchSlice,
    footer: footerSlice
  }
})

export default store;