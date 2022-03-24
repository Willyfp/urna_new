import { createActions } from 'reduxsauce';
import {
  clearCandidate,
  getCandidateFailed,
  getCandidateRequest,
  getCandidateSuccess,
} from './handlers';
import { GetCandidateActionCreators, GetCandidateActionTypes } from './types';

export const { Types, Creators } = createActions<
  GetCandidateActionTypes,
  GetCandidateActionCreators
>({
  getCandidateRequest: ['code'],
  getCandidateSuccess: ['candidate'],
  getCandidateFailed: null,

  clearCandidate: null,
});

export const getCandidateActions = {
  [Types.GET_CANDIDATE_REQUEST]: getCandidateRequest,
  [Types.GET_CANDIDATE_SUCCESS]: getCandidateSuccess,
  [Types.GET_CANDIDATE_FAILED]: getCandidateFailed,

  [Types.CLEAR_CANDIDATE]: clearCandidate,
};
