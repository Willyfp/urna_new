import { all, fork } from 'redux-saga/effects';
import candidatesSagas from './candidates';

function* rootSagas() {
  yield all([fork(candidatesSagas)]);
}

export default rootSagas;
