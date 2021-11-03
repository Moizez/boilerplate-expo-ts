import produce from "immer";
import types from "./types";
import { TAuth } from '../../../utils/types'

const INITIAL_STATE: TAuth = {
    token: null,
    signed: false,
    loading: false
}

function auth(state = INITIAL_STATE, action: any) {

    return produce(state, draft => {

        switch (action.type) {
            case types.SIGN_IN_REQUEST: {
                draft.loading = true
                break
            }

            case types.SIGN_IN_SUCCESS: {
                draft.token = action.payload.token
                draft.signed = true
                draft.loading = false
                break
            }

            case types.SIGN_UP_REQUEST: {
                draft.loading = true
                break
            }

            case types.SIGN_UP_SUCCESS: {
                draft.token = action.payload.token
                draft.signed = true
                draft.loading = false
                break
            }

            case types.SIGN_IN_FAILURE: {
                draft.loading = false
                break
            }

            case types.SIGN_OUT: {
                draft.token = null
                draft.signed = false
                draft.loading = false
                break
            }

            default:
                break;
        }

    })
}

export default auth