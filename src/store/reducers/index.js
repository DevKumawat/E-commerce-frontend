import { combineReducers } from "redux";
import addToCartReducer from "./reducer";
import userReducer from "./userReducer";



const rootReducer = combineReducers({
    cart: addToCartReducer,
    user: userReducer,
});
export default rootReducer;