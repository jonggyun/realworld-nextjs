import { all, fork } from 'redux-saga/effects';

import post from './post';
import profile from './profile';

export default function* rootSaga() {
  yield all([fork(post), fork(profile)]);
}
