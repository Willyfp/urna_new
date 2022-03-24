import { AnyAction } from 'redux';

export type VoteActionTypes = {
  VOTE_REQUEST: string;
};

export type VoteActionCreators = {
  voteRequest(code: string): AnyAction;
};
