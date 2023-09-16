import { combineReducers } from "redux";
import titleReduser from "./titleReduser";
import userReduser from "./userReduser";
import deleteReduser from "./deleteReduser"

export const rootReduser=combineReducers({
    title:titleReduser,
    user:userReduser,
    delete:deleteReduser,
})