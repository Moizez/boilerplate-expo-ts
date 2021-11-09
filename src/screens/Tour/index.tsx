import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { replace } from '../../utils/rootNavigation';
import { onboardRequest } from '../../store/modules/auth/actions';
import { tourData } from '../../utils/tourData'

import { Container, Title, Button, Spacer, Text } from '../../styles';

const Tour = () => {

    const dispatch = useDispatch()
    const [currentTour, setCurrentTour] = useState(0)

    const goToSignIn = () => {
        dispatch(onboardRequest())
        replace('SignIn')
    }

    return (
        <Container background='danger' align='center' justify='center' hasPadding>
            <Container border={1} borderColor='#fff' align='center' justify='center'>
                <Title color='light'>Imagem aqui</Title>
            </Container>
            <Spacer size={50} />
            <Text color={tourData[currentTour]?.descColor} align='center'>{tourData[currentTour]?.desc}</Text>
            <Spacer size={50} />
            <Container row justify='space-between' align='flex-end'>
                {currentTour > 0 &&
                    <Button
                        onPress={() => setCurrentTour(currentTour - 1)}
                        background={tourData[currentTour]?.button}
                    >
                        {currentTour < tourData.length ? 'Voltar' : 'Próximo'}
                    </Button>
                }

                <Button
                    onPress={() => {
                        if (currentTour === 2) {
                            goToSignIn()
                        } else {
                            setCurrentTour(currentTour + 1)
                        }
                    }}
                    background={tourData[currentTour]?.button}
                >
                    {currentTour === 2 ? 'Começar' : 'Próximo'}
                </Button>
            </Container>
        </Container>
    )
}

export default Tour;