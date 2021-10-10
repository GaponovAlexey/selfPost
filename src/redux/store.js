import { createStore, combineReducers } from "redux";
import { PostReducer } from "./PostReducer";

const RootReducer = combineReducers({
	post: PostReducer
})

export default createStore(RootReducer)