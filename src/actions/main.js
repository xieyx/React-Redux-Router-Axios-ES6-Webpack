import request from 'axios'
import * as actionType from '../constant/actionType'
import * as APIType from '../constant/APIType'

export const testFormChange = (data) => {
  return {
    type: actionType.TEST_FORM_CHANGE,
    data,
  }
}

export const testRequest = () => {
  return {
    type: actionType.TEST_REQUEST,
    promise: request.get(APIType.API_DEMO),
  }
}
