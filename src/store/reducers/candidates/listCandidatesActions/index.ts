import { createActions } from 'reduxsauce';
import {
  listCandidatesFailed,
  listCandidatesRequest,
  listCandidatesSuccess,
} from './handlers';
import {
  ListCandidatesActionCreators,
  ListCandidatesActionTypes,
} from './types';

export const { Types, Creators } = createActions<
  ListCandidatesActionTypes,
  ListCandidatesActionCreators
>({
  listCandidatesRequest: null,
  listCandidatesSuccess: ['data'],
  listCandidatesFailed: null,
});

export const listCandidateActions = {
  [Types.LIST_CANDIDATES_REQUEST]: listCandidatesRequest,
  [Types.LIST_CANDIDATES_SUCCESS]: listCandidatesSuccess,
  [Types.LIST_CANDIDATES_FAILED]: listCandidatesFailed,
};
