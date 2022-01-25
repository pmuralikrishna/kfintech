import {combineReducers} from 'redux'
import {combineEpics} from 'redux-observable';
import usersSlice, { fetchUsersEpic } from './slices/usersSlice';


export const rootEpic = combineEpics(
    fetchUsersEpic,)


export const rootReducer = combineReducers({
    users:usersSlice,

})