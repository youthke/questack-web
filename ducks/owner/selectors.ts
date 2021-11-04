import { useSelector } from 'react-redux';
import { OwnerState } from './slice';

export const useOwnerState = () => {
  return useSelector((state: { owner: OwnerState }) => state);
};