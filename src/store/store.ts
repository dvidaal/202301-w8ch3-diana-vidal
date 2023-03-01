import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { chipReducer } from "./features/chipsSlice/chipsSlice";

export const store = configureStore({
  reducer: { chip: chipReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
