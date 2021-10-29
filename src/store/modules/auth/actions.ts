import types from "../../types";

export function signInRequest() {
    return { type: types.SIGNIN_USER }
}

export function signOutRequest() {
    return { type: types.SIGN_OUT }
}

