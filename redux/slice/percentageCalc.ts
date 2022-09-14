import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Settings {
  roundToWhole: boolean;
  percentageIntervals: number;
  showValuesUnder50: boolean;
}

interface PercentageCalcState {
  value: string;
  settings: Settings;
}

const initialState = {
  value: "",
  settings: {
    roundToWhole: false,
    percentageIntervals: 10,
    showValuesUnder50: false,
  },
} as PercentageCalcState;

const percentageCalcSlice = createSlice({
  name: "percentageCalc",
  initialState,
  reducers: {
    update(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    toggleRoundToWhole(state) {
      state.settings.roundToWhole = !state.settings.roundToWhole;
    },
    toggleShowValuesUnder50(state) {
      state.settings.showValuesUnder50 = !state.settings.showValuesUnder50;
    },
    changePercentageIntervals(state) {
      if (state.settings.percentageIntervals === 10) {
        state.settings.percentageIntervals = 5;
      } else {
        state.settings.percentageIntervals = 10;
      }
    },
  },
});

export const {
  update,
  toggleRoundToWhole,
  toggleShowValuesUnder50,
  changePercentageIntervals,
} = percentageCalcSlice.actions;

export default percentageCalcSlice.reducer;
