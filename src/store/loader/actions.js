import {noop} from 'lodash';
import {createActions} from 'redux-actions';

export const actions = createActions({
  SET_LOADING: (data) => data,
});
