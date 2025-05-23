import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../services/apiProduct.js";
import {fillCartFromResponse} from "../cart/cartSlice.js";

const initialState = {
  query: "",
  results: [],
  offset: 0,
  maxPages: 0,
  minMax: [],
  sortOrder: "",
  filters: {
    price: []
  },
  isLoading: false
};

export const fetchProducts = createAsyncThunk("search/fetchProducts",
  async function (_, thunkAPI) {
    const state = thunkAPI.getState();
    const query = state.search.query;
    const sortOrder = state.search.sortOrder;
    const offset = state.search.offset;
    const data = await getProducts({query, sortOrder, offset});
    thunkAPI.dispatch(fillCartFromResponse(data.cartItems))
    return data;
  });

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    results(state, action) {
      state.results = action.payload.products;
      state.minMax = action.payload.minMax;
    },
    setOrder(state, action) {
      state.sortOrder = action.payload;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    clearAll() {
      return initialState
    }
  },
  extraReducers: builder => builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.results = action.payload.products;
      state.minMax = action.payload.minMax;
      state.maxPages = action.payload.maxPages;
      state.isLoading = false;
    })
    .addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    })
});

export const {
  setOrder,
  setQuery,
  setOffset,
  setLoading,
  clearAll
} = SearchSlice.actions;

export default SearchSlice.reducer;

export const getResults = store => store.search.results;
export const getIsSearching = store => store.search.isLoading;
export const getSortOrder = store => store.search.sortOrder;
export const getMinMax = store => store.search.minMax;
export const getSearchQuery = store => store.search.query;
export const getOffset = store => store.search.offset;
export const getMaxPages = store => store.search.maxPages;
