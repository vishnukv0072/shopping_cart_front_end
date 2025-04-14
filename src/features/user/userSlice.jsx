import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  firstName: "John",
  lastName: "Samuel"
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
