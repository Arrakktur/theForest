import {IMenuItem, IMenuTab} from "../interfaces/menu.interface";

export const MENU_ITEMS: IMenuItem[] = [
  {
    text: 'Главная',
    link: 'home',
  },
  {
    text: 'Деревья',
    link: 'forests',
  },
  {
    text: 'Помощь',
    link: 'support',
  },
];

export const MENU_PROFILE: IMenuTab[] = [{
  text: 'Профиль',
  label: 'profile',
},
  {
    text: 'Безопасность',
    label: 'secure',
  }]
