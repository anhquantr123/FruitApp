import { createStore, combineReducers } from "redux";
import appReducer from "../reducers/appReducer";
import cartReducer from "../reducers/cartReducer";

const allReducer = combineReducers({ cartReducer, appReducer });

const configStore = () => createStore(allReducer);
export default configStore;
