import { SELECT_MESSAGE } from '../Actions/Messages/constants';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
