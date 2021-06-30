import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall } from './apiCallStatusActions';
import { apiCallError } from './apiCallStatusActions';


export function loadDepartmentsSuccess(departments) {
  return { type: types.LOAD_DEPARTMENTS_SUCCESS, departments };
}

export function loadDepartments() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return authorApi.getAuthors().then(departments => {
      dispatch(loadDepartmentsSuccess(departments));
    }).catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
  }
}