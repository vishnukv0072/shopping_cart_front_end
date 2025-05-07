import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selectedAddress: null
};

const addressSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAddress(state, action) {
      state.selectedAddress = action.payload;
    }
  }
});

export default addressSlice.reducer;

export const {setAddress} = addressSlice.actions;
export const getSelectedAddress = store => store.address.selectedAddress;