import { Alert } from 'react-native';
import { Action } from 'redux';
import { put, select, takeLatest } from 'redux-saga/effects';
import { getState } from '../../../utils';
import { RootState } from '../../reducers';
import {
  GetCandidateCreators,
  GetCandidateTypes,
} from '../../reducers/candidates';

type getCandidateActionType = Action & {
  code: string;
};

function* getCandidateRequest({ code }: getCandidateActionType) {
  try {
    const { candidates }: RootState = yield select(getState);

    const step = candidates.getIn(['step']);

    const allCandidatesList = candidates.getIn(['candidatesList']);

    const candidateList = allCandidatesList.find(item => item.id === step + 1);

    const candidate = candidateList?.candidates.find(
      item => String(item.code) === code,
    );

    if (candidate) {
      yield put(GetCandidateCreators.getCandidateSuccess(candidate));
    } else {
      throw 'Nenhum candidato Encontrado';
    }
  } catch (error) {
    yield put(GetCandidateCreators.getCandidateFailed());

    Alert.alert(error);
  }
}

export default function* watch() {
  yield takeLatest(
    GetCandidateTypes.GET_CANDIDATE_REQUEST,
    getCandidateRequest,
  );
}
