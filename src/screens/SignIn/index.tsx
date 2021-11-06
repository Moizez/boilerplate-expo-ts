import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import { signInScheme } from '../../schemas/formSchema'
import { signInRequest } from '../../store/modules/auth/actions'
import { colors } from '../../styles/theme.json'
import { TUser, GlobalState } from '../../utils/types'

import { Container, ContainerKeyboardAvoiding, Title, Text, TextInput, Button, Spacer, HelperText } from '../../styles';

const SignIn = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector((state: GlobalState) => state.auth)
    const { user } = useSelector((state: GlobalState) => state)

    console.log(user)

    const [eye, setEye] = useState(false)

    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
                console.log('Minhas keys: ', { [store[i][0]]: store[i][1] });
                return true;
            });
        });
    });

    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            jsonValue != null ? JSON.parse(jsonValue) : null
            console.log('My UserStorage. ', jsonValue)
            return jsonValue
        } catch (e) {
            // read error
        }

    }

    console.log(getMyObject())

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: signInScheme,
        onSubmit: async (values) => {
            dispatch(signInRequest(values))
        }
    })

    return (
        <Container>

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
                    error={formik.touched.email && formik.errors.email}
                    right={
                        <TextInput.Icon
                            color={formik.touched.password && formik.errors.email ? colors.danger : colors.secondary}
                            name='email'
                            style={{marginTop: 15}}
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
                    error={formik.touched.password && formik.errors.password}
                    right={
                        <TextInput.Icon
                            color={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                            name={eye ? 'eye-off' : 'eye'}
                            onPress={() => setEye(!eye)}
                            style={{marginTop: 15}}
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
            </ContainerKeyboardAvoiding>

        </Container>

    )
}

export default SignIn;