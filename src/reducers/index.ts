import { AppEvents } from "../events";
import { IAction } from "../actions";
import { IAppProfileState } from "../store";

const initialState: IAppProfileState = {
  name: '',
  age: 0,
};

export const reducer = (state: IAppProfileState = initialState, action: IAction): IAppProfileState => {
  switch (action.type) {
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };
    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };
    default:
      return state;
  }
};
