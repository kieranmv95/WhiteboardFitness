import { configureStore } from "@reduxjs/toolkit";
import repRoundReducer from "./slice/repRound";
import percentageCalcReducer from "./slice/percentageCalc";

export const store = configureStore({
  reducer: {
    repRounds: repRoundReducer,
    percentageCalc: percentageCalcReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
