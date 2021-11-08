import { TActionStorageless, TStorageless } from "../../../utils/types";
import types from "./types";

export function openAlert(message: string): TActionStorageless{
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

