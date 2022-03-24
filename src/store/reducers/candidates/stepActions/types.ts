import { AnyAction } from 'redux';

export type SetStepActionTypes = {
  SET_STEP: string;
};

export type SetStepActionCreators = {
  setStep(step: number): AnyAction;
};
