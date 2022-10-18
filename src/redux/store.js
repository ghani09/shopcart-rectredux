import { legacy_createStore ,combineReducers ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import laptopReducer from "./reducers/laptopReducer";
import mobileReducer from "./reducers/mobileReducer";
import { fetchReducer } from "./reducers/fetchusersReducer";
const rootReducer = combineReducers({laptop:laptopReducer , mobile:mobileReducer , user:fetchReducer})
const store = legacy_createStore(rootReducer ,applyMiddleware(thunk , logger));


export default store;