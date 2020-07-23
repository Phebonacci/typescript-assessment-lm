import { AppEvents } from "../events";

export interface IAction {
  type: AppEvents,
  payload: any,
}

const Action = <P>(type: AppEvents) => (payload: P): IAction => {
  return { type, payload };
}

export const SetName = Action<string>(AppEvents.SET_NAME);
export const SetAge = Action<number>(AppEvents.SET_AGE);
