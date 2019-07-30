import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
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

function* getPost(action) {
  try {
    const result = yield call(
      () => axios.get(`${ConduitAPI}/articles/${action.slug}`),
      action.slug,
    );
    console.log('result!!!', result);
    yield put({
      type: GET_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      error: e,
    });
  }
}

function* getPostRequest() {
  yield takeEvery(GET_POST_REQUEST, getPost);
}

export default function* rootSaga() {
  yield all([getPostsRequest(), getPostRequest()]);
}
