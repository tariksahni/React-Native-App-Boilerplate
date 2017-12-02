import firebase from 'firebase';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  LOGIN_USER_ASYNC,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from './constants';

export function* loginUser(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(
      firebase.auth().signInWithEmailAndPassword(email, password)
    );
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: response
    });
  } catch (err) {
    try {
      const newUserResponse = yield firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      yield put({
        type: LOGIN_USER_SUCCESS,
        payload: newUserResponse
      });
    } catch (error) {
      yield put({ type: LOGIN_USER_FAIL });
    }
  }
}

export function* watchLoginUsers() {
  yield takeEvery(LOGIN_USER_ASYNC, loginUser);
}
export default function* authSagas() {
  yield all([watchLoginUsers()]);
}
