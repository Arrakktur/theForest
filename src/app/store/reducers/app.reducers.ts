import { ActionReducerMap } from "@ngrx/store";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import { userReducers } from "./user.reducers";
import {IUserState} from "../state/user.state";
import {INewsState} from "../state/news.state";
import {newsReducers} from "./news.reducers";

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
  news: INewsState[];
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    user: userReducers,
    news: newsReducers,
}
