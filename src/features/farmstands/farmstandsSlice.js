import { createSlice } from "@reduxjs/toolkit";
import { FARMSTANDS } from "../../app/shared/FARMSTANDS";

const initialState = {
  farmstandsArray: FARMSTANDS
};

const farmstandsSlice = createSlice({
  name: 'farmstands',
  initialState
});

export const farmstandsReducer = farmstandsSlice.reducer;

export const selectAllFarmstands = (state) => {
  return state.farmstands.farmstandsArray;
};

export const selectFarmstandsById = (id) => (state) => {
  return state.farmstands.farmstandsArray.find(
    (farmstand) => farmstand.id === parseInt(id)
  );
};

export const selectFeaturedFarmstands = (state) => {
  return state.farmstands.farmstandsArray.filter(
    (farmstand) => farmstand.featured
  );
};

export const selectFarmstandProducts = (state) => {
  return state.farmstands.farmstandsArray.filter(
    (farmstand) => farmstand.products
  );
};
