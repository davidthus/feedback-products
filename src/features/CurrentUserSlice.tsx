import { createSlice } from "@reduxjs/toolkit";
import Data from "../data.json";

const initialState = Data.currentUser;

const CurrentUserSlice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    currentUser(state, action) {},
  },
});

export default CurrentUserSlice.reducer;
