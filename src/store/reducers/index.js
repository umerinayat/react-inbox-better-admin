import { combineReducers } from 'redux';

import apiCallsInProgress from './apiCallStatusReducer';
import authReducer from './auth';


const rootReducer = combineReducers({
    authReducer,
    apiCallsInProgress
});

export default rootReducer;