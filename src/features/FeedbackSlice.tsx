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
    upvote(state, action) {
      //find product request that contains payload id
      const index = state.findIndex((req) => req.id === action.payload.id);
      //check to see if the request is already upvoted, if it is, make upvoted false and decrement upvotes
      if (state[index].upvoted) {
        state[index].upvoted = false;
        state[index].upvotes -= 1;
      } else {
        state[index].upvoted = true;
        state[index].upvotes += 1;
      }
      // if it isnt, increment the upvotes
    },
  },
});

export const { addFeedback, upvote } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
