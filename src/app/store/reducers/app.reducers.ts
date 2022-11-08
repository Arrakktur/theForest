import { ActionReducerMap } from "@ngrx/store";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import { userReducers } from "./user.reducers";
import {IUserState} from "../state/user.state";

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    user: userReducers,
}
