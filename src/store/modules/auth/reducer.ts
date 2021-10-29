import produce from "immer";
import types from "../../types";

const INITIAL_STATE = {
    user: {},
    isLoggedIn: false
}

function auth(state = INITIAL_STATE, action: any) {

    return produce(state, draft => {

        switch (action.type) {
            case types.SIGNIN_USER: {
                return draft[action.key] = action.payload
            }

            case types.SIGN_OUT: {
                return { ...state, isLoggedIn: false, user: null };
            }

            default:
                break;
        }

    })
}

export default auth