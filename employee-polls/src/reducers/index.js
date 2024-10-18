import { combineReducers } from 'redux'

import login from './login';
import user from './user';
import loading from './loading';
import questions from './question';


export default combineReducers({
    user,
    login,
    loading,
    questions
})