import { configureStore } from '@reduxjs/toolkit';
import basketDetailsReducer from '../features/basketDetails';
import selectTokensReducer from '../features/selectTokens';

export const store = configureStore({
  reducer: {
    selectedTokens: selectTokensReducer,
    basketDetails: basketDetailsReducer,
  },
});
