import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchCartItems, updateCartItems} from "../../services/apiCart.js";

const initialState = {
  items: {},
  itemIds: [],
  isLoading: false,
  error: ""
}

export const fetchItems = createAsyncThunk("cart/fetchItems",
  async function (_, {rejectWithValue}) {
    return await fetchCartItems({rejectWithValue});
  });

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

export const increaseItemQuantity = createAsyncThunk("cart/increaseItemQuantity",
  async function (item) {
    const data = {cart_item: {action_type: "increaseItemQuantity", product_id: item.id}};
    return await updateCartItems({data});
  });

export const decreaseItemQuantity = createAsyncThunk("cart/decreaseItemQuantity",
  async function (item) {
    const data = {cart_item: {action_type: "decreaseItemQuantity", product_id: item.id}};
    return await updateCartItems({data});
  });

export const clearCart = createAsyncThunk("cart/clearCart",
  async function () {
    const data = {cart_item: {action_type: "clearCart"}};
    return await updateCartItems({data});
  });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fillCartFromResponse(state, action) {
      state.items = action.payload;
      state.itemIds = Object.keys(action.payload);
    }
  },
  extraReducers: (
    builder => builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.cart_items;
        state.itemIds = Object.keys(action.payload.cart_items);
      })
      .addCase(addItem.fulfilled, (state, action) => {
        const {id, title, category, image_url, is_bestseller, product_url} = action.meta.arg;
        const {unitPrice, quantity, totalPrice} = action.payload.data;
        state.items[id] = {
          id,
          title,
          category,
          imageUrl: image_url,
          productUrl: product_url,
          unitPrice,
          quantity,
          totalPrice,
          isBestseller: is_bestseller
        };
        state.itemIds.push(id);
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        // state.items = state.items.filter(item => item.id !== action.meta.arg.id)
        delete(state.items[action.meta.arg.id]);
        state.itemIds = state.itemIds.filter(id => id !== action.meta.arg.id);
      })
      .addCase(increaseItemQuantity.fulfilled, (state, action) => {
        //TODO - increase only if available
        const item = state.items[action.meta.arg.id];
        item.quantity += 1;
        item.totalPrice = action.payload.totalPrice;
      })
      .addCase(decreaseItemQuantity.fulfilled, (state, action) => {
      // TODO - decrease only till 1 then delete
        const item = state.items[action.meta.arg.id];
        item.quantity -= 1;
        item.totalPrice = action.payload.totalPrice;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = initialState.items;
        state.itemIds = initialState.itemIds;
      })


      //MATCHERS
      .addMatcher(action => action.type.startsWith("cart/") && action.type.endsWith("/fulfilled"), state => {
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

export default cartSlice.reducer;
export const {fillCartFromResponse} = cartSlice.actions;
export const getCartItemsCount = store => store.cart.itemIds.length;
export const getCartLoading = store => store.cart.isLoading;
export const getCartItems = store => store.cart.items;
export const getCartItemIds = store => store.cart.itemIds;
export const getCartItemById = (id) => (store) => store.cart.items[id];