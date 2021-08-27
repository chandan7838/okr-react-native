import {combineReducers} from 'redux';
import issuesReducer from './issues/reducer';

const rootReducer = combineReducers({
  issues: issuesReducer,
});

export default rootReducer;
