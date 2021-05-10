import { combineReducers } from "redux";
import { layoutStore } from "./reducers/layout.store";
import { boardStore } from "./reducers/board.store";

const RootReducer = combineReducers({
  layoutStore: layoutStore.reducer,
  boardStore: boardStore.reducer
});

export default RootReducer;
