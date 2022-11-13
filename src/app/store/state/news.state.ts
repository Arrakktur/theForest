import {INews} from "../../interfaces/news.interface";
import {IUserState} from "./user.state";

export interface INewsState extends INews {}

export const initialNewsState: INewsState[] = [
  {
      title: 'Заголовок новости',
      description: 'Описание новости',
      date: '13.11.2022',
  },
  {
    title: 'Заголовок новости 2',
    description: 'Описание новости 2',
    date: '14.11.2022',
  }
];
