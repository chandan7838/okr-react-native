import {actions as issuesActions} from './actions';
import {handleActions} from 'redux-actions';

// Initial State
const INITIAL_STATE = {
  issuesList: [],
  issuesDetail: {},
};

// Redux: Counter Reducer
const counterReducer = handleActions(
  {
    [issuesActions.setIssuesList](state, {payload}) {
      return {
        ...state,
        issuesList: payload,
      };
    },
    [issuesActions.setIssueDetail](state, {payload}) {
      return {
        ...state,
        issuesDetail: payload,
      };
    },
  },
  INITIAL_STATE
);

export default counterReducer;
