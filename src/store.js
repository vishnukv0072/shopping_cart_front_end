import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";

const store = configureStore({
  reducer: {
    user: userSlice
  }
})

export default store;