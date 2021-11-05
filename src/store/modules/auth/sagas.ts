import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import api from '../../../services/api'
import types from './types'

import { signInFailure, signInSuccess } from './actions'

export function* signIn({ payload }) {

    //console.log('PAYLOAD: ', payload)

    try {

        const { email, password } = payload
        const response = yield call(api.post, '/login', { email, password })
        const { token, user } = response.data

        //console.log('DATA: ', response.data)

        if (!token) {
            yield put(signInFailure());
        } else {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            //yield call(() => AsyncStorage.setItem('@user', JSON.stringify(user)))
            yield put(signInSuccess(token, user));
        }

    } catch (error) {
        Alert.alert('Falha na autenticação.');
        console.log(`Erro: ${error}`)
    }
}

export function setToken(payload) {

    if (!payload) return;

    const { token } = payload?.auth || payload?.token;
    console.log("TOKEN", token)
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        return;
    }
}




export default all([
    takeLatest(types.SIGN_IN_REQUEST, signIn)
])