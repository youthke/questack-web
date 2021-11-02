import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: CounterState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
    doubleCounter: (state) => ({
      ...state,
      count: state.count * 2,
    }),
    occurError: (state, action: PayloadAction<string>) => ({
      ...state,
      error: true,
      errorMessage: action.payload,
    })
  },
});

export default counterSlice;