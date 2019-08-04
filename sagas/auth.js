import { takeEvery, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Router from 'next/router';
import ConduitAPI from '../lib/ConduitAPI';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/auth';

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
    toast.error('Check your Email or Password.', {
      position: toast.POSITION.TOP_CENTER,
    });
    yield put({
      type: LOGIN_FAILURE,
      error: e,
    });
  }
}

function* loginRequest() {
  yield takeEvery(LOGIN_REQUEST, login);
}

export default function* rootSaga() {
  yield all([loginRequest()]);
}
