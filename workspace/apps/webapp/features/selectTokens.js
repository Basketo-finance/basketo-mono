import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTokens: [],
  isEnable: false,
};

const selectTokens = createSlice({
  name: 'selectedTokens',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.selectedTokens = [...state.selectedTokens, action.payload.token];
    },

    updatedTokens: (state, action) => {
      state.selectedTokens = action.payload.tokens;
    },

    deleteToken: (state, action) => {
      state.selectedTokens = state.selectedTokens.filter(
        (item) => item.name !== action.payload.token.name
      );
    },

    handleIsEnable: (state, action) => {
      state.isEnable = action.payload.value;
    },
  },
});

export const { addToken, updatedTokens, deleteToken, handleIsEnable } =
  selectTokens.actions;
export const getTokens = (state) => state.selectedTokens;
export const getIsEnable = (state) => state.selectedTokens.isEnable;

export default selectTokens.reducer;
