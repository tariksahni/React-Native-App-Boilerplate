import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_ASYNC } from './constants';

export const emailChange = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChange = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: LOGIN_USER_ASYNC,
    payload: { email, password }
  };
};
