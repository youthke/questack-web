import { useSelector } from 'react-redux';
import { StackState } from './slice';

export const useStackState = () => {
  return useSelector((state: { stack: StackState }) => state);
};