import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import searchInputReducer from "./slices/SearchInputSlice";
import selectInputReducer from "./slices/SelectInputSlice";
import themeReducer from "./slices/ThemeSlice";

const rootReducer = combineReducers({
  searchInput: searchInputReducer,
  selectInput: selectInputReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: {
    searchInput: searchInputReducer,
    selectInput: selectInputReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
