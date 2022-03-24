import { Action } from 'redux';
import { INITIAL_STATE_CANDIDATES } from '../reducer';
import { CandidatesListType } from '../types';

type ListCandidatesActionType = Action & {
  data: CandidatesListType;
};

export const listCandidatesRequest = (state = INITIAL_STATE_CANDIDATES) =>
  state.set('status', 'loading');

export const listCandidatesSuccess = (
  state = INITIAL_STATE_CANDIDATES,
  { data }: ListCandidatesActionType,
) => state.merge({ status: 'succeeded', candidatesList: data });

export const listCandidatesFailed = (state = INITIAL_STATE_CANDIDATES) =>
  state.set('status', 'failed');
