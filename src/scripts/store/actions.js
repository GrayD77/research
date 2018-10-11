'use strict';

import { FIRST_NAME_CHANGE, SECOND_NAME_CHANGE } from '../common/constants';

export const changeFirstName = (name) => {
    return {
        type: FIRST_NAME_CHANGE,
        payload: name
    }
}

export const changeSecondName = (name) => {
    return {
        type: SECOND_NAME_CHANGE,
        payload: name
    }
}