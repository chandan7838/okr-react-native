import {noop} from 'lodash';
import {createActions} from 'redux-actions';

export const actions = createActions({
  GET_OKR_LIST: (noop) => noop,
  SET_OKR_LIST: (data) => data,
  GET_FILTERED_LIST: (data) => data,
});
