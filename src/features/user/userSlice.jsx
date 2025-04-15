import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  firstName: "John",
  lastName: "Samuel",
  isAuthenticated: true
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticate(state, action) {
      state.isAuthenticated = action.payload;
    }
  }
});

export const {authenticate} = userSlice.actions;
export default userSlice.reducer;
export const getUser = store => store.user;
