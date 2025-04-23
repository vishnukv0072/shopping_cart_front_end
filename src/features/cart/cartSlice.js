import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchCartItems, updateCartItems} from "../../services/apiCart.js";

const initialState = {
  items: [],
  isLoading: false,
  error: ""
}

export const addItem = createAsyncThunk("cart/addItem",
  async function (item, {rejectWithValue}) {
    const data = {cart_item: {action_type: "addItem", id: item.id, unit_price: item.price, quantity: 1}};
    return await updateCartItems({data, rejectWithValue});
  });

export const removeItem = createAsyncThunk("cart/removeItem",
  async function (item) {
    const data = {cart_item: {action_type: "removeItem", product_id: item.id}};

    return await updateCartItems({data});
  });

export const increaseQuantity = createAsyncThunk("cart/increaseQuantity",
  async function (item) {
    const data = {cart_item: {action_type: "increaseQuantity", product_id: item.id}};
    return await updateCartItems({data});
  });

export const decreaseQuantity = createAsyncThunk("cart/decreaseQuantity",
  async function (item) {
    const data = {cart_item: {action_type: "decreaseQuantity", product_id: item.id}};
    return await updateCartItems({data});
  });

export const clearCart = createAsyncThunk("cart/clearCart",
  async function () {
    const data = {cart_item: {action_type: "clearCart"}};
    return await updateCartItems({data});
  });

export const fetchItems = createAsyncThunk("cart/fetchItems",
  async function (_, {rejectWithValue}) {
    return await fetchCartItems({rejectWithValue});
  });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (
    builder => builder
      .addCase(addItem.fulfilled, (state, action) => {
        const {id, title, category, image_url, is_bestseller, product_url} = action.meta.arg;
        const {unitPrice, quantity, totalPrice} = action.payload.data;
        state.items.push({id, title, category, imageUrl: image_url, productUrl: product_url, unitPrice, quantity, totalPrice, isBestseller: is_bestseller});
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.meta.arg.id)
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = initialState.items;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.cart_items;
      })


      //MATCHERS
      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/fulfilled"), state=> {
        state.isLoading = false;
      })
      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/pending"), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/rejected"), (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
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
export const getCartLoading = store => store.cart.isLoading;
export const getCartItems = store => store.cart.items;