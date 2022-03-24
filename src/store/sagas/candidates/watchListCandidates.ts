import { put, takeLatest } from 'redux-saga/effects';
import { candidates } from '../../../utils/candidates';
import {
  ListCandidatesCreators,
  ListCandidatesTypes,
} from '../../reducers/candidates';

function* listCandidatesRequest() {
  try {
    yield put(ListCandidatesCreators.listCandidatesSuccess(candidates));
  } catch (error) {
    yield put(ListCandidatesCreators.listCandidatesFailed());
  }
}

export default function* watch() {
  yield takeLatest(
    ListCandidatesTypes.LIST_CANDIDATES_REQUEST,
    listCandidatesRequest,
  );
}
