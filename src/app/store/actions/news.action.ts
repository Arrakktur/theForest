import { Action } from "@ngrx/store"

/**
 * Типы действий
 */
export enum ENewsActions {
  GetNews = `[NEWS] Get News`,
}

/**
 * Действие получения списка новостейы
 */
export class GetNews implements Action {
  public readonly type = ENewsActions.GetNews;
}

export type NewsActions = GetNews;
