import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const mapsSlice = createSlice({
  name: 'maps',
  initialState
});

export const mapsReducer = mapsSlice.reducer;

