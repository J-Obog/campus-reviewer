import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchInputState {
  value: string;
}

const initialState: SearchInputState = {
  value: "",
};

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateSearch } = searchInputSlice.actions;

export default searchInputSlice.reducer;
