import {INewsState, initialNewsState} from "../state/news.state";
import {ENewsActions, NewsActions} from "../actions/news.action";

export const newsReducers = (
  state = initialNewsState,
  action: NewsActions
): INewsState[] => {
  switch (action.type) {
    case ENewsActions.GetNews:
      return state;
    default:
      return state;
  }
}
