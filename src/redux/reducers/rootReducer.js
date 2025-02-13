import {combineReducers} from "redux";
import countReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: countReducer,
});

export default rootReducer;
