import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectInputState {
  value: string;
}

const initialState = {
  value: "",
};

export const selectInputSlice = createSlice({
  name: "selectInput",
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateFilter } = selectInputSlice.actions;

export default selectInputSlice.reducer;
