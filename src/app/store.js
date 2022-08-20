import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { farmstandsReducer } from '../features/farmstands/farmstandsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { userReducer } from '../user/userSlice';

export const store = configureStore({
  reducer: {
    farmstands: farmstandsReducer,
    comments: commentsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
