import * as actionTypes from '../constants/config'

export default function collection (state = [], action){
	let newstate = [];
	switch(action.type){
		case actionTypes.COLLECTION_ADD:
			newstate = state.concat(action.data)
			return newstate;
		case actionTypes.COLLECTION_DELETE:			
			let index = state.indexOf(action.data);			
			if (index > -1){
				let tempa = state.slice(0,index),
					tempb = state.slice(index+1);
				newstate = tempa.concat(tempb);
			}
			return newstate;
		default:
			return state
	}
}