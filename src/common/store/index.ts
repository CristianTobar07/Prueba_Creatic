import { combineReducers } from "redux";
import Auth from "./slices/auth";

export default combineReducers({
  auth: Auth,
});
