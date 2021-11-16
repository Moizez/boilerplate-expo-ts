import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import { openAlert } from '../storageless/actions'
import api from '../../../services/api'
import types from './types'

import { updateUserSuccess, updateUserFailure } from './actions'

export function* updateUser({ payload }) {

    try {

        const data = new FormData()
        data.append('name', payload.name)
        data.append('job', null)
        data.append('profile_picture', {
            uri: payload.uri,
            type: 'image/jpg',
            name: 'teste-app'
        })

        const response = yield call(api.post, `employees/${payload.id}/update`, data, {
            headers: {
                //Authorization: `Bearer ${payload.token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        if (response.status == 200) {
            yield put(updateUserSuccess(response.data));
        }else{
            //@ts-ignore
            yield put(openAlert('Falha ao atualizar usuário!'))
            yield put(updateUserFailure());
        }


    } catch (error) {
        yield put(updateUserFailure());
        //@ts-ignore
        yield put(openAlert(`Erro: ${error}`))
        console.log(`Erro: ${error}`)
    }
}


export default all([
    //@ts-ignore
    takeLatest(types.USER_UPDATE_REQUEST, updateUser)
])