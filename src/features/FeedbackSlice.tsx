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
    addFeedback: (state, action: any) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        category: action.payload.category,
        upvotes: 0,
        upvoted: false,
        status: "suggestion",
        description: action.payload.description,
        comments: [],
      });
    },
    upvote: (state, action) => {
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
    editFeedback: (state, action: any) => {
      const index = state.findIndex(
        (req) => req.id === Number(action.payload.id)
      );
      state[index] = {
        ...state[index],
        status: action.payload.status,
        title: action.payload.title,
        category: action.payload.category,
        description: action.payload.description,
      };
    },
    deleteFeedback: (state, action: any) => {
      return state.filter((req) => req.id !== action.payload.id);
    },
    addComment: (state, action: any) => {
      const index = state.findIndex(
        (req) => req.id === Number(action.payload.id)
      );

      state[index].comments.push({
        id: Date.now(),
        content: action.payload.content,
        user: action.payload.user,
        replies: [],
      });
    },
    addReply: (state, action: any) => {
      const feedbackIndex = state.findIndex(
        (req) => req.id === Number(action.payload.feedbackId)
      );

      const commentIndex = state[feedbackIndex].comments.findIndex(
        (comment) => {
          return comment.id === action.payload.commentId;
        }
      );

      state[feedbackIndex].comments[commentIndex].replies.push({
        user: action.payload.currentUser,
        content: action.payload.content,
        replyingTo: action.payload.user.username,
      });

      // state[index].comments.push({
      //   id: Date.now(),
      //   content: action.payload.content,
      //   user: action.payload.user,
      //   replies: [],
      // });
    },
  },
});

export const {
  addFeedback,
  upvote,
  editFeedback,
  deleteFeedback,
  addComment,
  addReply,
} = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
