import request from 'axios'
import * as actionType from '../constant/actionType'
import * as APIType from '../constant/APIType'

export const loginFormChange = (data) => {
  return {
    type: actionType.LOGIN_FORM_CHANGE,
    data,
  }
}

export const login = () => {
  return {
    type: actionType.LOGIN,
    promise: request.get(APIType.API_LOGIN),
  }
}

export const logout = () => {
  return {
    type: actionType.LOGOUT,
    promise: request.get(APIType.API_LOGOUT),
  }
}

export const getUserInfo = () => {
  return {
    type: actionType.GET_USER_INFO,
    promise: request.get(APIType.API_GET_USER_INFO),
  }
}
