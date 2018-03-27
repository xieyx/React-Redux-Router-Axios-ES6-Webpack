import * as actionType from '../constant/actionType';

const initialState = {
    username: {'value': ''},
    testButton: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.TEST_FORM_CHANGE:
            const testFormField = Object.keys(action.data)[0];
            return {
                ...state,
                username: action.data[testFormField],
                testButton: false
            }

        default:
            return state;
    }
}