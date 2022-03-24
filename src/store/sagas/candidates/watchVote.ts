import { Action } from 'redux';
import { put, select, takeLatest } from 'redux-saga/effects';
import { getState } from '../../../utils';
import { RootState } from '../../reducers';
import { VoteTypes } from '../../reducers/candidates';

type VoteActionType = Action & {
  code: string;
};

function* voteRequest({ code }: VoteActionType) {
  try {
    const { candidates }: RootState = yield select(getState);

    const list = candidates.getIn(['candidatesList']);

    const newCandidateList = [...list];

    newCandidateList[0].name = 'robson';

    console.log(newCandidateList[0].name);
  } catch (error) {}
}

export default function* watch() {
  yield takeLatest(VoteTypes.VOTE_REQUEST, voteRequest);
}
