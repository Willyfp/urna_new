import { AnyAction } from 'redux';
import { CandidateType } from '../types';

export type GetCandidateActionTypes = {
  GET_CANDIDATE_REQUEST: string;
  GET_CANDIDATE_SUCCESS: string;
  GET_CANDIDATE_FAILED: string;

  CLEAR_CANDIDATE: string;
};

export type GetCandidateActionCreators = {
  getCandidateRequest(code: string): AnyAction;
  getCandidateSuccess(candidate: CandidateType): AnyAction;
  getCandidateFailed(): AnyAction;
  clearCandidate(): AnyAction;
};
