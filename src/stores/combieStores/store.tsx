import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cartReducer";

const allReducer = combineReducers({ cartReducer });

const configStore = () => createStore(allReducer);
export default configStore;
