import { AnyAction } from 'redux';
import { CandidatesListType } from '../types';

export type ListCandidatesActionTypes = {
  LIST_CANDIDATES_REQUEST: string;
  LIST_CANDIDATES_SUCCESS: string;
  LIST_CANDIDATES_FAILED: string;
};

export type ListCandidatesActionCreators = {
  listCandidatesRequest(): AnyAction;
  listCandidatesSuccess(data: CandidatesListType): AnyAction;
  listCandidatesFailed(): AnyAction;
};
