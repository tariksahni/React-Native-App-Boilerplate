import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messageList from './messageList';
import messageReducer from './messageReducer';

export default combineReducers({
  auth: authReducer,
  messages: messageList,
  selectedMessage: messageReducer
});
