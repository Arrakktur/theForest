import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../state/user.state";

const user = (state: IAppState) => state.user;

export const userSelector = createSelector(
  user,
  (state: IUserState) => state,
)

