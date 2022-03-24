import { createReducer } from 'reduxsauce';
import SeamlessImmutable, { ImmutableObject } from 'seamless-immutable';
import { getCandidateActions } from './getCandidateActions';
import { listCandidateActions } from './listCandidatesActions';
import { stepActions } from './stepActions';
import {
  CandidatesListType,
  CandidateType,
  InitialStateCandidatesType,
} from './types';

export const INITIAL_STATE_CANDIDATES: ImmutableObject<InitialStateCandidatesType> =
  SeamlessImmutable({
    status: 'idle',
    candidatesList: [] as CandidatesListType,
    step: 0,
    getCandidate: {
      status: 'idle',
      candidate: {} as CandidateType,
    },
  });

export default createReducer(INITIAL_STATE_CANDIDATES, {
  ...listCandidateActions,
  ...stepActions,
  ...getCandidateActions,
});
