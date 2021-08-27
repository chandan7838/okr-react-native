import {noop} from 'lodash';
import {createActions} from 'redux-actions';

export const actions = createActions({
  GET_ISSUES_LIST: (noop) => noop,
  GET_ISSUE_DETAIL: (data) => ({data}),
  SET_ISSUES_LIST: (data) => ({data}),
  SET_ISSUE_DETAIL: (data) => ({data}),
});
