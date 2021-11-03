import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stack } from '../../models/Stack';

export type OwnerState = {
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: OwnerState = {
  loading: false,
  error: false,
  errorMessage: '',
};

const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    signUp: (state) => ({
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

export default ownerSlice;