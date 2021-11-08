import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { signInScheme } from '../../schemas/formSchema'
import { signInRequest } from '../../store/modules/auth/actions'
import { colors } from '../../styles/theme.json'
import { GlobalState } from '../../utils/types'
import { navigate } from '../../utils/rootNavigation'
import { closeAlert } from '../../store/modules/storageless/actions'
import { Keyboard } from 'react-native'

import {
    Container, ContainerKeyboardAvoiding, Title, Text, TextInput,
    Button, Spacer, HelperText, Snackbar, Touchable
} from '../../styles';

const SignIn = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector((state: GlobalState) => state.auth)
    const { alert: { message, visible } } = useSelector((state: GlobalState) => state.storageless)
    const [eye, setEye] = useState(false)

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: signInScheme,
        onSubmit: async (values) => {
            Keyboard.dismiss()
            dispatch(signInRequest(values))
        }
    })

    return (
        <Container background='light'>

            <Container align='center' justify='center'>
                <Title color='secondary'>Boilerplate React Native</Title>
                <Text>App de exemplo para novos projetos</Text>

            </Container>

            <ContainerKeyboardAvoiding hasPadding>

                <TextInput
                    label='Seu e-mail'
                    placeholder='Digite seu e-mail'
                    placeholderTextColor={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    //@ts-ignore
                    error={formik.touched.email && formik.errors.email}
                    right={
                        <TextInput.Icon
                            color={formik.touched.password && formik.errors.email ? colors.danger : colors.secondary}
                            name='email'
                            style={{ marginTop: 15 }}
                        />
                    }
                />
                {formik.touched.email && formik.errors.email &&
                    <HelperText>
                        {formik.touched.email && formik.errors.email}
                    </HelperText>
                }

                <Spacer />

                <TextInput
                    label='Sua senha'
                    placeholder='Digite sua senha'
                    placeholderTextColor={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                    secureTextEntry={eye ? false : true}
                    autoCapitalize='none'
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    //@ts-ignore
                    error={formik.touched.password && formik.errors.password}
                    right={
                        <TextInput.Icon
                            color={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                            name={eye ? 'eye-off' : 'eye'}
                            onPress={() => setEye(!eye)}
                            style={{ marginTop: 15 }}
                        />
                    }
                />
                {formik.touched.password && formik.errors.password &&
                    <HelperText type="error">
                        {formik.touched.password && formik.errors.password}
                    </HelperText>
                }

                <Spacer size={20} />

                <Button
                    block
                    background='secondary'
                    onPress={formik.handleSubmit}
                    loading={loading}
                >
                    Entrar
                </Button>

                <Touchable
                    onPress={() => navigate('SignUp')}
                    align='center'
                    justify='center'
                >
                    <Text>Cadastre-se aqui</Text>
                </Touchable>

            </ContainerKeyboardAvoiding>

            <Snackbar
                visible={visible}
                onDismiss={() => dispatch(closeAlert())}
                background='#f00'
                time={3000}
            >
                {message}
            </Snackbar>

        </Container>

    )
}

export default SignIn;