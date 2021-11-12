import types from "./types";

export function signInRequest(payload: any) {
    return {
        type: types.SIGN_IN_REQUEST,
        payload: {
            email: payload.email,
            password: payload.password
        }
    }
}

export function signInSuccess(token: string, user: Object) {
    return {
        type: types.SIGN_IN_SUCCESS,
        payload: { token, user }
    }
}

export function signUpRequest(payload: any) {
    return { type: types.SIGN_UP_REQUEST, payload }
}

export function signInFailure() {
    return { type: types.SIGN_IN_FAILURE };
}

export function signOutRequest() {
    return { type: types.SIGN_OUT }
}

export function onboardRequest() {
    return { type: types.ONBOARD }
}

