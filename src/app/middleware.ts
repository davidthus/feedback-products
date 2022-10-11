import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addFeedback,
  deleteFeedback,
  editFeedback,
  upvote,
} from "../features/FeedbackSlice";
import type { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addFeedback, upvote, editFeedback, deleteFeedback),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "feedback",
      JSON.stringify((listenerApi.getState() as RootState).feedback)
    ),
});
