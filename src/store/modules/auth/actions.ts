import types from "./types";

export function signInRequest(payload: any) {
    return {
        type: types.SIGN_IN_REQUEST,
        payload
    }
}

export function signInSuccess(payload: any) {
    return {
        type: types.SIGN_IN_SUCCESS,
        payload
    }
}

export function signUpRequest(payload: any) {
    return {
        type: types.SIGN_UP_REQUEST,
        payload
    }
}

export function signInFailure() {
    return { type: types.SIGN_IN_FAILURE };
}

export function signOutRequest() {
    return { type: types.SIGN_OUT }
}

