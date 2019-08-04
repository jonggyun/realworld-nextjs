import { takeEvery, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Router from 'next/router';
import ConduitAPI from '../lib/ConduitAPI';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../reducers/auth';

import { errorToastr } from '../lib/utils';

function* login({ email, password }) {
  try {
    const user = { email, password };
    const result = yield call(() => ConduitAPI.post('/users/login', { user }));

    yield window.localStorage.setItem('jwt', result.data.user.token);
    yield put({
      type: LOGIN_SUCCESS,
      user: result.data.user,
    });
    yield Router.push('/');
    toast.success('Login Success!!', {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (e) {
    yield errorToastr(e.response.data.errors);
    yield put({
      type: LOGIN_FAILURE,
      error: e,
    });
  }
}

function* loginRequest() {
  yield takeEvery(LOGIN_REQUEST, login);
}

function* signUp({ username, email, password }) {
  try {
    const user = { username, email, password };
    const result = yield call(() => ConduitAPI.post('/users', { user }));

    yield put({
      type: SIGNUP_SUCCESS,
      user: result.data.user,
    });
    toast.success('Sign Up is Success.', {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (e) {
    yield errorToastr(e.response.data.errors);
    yield put({
      type: SIGNUP_FAILURE,
      error: e.response,
    });
  }
}

function* signUpRequest() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
}

export default function* rootSaga() {
  yield all([loginRequest(), signUpRequest()]);
}
