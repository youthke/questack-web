import { useSelector } from 'react-redux';
import { StackState } from './slice';

export const useCounterState = () => {
  return useSelector((state: { stack: StackState }) => state);
};