import { Action } from "@ngrx/store"
import { IUser } from "src/app/interfaces/user.interface";

/**
 * Типы действий
 */
export enum EUserActions {
    GetUser = `[USER] Get User`,
}

/**
 * Действие получения пользователя
 */
export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
}

export type UserActions = GetUser;
