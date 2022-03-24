import { createActions } from 'reduxsauce';
import { VoteActionCreators, VoteActionTypes } from './types';

export const { Types, Creators } = createActions<
  VoteActionTypes,
  VoteActionCreators
>({
  voteRequest: ['code'],
});
