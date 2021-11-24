import { combineReducers } from "redux";
import Todos from "./todoReducer";
import Users from "./userReducer";

export default combineReducers({
   Todos,
   Users
});
