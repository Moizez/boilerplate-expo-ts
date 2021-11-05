import types from "./types";

export function updateUserRequest(payload: Object) {
    return {
        type: types.USER_UPDATE_REQUEST,
        payload
    }
}

export function updateUserSuccess(payload: Object) {
    return {
        type: types.USER_UPDATE_SUCCESS,
        payload
    }
}

export function updateUserFailure() {
    return { type: types.USER_UPDATE_FAILURE }
}

