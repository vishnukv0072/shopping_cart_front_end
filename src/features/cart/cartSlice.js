import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {updateCartItems} from "../../services/apiCart.js";

const initialState = {
  items: []
}

export const addItem = createAsyncThunk("cart/addItem",
  async function (item) {
    const data = {cart_item: {action_type: "addItem", product_id: item.id, quantity: 1}}
    return await updateCartItems({data});
  });

export const removeItem = createAsyncThunk("cart/removeItem",
  async function (item) {
    const data = {cart_item: {action_type: "removeItem", product_id: item.id}}
    return await updateCartItems({data});
  });

export const increaseQuantity = createAsyncThunk("cart/increaseQuantity",
  async function (item) {
    const data = {cart_item: {action_type: "increaseQuantity", product_id: item.id}}
    return await updateCartItems({data});
  });

export const decreaseQuantity = createAsyncThunk("cart/decreaseQuantity",
  async function (item) {
    const data = {cart_item: {action_type: "decreaseQuantity", product_id: item.id}}
    return await updateCartItems({data});
  });

export const clearCart = createAsyncThunk("cart/clearCart",
  async function () {
    const data = {cart_item: {action_type: "clearCart"}}
    return await updateCartItems({data});
  });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (
    builder => builder
      .addCase(addItem.fulfilled, (state, action) => {
        const {id, category, image_url, is_best_seller, price, product_url, title} = action.meta.arg;
        state.items.push({id, category, image_url, is_best_seller, price, product_url, title, quantity: 1});
      })
      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })



      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/fulfilled"), state=> {
        state.isLoading = false;
      })
      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/pending"), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/rejected"), (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  )
});

// export const {
//   addItem,
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity
// } = cartSlice.actions;
export default cartSlice.reducer;
export const getCartItemsCount = store => store.cart.items.length;