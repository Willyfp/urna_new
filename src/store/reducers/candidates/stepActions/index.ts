import { createActions } from 'reduxsauce';
import { setStep } from './handlers';
import { SetStepActionCreators, SetStepActionTypes } from './types';

export const { Types, Creators } = createActions<
  SetStepActionTypes,
  SetStepActionCreators
>({
  setStep: ['step'],
});

export const stepActions = {
  [Types.SET_STEP]: setStep,
};
