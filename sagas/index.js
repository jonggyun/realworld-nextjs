import { all, fork } from 'redux-saga/effects';

import post from './post';
import profile from './profile';
import auth from './auth';

export default function* rootSaga() {
  yield all([fork(post), fork(profile), fork(auth)]);
}
