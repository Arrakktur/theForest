import { IUser } from "src/app/interfaces/user.interface";

export interface IUserState extends IUser {}

export const initialUserState: IUserState = {
    id: null,
    name: 'test name',
    login: null,
    token: 'asd',
}
