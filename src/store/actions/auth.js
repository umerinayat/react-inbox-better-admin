import AuthService from '../../api-services/authService'
import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE } from '../types/index'

export const login = (params, history) => dispatch => {
    return AuthService.login(params)
        .then(data => {
            dispatch({ type: LOGIN, payload: data })
            history.push('/dashboard')
        })
        .catch(err => {
            debugger
            throw err
        })
}

export const register = (params, history) => dispatch => {
    return AuthService.register(params)
        .then(data => {
            dispatch({ type: REGISTER, payload: data })
            history.push('/')
        })
        .catch(err => {

        })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: LOGOUT })
}

export const updateProfile = (params) => dispatch => {
    return AuthService.updateProfile(params)
        .then(data => {
            dispatch({ type: UPDATE_PROFILE, payload: data })
        })
        .catch(err => {
            throw err
        })
}