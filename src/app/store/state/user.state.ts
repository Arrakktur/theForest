import { IUser } from "src/app/interfaces/user.interface";

export interface IUserState extends IUser {}

export const initialUserState: IUserState = {
    id: 1,
    name: 'test name',
    login: 'login',
    token: 'asd',
}
