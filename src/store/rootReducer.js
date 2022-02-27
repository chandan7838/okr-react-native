import {combineReducers} from 'redux';
import okrReducer from './okr/reducer';
import loaderReducer from './loader/reducer';

const rootReducer = combineReducers({
  okr: okrReducer,
  loader: loaderReducer,
});

export default rootReducer;
