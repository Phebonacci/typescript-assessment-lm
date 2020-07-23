import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

export interface IAppProfileState {
  name: string,
  age: number,
}

export interface IAppState {
  app: IAppProfileState,
}

const reducers = combineReducers({
  app: AppReducer,
});

export const store = createStore(reducers);
