import { DATA } from "../data"

const POST_ACTION = 'POST_ACTION'
const TOGGLE_BOOKED = 'TOGGLE_BOOKED'
const REMOVE_POST = 'REMOVE_POST'


const initialState = {
	allPosts: [],
	bookedPosts: [],
}


export const PostReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_ACTION: {
			return {
				...state,
				allPosts: action.payload,
				bookedPosts: action.payload.filter(p => p.booked)
			}
		}

		case TOGGLE_BOOKED:
			const allPosts = state.allPosts.map(p => {
				if (p.id === action.payload) {
					p.booked = !p.booked
				}
			})
			return {
				...state,
				allPosts,
				bookedPosts:  allPosts.filter(p => p.booked)
			}
		case REMOVE_POST:
			return {
				...state,
				allPosts: state.allPosts.filter(p => p.id != action.payload),
				bookedPosts: state.bookedPosts.filter(p => p.id != action.payload)
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
export const ToogleBooked = id => {
	return {
		type: TOGGLE_BOOKED, payload: id,
	}
}
export const removePost = id => {
	return {
		type: REMOVE_POST, payload: id,
	}
}