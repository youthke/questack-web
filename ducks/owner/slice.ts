import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stack } from '../../models/Stack';

export type OwnerState = {
  loading: boolean;
  signInSuccess: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: OwnerState = {
  loading: false,
  signInSuccess: false,
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
    }),
    signIn: (state) => ({
      ...state,
      loading: true,
    }),
    signInError: (state) => ({
      ...state,
      loading: false,
      error: true,
      errorMessage: "サインインに失敗しました",
    }),
    signInSuccess: (state) => ({
      ...state,
      signInSuccess: true,
      loading: false,
      error: false,
    }),
  },
});

export default ownerSlice;