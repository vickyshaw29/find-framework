import {
    USER_LANG_REQUEST,
    USER_LANG_SUCCESS,
    USER_LANG_FAIL
} from '../constants/user'
export const languageReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LANG_REQUEST:
            return { loading: true }
        case USER_LANG_SUCCESS:
            return { loading: false, success: true, language: action.payload }
        case USER_LANG_FAIL:
            return { loading: false, error: action.payload }
        default: return state
    }
}

