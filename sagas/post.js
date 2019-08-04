import { takeEvery, all, call, put } from 'redux-saga/effects';
import ConduitAPI from '../lib/ConduitAPI';

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_POSTS_BY_AUTHOR_REQUEST,
  GET_POSTS_BY_AUTHOR_SUCCESS,
  GET_POSTS_BY_AUTHOR_FAILURE,
  GET_FAVORITE_POSTS_REQUEST,
  GET_FAVORITE_POSTS_SUCCESS,
  GET_FAVORITE_POSTS_FAILURE,
} from '../reducers/post';

function* getPosts() {
  try {
    const result = yield call(() => ConduitAPI.get('/articles'));

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
      () => ConduitAPI.get(`/articles/${action.slug}`),
      action.slug,
    );

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

function* getPostsByAuthor(action) {
  try {
    const result = yield call(
      () => ConduitAPI.get(`/articles?author=${action.author}`),
      action.author, // ?? 이거 뭐하는 녀석이냐??
    );
    yield put({
      type: GET_POSTS_BY_AUTHOR_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_BY_AUTHOR_FAILURE,
      error: e,
    });
  }
}

function* getPostsByAuthorRequest() {
  yield takeEvery(GET_POSTS_BY_AUTHOR_REQUEST, getPostsByAuthor);
}

function* getFavoritePosts({ username }) {
  try {
    const result = yield call(
      () => ConduitAPI.get(`/articles?favorited=${username}`),
      username,
    );

    yield put({
      type: GET_FAVORITE_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_FAVORITE_POSTS_FAILURE,
      error: e,
    });
  }
}

function* getFavoritePostsRequest() {
  yield takeEvery(GET_FAVORITE_POSTS_REQUEST, getFavoritePosts);
}

export default function* rootSaga() {
  yield all([
    getPostsRequest(),
    getPostRequest(),
    getPostsByAuthorRequest(),
    getFavoritePostsRequest(),
  ]);
}
