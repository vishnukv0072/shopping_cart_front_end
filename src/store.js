import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";
import searchReducer from "./features/search/SearchSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchReducer
  }
})

export default store;