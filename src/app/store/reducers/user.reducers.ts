import { EUserActions, UserActions } from "../actions/user.action";
import { initialUserState, IUserState } from "../state/user.state";

export const userReducers = (
    state = initialUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUser:
            return state;
        default:
            return state;
    }
}
