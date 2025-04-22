import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  height: 0
}

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setHeight(state, action) {
      state.height = action.payload;
    }
  }
})

export const {setHeight} = footerSlice.actions;
export default footerSlice.reducer;
export const getHeight = store => store.footer.height;