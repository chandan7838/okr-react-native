import {actions as loaderActions} from './actions';
import {handleActions} from 'redux-actions';

// Initial State
const INITIAL_STATE = {
  isLoading: false,
};

// Redux: Loader Reducer
const loaderReducer = handleActions(
  {
    [loaderActions.setLoading](state, {payload}) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
  INITIAL_STATE
);

export default loaderReducer;
