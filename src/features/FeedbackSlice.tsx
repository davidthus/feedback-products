import { createSlice } from "@reduxjs/toolkit";
import Data from "../data.json";

const initialState = Data.productRequests;

const FeedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback(state, action) {},
  },
});

export const { addFeedback } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
