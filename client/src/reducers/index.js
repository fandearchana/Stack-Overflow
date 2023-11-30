import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth'
import currentUserReducer from './currentUser.js';
import questionsReducer from './questions.js'
import userReducer  from './Users.js';

export default combineReducers({authReducer,currentUserReducer, questionsReducer, userReducer})

