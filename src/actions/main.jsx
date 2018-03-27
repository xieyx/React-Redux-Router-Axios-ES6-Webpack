import request from 'axios';
import * as actionType from '../constant/actionType';
import * as APIType from '../constant/APIType';

export const testFormChange = (data) => {
    return {
        type: actionType.TEST_FORM_CHANGE,
        data: data
    }
}