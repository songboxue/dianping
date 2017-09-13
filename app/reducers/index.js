import { combineReducers } from 'redux'
import userinfo from './userinfo'
import collection from './collection'

export default combineReducers({
	userinfo,
	collection
})