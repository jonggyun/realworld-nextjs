import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../reducers/post';

const ConduitAPI = 'https://conduit.productionready.io/api';

function* getPosts() {
  try {
    const result = yield call(() => axios.get(`${ConduitAPI}/articles`));
    yield put({
      type: GET_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_FAILURE,
      error: e,
    });
  }
}

function* getPostsRequest() {
  yield takeEvery(GET_POSTS_REQUEST, getPosts);
}

export default function* rootSaga() {
  yield all([getPostsRequest()]);
}
