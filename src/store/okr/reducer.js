import {actions as okrActions} from './actions';
import {handleActions} from 'redux-actions';

// Initial State
const INITIAL_STATE = {
  okrList: [],
  filteredList: [],
};

// Redux: Okr Reducer
const okrReducer = handleActions(
  {
    [okrActions.setOkrList](state, {payload}) {
      return {
        ...state,
        okrList: payload,
      };
    },
    [okrActions.getFilteredList](state, {payload}) {
      console.log(payload);
      return {
        ...state,
        filteredList: payload,
      };
    },
  },
  INITIAL_STATE
);

export default okrReducer;
