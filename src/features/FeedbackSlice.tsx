import { createSlice } from "@reduxjs/toolkit";
import { request } from "../App";
import Data from "../data.json";

let initialState: request[];

localStorage.getItem("feedback") !== null
  ? (initialState = JSON.parse(localStorage.getItem("feedback")!))
  : (initialState = Data.productRequests);

const FeedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback(state, action) {},
  },
});

export const { addFeedback } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
