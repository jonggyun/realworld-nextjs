import { takeEvery, all, call, put } from 'redux-saga/effects';

import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from '../reducers/post';

const delay = ms =>
  new Promise(() => setTimeout(() => console.log('deplay'), ms));

function* getPostsSuccess() {
  yield call(delay, 500);
  yield put({ type: GET_POSTS_SUCCESS });
}

function* getPosts() {
  yield takeEvery(GET_POSTS_REQUEST, getPostsSuccess);
}

export default function* rootSaga() {
  yield all([getPosts()]);
}
