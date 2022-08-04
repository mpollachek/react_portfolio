import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";
import { FARMSTANDS } from "../../app/shared/FARMSTANDS";

// export const fetchFarmstands = createAsyncThunk(
//   'farmstands/fetchFarmstands',
//   async () => {
//       const response = await fetch(baseUrl + 'farmstands');
//       if (!response.ok) {
//           return Promise.reject('Unable to fetch, status: ' + response.status);
//       }
//       const data = await response.json();
//       return data;
//   }
// );


const initialState = {
  farmstandsArray: FARMSTANDS,
  // farmstandsArray: [],
  isLoading: true,
  errMsg: ''
};

const farmstandsSlice = createSlice({
  name: 'farmstands',
  initialState,
  // reducers: {},
  // extraReducers: {
  //     [fetchFarmstands.pending]: (state) => {
  //         state.isLoading = true;
  //     },
  //     [fetchFarmstands.fulfilled]: (state, action) => {
  //         state.isLoading = false;
  //         state.errMsg = '';
  //         state.farmstandsArray = mapImageURL(action.payload);
  //     },
  //     [fetchFarmstands.rejected]: (state, action) => {
  //         state.isLoading = false;
  //         state.errMsg = action.error ? action.error.message : 'Fetch failed';
  //     }
  // }
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
