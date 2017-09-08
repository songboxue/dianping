import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo (state = initialState, action){
	switch(action.type){
		case actionTypes.USERINFO_UPDATE:
			// return action.data
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}