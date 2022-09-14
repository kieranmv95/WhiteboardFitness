import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RepRoundState {
  rep: number;
  round: number;
  fullScreen: boolean;
}

const initialState = {
  rep: 0,
  round: 0,
  fullScreen: false,
} as RepRoundState;

const counterSlice = createSlice({
  name: "repRound",
  initialState,
  reducers: {
    incrementRep(state) {
      state.rep += 1;
    },
    incrementRound(state) {
      state.round += 1;
    },
    reset(state) {
      state.rep = 0;
      state.round = 0;
    },
    toggleFullScreen(state) {
      state.fullScreen = !state.fullScreen;
    },
  },
});

export const { incrementRep, incrementRound, reset, toggleFullScreen } =
  counterSlice.actions;

export default counterSlice.reducer;
