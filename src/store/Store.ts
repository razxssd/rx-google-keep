import thunk from "redux-thunk";
import RootReducer from "./RootReducers";
import { configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';

/**
 * @description to fix enableES5 error. if necessary after this import : npm rebuild node-sass && npm start
 * @link https://github.com/reduxjs/redux-toolkit/issues/476
 */
import { enableES5 } from 'immer';
enableES5();

export type RootState = ReturnType<typeof RootReducer>

export const Store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: [...getDefaultMiddleware(), thunk],
});

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
