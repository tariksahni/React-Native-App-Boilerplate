import { SELECT_MESSAGE } from './constants';

export const selectMessage = id => {
  return {
    type: SELECT_MESSAGE,
    payload: id
  };
};
