import { combineReducers } from "redux";
import auth from "./auth/reducer";
import register from "./register/reducer";
import profile from "./profile/reducer";

export default combineReducers({
    auth,
    register,
    profile
})