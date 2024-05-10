import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cost: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log('added');
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const filtereditems = state.items.filter((ele) => {
        return ele?.data?.card?.info?.id !== action.payload;
      });
      state.items = filtereditems;
    },
    clearCart: (state) => {
      state.items = [];
    },
    addCost: (state, action) => {
      state.cost += action.payload;
    },
    reduceCost: (state, action) => {
      state.cost -= action.payload;
    },
    makeCostZero: (state) => {
      state.cost = 0;
    },
  },
});

export const {
  addItem,
  clearCart,
  addCost,
  reduceCost,
  removeItem,
  makeCostZero,
} = cartSlice.actions;
export default cartSlice.reducer;
