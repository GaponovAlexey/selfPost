import { DATA } from "../data"

const POST_ACTION = 'POST_ACTION'

const initialState = {
	allPosts: [],
	bookedPosts: [],
}


export const PostReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case POST_ACTION: {
			return {
				...state,
				allPosts: action.payload,
				bookedPosts: action.payload.filter(p => p.booked)
			}
		}
		default:
			return state
	}
}



export const ActionPost = () => {
	return {
		type: POST_ACTION, payload: DATA
	}
}