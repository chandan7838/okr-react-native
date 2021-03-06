import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './rootReducer';

// Imports: Redux Root Saga
import {rootSaga} from './rootSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {store};
