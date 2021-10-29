import types from "../../types";

export function signInUser() {
    return { type: types.SIGNIN_USER }
}

export function setUser(payload: Object) {
    return { type: types.SET_USER, payload }
}

export function setForm(payload: Object) {
    return { type: types.SET_FORM, payload };
}

export function reset(key: String) {
    return { type: types.RESET, key }
}