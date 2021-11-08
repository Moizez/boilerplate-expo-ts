import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import api from '../../../services/api'
import types from './types'

import { signInFailure, signInSuccess } from './actions'
import { openAlert } from '../storageless/actions'

export function* signIn({ payload }) {

    //console.log('PAYLOAD: ', payload)

    try {

        const { email, password } = payload
        const response = yield call(api.post, '/login', { email, password })
        const { token, user } = response.data

        //console.log('DATA: ', response.data)

        if (!token) {
            yield put(openAlert('Token não identificado!'))
            yield put(signInFailure());
        } else {
            //@ts-ignore
            api.defaults.headers.Authorization = `Bearer ${token}`;
            yield put(signInSuccess(token, user));
        }

    } catch (error) {
        yield put(signInFailure());
        yield put(openAlert(`Erro: ${error}`))
        console.log(`Erro: ${error}`)
    }
}

export function setToken(payload) {

    if (!payload) return;

    const { token } = payload?.auth || payload?.token;
    console.log("TOKEN", token)
    if (token) {
        //@ts-ignore
        api.defaults.headers.Authorization = `Bearer ${token}`;
        return;
    }
}


export default all([
    //@ts-ignore
    takeLatest(types.SIGN_IN_REQUEST, signIn)
])