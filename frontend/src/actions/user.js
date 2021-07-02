import axios from 'axios'
import {
     USER_LANG_REQUEST,
    USER_LANG_SUCCESS,
    USER_LANG_FAIL
} from '../constants/user'
export const getLangs = () => async dispatch => {
    try {
        dispatch({
            type: USER_LANG_REQUEST
        })
        const { data } = await axios.get(`http://localhost:8000/api/langs`)
        dispatch({ type: USER_LANG_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_LANG_FAIL,
            payload:  error.response
        })
    }

}
