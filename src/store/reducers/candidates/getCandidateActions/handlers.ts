import { Action } from 'redux';
import { INITIAL_STATE_CANDIDATES } from '../reducer';
import { CandidateType } from '../types';

type getCandidateActionType = Action & {
  candidate: CandidateType;
};

export const getCandidateRequest = (state = INITIAL_STATE_CANDIDATES) =>
  state.setIn(['getCandidate', 'status'], 'loading');

export const getCandidateSuccess = (
  state = INITIAL_STATE_CANDIDATES,
  { candidate }: getCandidateActionType,
) =>
  state.merge({
    getCandidate: {
      status: 'succeeded',
      candidate,
    },
  });

export const getCandidateFailed = (state = INITIAL_STATE_CANDIDATES) =>
  state.setIn(['getCandidate', 'status'], 'failed');

export const clearCandidate = (state = INITIAL_STATE_CANDIDATES) =>
  state.setIn(['getCandidate', 'candidate'], {});
