import { TActionStorageless, TStorageless } from "../../../utils/types";
import types from "./types";

export function setReducer(payload: TStorageless, key: string): TActionStorageless {
    return {
        type: types.SET_REDUCER,
        payload,
        key
    }
}

export function openAlert(message: string): TActionStorageless {
    return {
        type: types.OPEN_ALERT,
        payload: {
            alert: {
                message: message
            }
        }
    }
}

export function closeAlert() {
    return { type: types.CLOSE_ALERT }
}

export function requestActivities() {
    return { type: types.GET_ACTIVITIES }
}



