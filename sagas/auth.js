import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/auth';

const ConduitAPI = 'https://conduit.productionready.io/api';

function* login({ email, password }) {
  try {
    const user = { email, password };
    const result = yield call(() =>
      axios.post(`${ConduitAPI}/users/login`, { user }),
    );
    console.log('result', result);

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
