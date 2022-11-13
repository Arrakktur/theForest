import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {INewsState} from "../state/news.state";

const news = (state: IAppState) => state.news;

export const newsSelector = createSelector(
  news,
  (state: INewsState[]) => state,
)
