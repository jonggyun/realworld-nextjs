import { takeEvery, put, call, all } from 'redux-saga/effects';
import ConduitAPI from '../lib/ConduitAPI';

import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../reducers/profile';

function* getProfile({ author }) {
  try {
    const result = yield call(
      () => ConduitAPI.get(`/profiles/${author}`),
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
