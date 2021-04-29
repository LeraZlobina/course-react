import { combineReducers } from "redux";
import auth from "./auth/reducer";
import register from "./register/reducer";
import profile from "./profile/reducer";
import addressList from "./addressList/reducer";
import coordinates from "./route/reducer";

export default combineReducers({
    auth,
    register,
    profile,
    addressList,
    coordinates
})