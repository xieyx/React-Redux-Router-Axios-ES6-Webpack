import * as actionType from '../constant/actionType'

const initialState = {
  username: { value: '' },
  testButton: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.TEST_FORM_CHANGE: {
      return {
        ...state,
        ...action.data,
        testButton: false,
      }
    }

    case actionType.TEST_REQUEST: {
      console.log(action)
      return state
    }

    default:
      return state
  }
}
