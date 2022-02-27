import {put, takeLatest} from 'redux-saga/effects';
import {actions as okrActions} from './actions';
import {actions as loaderActions} from '../loader/actions';

function* getOkrListRequest() {
  try {
    yield put(loaderActions.setLoading(true));
    const response = yield fetch(
      'https://okrcentral.github.io/sample-okrs/db.json'
    ).then((response) => response.json());
    yield put(loaderActions.setLoading(false));
    let map = new Map();
    let parentOkr = [];
    for (let i = 0; i < response?.data?.length; i++) {
      if (response.data[i].parent_objective_id === '') {
        parentOkr.push(response.data[i]);
        map.set(response.data[i].id, []);
      } else if (map.has(response.data[i].parent_objective_id)) {
        let subOkr = map.get(response.data[i].parent_objective_id);
        subOkr.push(response.data[i]);
      }
    }

    for (const [key, value] of map.entries()) {
      let index = parentOkr.findIndex((data) => data.id === key);
      parentOkr[index]['subOkr'] = value;
    }

    yield put(okrActions.setOkrList(parentOkr));
  } catch (error) {
    console.log(error);
  }
}

export function* watchOkr() {
  yield takeLatest(okrActions.getOkrList, getOkrListRequest);
}
