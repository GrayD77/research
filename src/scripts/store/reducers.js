'use strict';

import { FIRST_NAME_CHANGE, SECOND_NAME_CHANGE } from '../common/constants';

const initialState = {
    firstName: 'Siarhei',
    secondName: 'Drahichynski'
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRST_NAME_CHANGE:
            return Object.assign({}, state, {firstName: action.payload});
        case SECOND_NAME_CHANGE:
            return Object.assign({}, state, {secondName: action.payload});
        default:; 
    }

    return state;
}