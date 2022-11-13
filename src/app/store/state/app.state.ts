import { RouterReducerState } from "@ngrx/router-store";
import { initialUserState, IUserState } from "./user.state";
import {INewsState, initialNewsState} from "./news.state";

export interface IAppState {
    router?: RouterReducerState;
    user: IUserState;
    news: INewsState[];
}

export const initialAppState: IAppState = {
    user: initialUserState,
    news: initialNewsState,
}

/**
 * Начальное состояние приложения
 * @returns {IAppState} Начальное состояние приложения
 */
export function getInitialState(): IAppState {
    return initialAppState;
}
