import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import {signOutRequest} from '../../store/modules/auth/actions'

import { Container, Title, Button } from '../../styles'

const Home = () => {

    const dispatch = useDispatch()

    const logOut = async () => {
        dispatch(signOutRequest())
    }

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