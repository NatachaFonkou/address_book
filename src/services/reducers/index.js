import { combineReducers } from "redux";
import { contactReducer } from "./contact.reducer";
import { userReducer } from "./user.reducer";

export default combineReducers({
    contactReducer,
    userReducer
});