const types: Test = {
    SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',

    SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
    SIGN_UP_SUCCESS: '@auth/SIGN_UP_SUCCESS',

    SIGN_IN_FAILURE: '@auth/SIGN_IN_FAILURE',
    SIGN_OUT: '@auth/SIGN_OUT'
}
interface Test {
    SIGN_IN_REQUEST: string,
    SIGN_IN_SUCCESS: string
    SIGN_UP_REQUEST: string,
    SIGN_UP_SUCCESS: string,
    SIGN_IN_FAILURE: string,
    SIGN_OUT: string
}
export default types