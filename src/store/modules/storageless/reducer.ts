import produce from "immer";
import types from "./types";
import { TStorageless, TActionStorageless } from '../../../utils/types'

const INITIAL_STATE: TStorageless = {
    alert: {
        message: '',
        visible: false
    }
}

function storageless(state = INITIAL_STATE, action: TActionStorageless) {

    return produce(state, draft => {

        switch (action.type) {
            case types.OPEN_ALERT: {
                draft.alert = { message: action.payload.alert.message, visible: true }
                return draft
            }

            case types.CLOSE_ALERT: {
                draft.alert = { message: '', visible: false }
                return draft
            }

            default:
                return draft
        }

    })
}

export default storageless