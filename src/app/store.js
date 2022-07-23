import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { farmstandsReducer } from '../features/farmstands/farmstandsSlice';

export const store = configureStore({
  reducer: {
    farmstands: farmstandsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
