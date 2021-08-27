import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import {actions as issueActions} from './actions';

function* getIssuesListRequest() {
  try {
    // Dispatch Action To Redux Store
    const response = yield fetch(
      'https://api.github.com/repos/facebook/react/issues'
    ).then((response) => response.json());

    yield put(issueActions.setIssuesList(response));
  } catch (error) {
    console.log(error);
  }
}

function* getIssueDetailRequest({payload}) {
  try {
    // Dispatch Action To Redux Store
    const response = yield fetch(
      'https://api.github.com/repos/facebook/react/issues/' + payload.data
    ).then((response) => response.json());
    yield put(issueActions.setIssueDetail(response));
  } catch (error) {
    console.log(error);
  }
}

export function* watchIssues() {
  yield takeLatest(issueActions.getIssuesList, getIssuesListRequest);
  yield takeLatest(issueActions.getIssueDetail, getIssueDetailRequest);
}
