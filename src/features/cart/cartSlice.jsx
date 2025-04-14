import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload );
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload );
      item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload );
      item.quantity -= 1;
    }
  }
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;
export default cartSlice.reducer;