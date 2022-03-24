import { Action } from 'redux';
import { INITIAL_STATE_CANDIDATES } from '../reducer';

type SetStepActionType = Action & {
  step: number;
};

export const setStep = (
  state = INITIAL_STATE_CANDIDATES,
  { step }: SetStepActionType,
) => state.set('step', step);
