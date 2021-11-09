import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import { Alert } from 'react-native'
import api from '../../../services/api'
import types from './types'

import { updateUserSuccess, updateUserFailure } from './actions'

export function* updateUser({ payload }) {
    try {

    } catch (error) {

    }
}


export default all([
    //@ts-ignore
    takeLatest(types.USER_UPDATE_REQUEST, updateUser)
])