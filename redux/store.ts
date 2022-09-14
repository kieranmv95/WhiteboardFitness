import { configureStore } from "@reduxjs/toolkit";
import repRoundReducer from "./slice/repRound";

export const store = configureStore({
  reducer: {
    repRounds: repRoundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
