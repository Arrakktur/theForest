import {RouterReducerState} from "@ngrx/router-store";
import {IUserState} from "../store/state/user.state";

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
}
