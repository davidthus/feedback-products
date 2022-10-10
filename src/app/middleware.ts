import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addFeedback, upvote } from "../features/FeedbackSlice";
import type { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addFeedback, upvote),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "feedback",
      JSON.stringify((listenerApi.getState() as RootState).feedback)
    ),
});
