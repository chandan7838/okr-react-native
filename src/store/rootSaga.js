import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {watchOkr} from './okr/sagas';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(watchOkr)]);
}
