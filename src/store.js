import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";
import searchSlice from "./features/search/searchSlice.js";
import cartSlice from "./features/cart/cartSlice.js";
import miscSlice from "./features/otherSlices/miscSlice.js";
import addressSlice from "./features/address/addressSlice.js";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    search: searchSlice,
    address: addressSlice,
    misc: miscSlice
  }
})

export default store;