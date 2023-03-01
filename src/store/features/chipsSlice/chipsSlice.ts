import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chips } from "../../../data/types";

const initialState: Chips = [];

export const chipsSlice = createSlice({
  name: "chip",
  initialState,
  reducers: {
    loadProducts: (currentChip, action: PayloadAction<Chips>) => [
      ...action.payload,
    ],
  },
});

export const chipReducer = chipsSlice.reducer;
export const { loadProducts: loadProductsAction } = chipsSlice.actions;
