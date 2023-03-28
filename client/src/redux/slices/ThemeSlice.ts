import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
})

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;