import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stack } from '../../models/Stack';

export type StackState = {
  stack: Stack | undefined,
  stacks: Stack[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: StackState = {
  stack: undefined,
  stacks: [],
  loading: false,
  error: false,
  errorMessage: '',
};

const stackSlice = createSlice({
  name: 'stack',
  initialState,
  reducers: {
    setStacks: (state, action: PayloadAction<Stack[]>) => ({
      ...state,
      stacks: action.payload,
    }),
    postStack: (state) => ({
      ...state,
      loading: true,
    }),
    postSuccess: (state) => ({
      ...state,
      loading: false,
      error: false,
    }),
    postError: (state) => ({
      ...state,
      loading: false,
      error: true,
      errorMessage: "作成に失敗しました",
    })
  },
});

export default stackSlice;