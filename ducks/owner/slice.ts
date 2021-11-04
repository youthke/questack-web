import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stack } from '../../models/Stack';

export type OwnerState = {
  loading: boolean;
  signInSuccess: boolean;
  token: string;
  error: boolean;
  errorMessage: string;
};

export const initialState: OwnerState = {
  loading: false,
  signInSuccess: false,
  token: '',
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
    setToken: (state, action: PayloadAction<string>) => ({
      ...state,
      token: action.payload
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