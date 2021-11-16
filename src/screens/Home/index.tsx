import React, { useEffect } from 'react';
import { navigate } from '../../utils/rootNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { signOutRequest } from '../../store/modules/auth/actions'
import { requestActivities } from '../../store/modules/storageless/actions';
import { GlobalState } from '../../utils/types'
import ActionModal, { modalRef as actionModalRef } from '../../components/Modals/ActionModal';

import { Container, Title, Button, ActivityIndicator, Spacer } from '../../styles'

const Home = () => {

    const dispatch = useDispatch()
    const { profile } = useSelector((state: GlobalState) => state.user)
    const { activities, loading } = useSelector((state: GlobalState) => state.storageless)

    const handleLogOut = () => {
        dispatch(signOutRequest())
    }

    const getAct = () => {
        dispatch(requestActivities())
    }

    useEffect(() => {
        getAct()
    }, [])

    return (
        <>
            {loading
                ? <ActivityIndicator />
                : <Container align='center' justify='center' hasPadding>
                    <Title big>{profile?.fullname}</Title>
                    <Button
                        block
                        background='primary'
                        onPress={() => actionModalRef.current.open()}
                    >
                        Sair
                    </Button>

                    <Spacer />

                    <Button
                        block
                        background='dark'
                        onPress={() => navigate('ProfileEdit', { profile })}
                    >
                        Editar Perfil
                    </Button>

                </Container>
            }
            <ActionModal handleAction={handleLogOut} />
        </>
    )
}

export default Home;