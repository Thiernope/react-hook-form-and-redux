import {createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counterSlice', 
    initialState: {
        count:10
    },
    reducers: {
      increment: (state, action: PayloadAction<number>) => {
        state.count += action.payload
      },
      decrement: (state, action: PayloadAction<number>) => {
        state.count -= action.payload
      }, 
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.count += action.payload
      }
    }
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;