import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { signOutRequest } from '../../store/modules/auth/actions'
import { requestActivities } from '../../store/modules/storageless/actions';

import { Container, Title, Button } from '../../styles'

const Home = () => {

    const dispatch = useDispatch()
    const { activities } = useSelector(state => state.storageless)

    console.log(activities)

    const logOut = () => {
        dispatch(signOutRequest())
    }

    const getAct = () => {
        dispatch(requestActivities())
    }

    useEffect(() => {
        getAct()
    }, [])

    return (
        <Container align='center' justify='center' hasPadding>
            <Title>HOME</Title>
            <Button
                block
                background='primary'
                onPress={logOut}
            >
                Sair
            </Button>
        </Container>
    )
}

export default Home;