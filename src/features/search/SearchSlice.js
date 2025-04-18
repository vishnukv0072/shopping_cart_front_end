import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../services/apiProduct.js";

const initialState = {
  query: "",
  results: [],
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
    return await getProducts({query, sortOrder});
  });

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    results(state, action) {
      state.results = action.payload.products;
      state.filters.price = action.payload.minMax;
    },
    setOrder(state, action) {
      state.sortOrder = action.payload;
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
      state.filters.price = action.payload.minMax;
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
  clearAll,
  setLoading
} = SearchSlice.actions;

export default SearchSlice.reducer;
export const getIsSearching = store => store.search.isLoading;
export const getSortOrder = store => store.search.sortOrder;

export const getMinMax = store => store.search.filters.price;