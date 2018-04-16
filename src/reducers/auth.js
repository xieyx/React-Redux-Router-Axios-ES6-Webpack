import * as actionType from '../constant/actionType'

const initialState = {
  isAuthenticated: false,
  authing: true,
  userInfo: {},
  username: { value: '' },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_FORM_CHANGE: {
      return {
        ...state,
        ...action.data,
      }
    }

    case actionType.GET_USER_INFO: {
      console.log(action.res.data)
      return {
        ...state,
        userInfo: { ...action.res.data.data },
        isAuthenticated: true,
        authing: false,
      }
    }

    case actionType.LOGIN: {
      console.log(action.res.data)
      return {
        ...state,
        isAuthenticated: true,
      }
    }

    case actionType.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
      }
    }

    default:
      return state
  }
}
