import { combineReducers } from 'redux';

// import employees from './employeeReducer';
// import departments from './departmentReducer';
import apiCallsInProgress from './apiCallStatusReducer';



const rootReducer = combineReducers({
    // employees,
    // departments,
    apiCallsInProgress
});

export default rootReducer;