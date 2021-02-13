import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import {combineReducers} from "redux";

export default combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer
})
