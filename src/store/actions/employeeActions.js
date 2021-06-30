import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"
import { beginApiCall } from "./apiCallStatusActions"
import { apiCallError } from "./apiCallStatusActions"

export function createEmployeeSuccess(employee) {
  return { type: types.CREATE_EMPLOYEE_SUCCESS, employee }
}

export function updateEmployeeSuccess(employee) {
  return { type: types.UPDATE_EMPLOYEE_SUCCESS, employee }
}

export function loadEmployeesSuccess(employees) {
  return { type: types.LOAD_EMPLOYEES_SUCCESS, employees }
}

export function saveEmployee(employee) {
  return function (dispatch, getState) {
    dispatch(beginApiCall())
    return courseApi
      .saveCourse(employee)
      .then(savedEmployee => {
        employee.id
          ? dispatch(updateEmployeeSuccess(savedEmployee))
          : dispatch(createEmployeeSuccess(savedEmployee))
      })
      .catch(error => {
        dispatch(apiCallError(error))
        throw error
      })
  }
}

export function loadEmployees() {
  return function (dispatch) {
    dispatch(beginApiCall())
    return courseApi
      .getCourses()
      .then(employees => {
        dispatch(loadEmployeesSuccess(employees))
      })
      .catch(error => {
        dispatch(apiCallError(error))
        throw error
      })
  }
}
