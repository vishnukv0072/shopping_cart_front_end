import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {convertCurrency} from "../../utils/helpers.js";

const initialState = {
  footerHeight: 0,
  currencyValue: 0,
  error: ""
}

export const fetchCurrency = createAsyncThunk("misc/getCurrency",
  async function(_, {rejectWithValue}) {
    return await convertCurrency({rejectWithValue});
  })

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setFooterHeight(state, action) {
      state.footerHeight = action.payload;
    }
  },
  extraReducers: builder => builder
    .addCase(fetchCurrency.fulfilled, (state, action) => {
      state.currencyValue = action.payload;
    })
    .addCase(fetchCurrency.pending, () => {
    })
    .addCase(fetchCurrency.rejected, (state, action) => {
      state.error = action.payload.message;
    })
})

export const {setFooterHeight} = miscSlice.actions;
export default miscSlice.reducer;
export const getFooterHeight = store => store.misc.footerHeight;
export const getCurrencyValue = store => store.misc.currencyValue;