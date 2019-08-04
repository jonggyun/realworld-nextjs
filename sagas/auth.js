import { takeEvery, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import ConduitAPI from '../lib/ConduitAPI';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/auth';

function* login({ email, password }) {
  try {
    const user = { email, password };
    const result = yield call(() => ConduitAPI.post('/users/login', { user }));

    yield put({
      type: LOGIN_SUCCESS,
      user: result.data.user,
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
