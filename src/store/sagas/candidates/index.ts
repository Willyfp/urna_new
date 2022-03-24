import { all, fork } from 'redux-saga/effects';
import watchListCandidates from './watchListCandidates';
import watchGetCandidate from './watchGetCandidate';
import watchVote from './watchVote';

function* candidatesSagas() {
  yield all([
    fork(watchListCandidates),
    fork(watchGetCandidate),
    fork(watchVote),
  ]);
}

export default candidatesSagas;
