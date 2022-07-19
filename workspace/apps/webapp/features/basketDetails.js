import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketDetails: [],
};

const basketDetails = createSlice({
  name: 'basketDetails',
  initialState,
  reducers: {
    setBasketDetails: (state, action) => {
      state.basketDetails = action.payload.basketData;
    },
  },
});

export const { setBasketDetails } = basketDetails.actions;
export const getBasketDetails = (state) => state.basketDetails

export default basketDetails.reducer;
