import produce from "immer";
import types from "../../types";

const INITIAL_STATE = {
    user: {},
    userForm: {},
    form: {
        disabled: false,
        loading: false,
        saving: false
    }
}

function user(state = INITIAL_STATE, action: any) {

    return produce(state, draft => {

        switch (action.type) {
            case types.SET_REDUCER: {
                return draft[action.key] = action.payload
            }

            case types.SET_USER: {
                return draft.userForm = { ...state.userForm, ...action.payload }
            }

            case types.SET_FORM: {
                return draft.form = { ...state.form, ...action.payload }
            }

            case types.RESET: {
                return draft[action.key] = INITIAL_STATE[action.key]
            }

            default:
                break;
        }

    })
}

export default user