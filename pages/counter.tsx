import React from 'react';
import { useDispatch } from 'react-redux';
import counterSlice from '../ducks/counter/slice';
import { useCounterState } from '../ducks/counter/selectors'

const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };

  const onClickDouble = () => {
    dispatch(counterSlice.actions.doubleCounter());
  }
  const onClickError = () => {
    dispatch(counterSlice.actions.occurError('Error!!!'))
  }

  return (
    <>
      <button type="button" onClick={onClickIncrement}>
        +
      </button>
      <button type="button" onClick={onClickDecrement}>
        -
      </button>
      <button type="button" onClick={onClickDouble}>
        x2
      </button>
      <button type="button" onClick={onClickError}>
        ERROR
      </button>
      <p>{state.count}</p>
      {state.error ? <p>{state.errorMessage}</p> : <></>}
    </>
  );
};

export default CounterPage;