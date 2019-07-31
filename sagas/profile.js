import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../reducers/profile';

const ConduitAPI = 'https://conduit.productionready.io/api';

function* getProfile({ author }) {
  try {
    const result = yield call(
      () => axios.get(`${ConduitAPI}/profiles/${author}`),
      author,
    );

    yield put({
      type: GET_PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_PROFILE_FAILURE,
      error: e,
    });
  }
}

function* getProfileRequest() {
  yield takeEvery(GET_PROFILE_REQUEST, getProfile);
}

export default function* rootSaga() {
  yield all([getProfileRequest()]);
}
