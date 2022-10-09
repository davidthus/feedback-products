import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import CurrentUserSlice from "../features/CurrentUserSlice";
import FeedbackSlice from "../features/FeedbackSlice";
import { listenerMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    feedback: FeedbackSlice,
    currentUser: CurrentUserSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
