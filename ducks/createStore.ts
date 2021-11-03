import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterSlice, { initialState as counterState } from './counter/slice';
import ownerSlice, {initialState as ownerState} from './owner/slice';
import stackSlice, {initialState as stackState} from './stack/slice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  owner: ownerSlice.reducer,
  stack: stackSlice.reducer,
});

const preloadedState = () => {
  return { counter: counterState, owner: ownerState, stack: stackState};
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export default createStore;