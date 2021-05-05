import { combineReducers } from "redux";
import {layoutStore} from "./reducers/layout.store";

const RootReducer = combineReducers({
  layoutStore: layoutStore.reducer,
});

export default RootReducer;
