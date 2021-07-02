import { combineReducers } from 'redux'

import {
   languageReducer
} from './user'
export default combineReducers({
   // userRegister: registerReducer,
   userLang:languageReducer
})