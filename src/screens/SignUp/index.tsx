import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { signInRequest } from '../../store/modules/auth/actions'

import { Container, Title, Text, TextInput, Button, Spacer } from '../../styles';

const SignUp = () => {

    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
		email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
		password: yup.string().required('A senha é obrigatória!'),
	})

    const formik = useFormik({
		initialValues: { email: '', password: '' },
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			dispatch(signInRequest(values))
		}
	})

    return (
        <Container>

            <Container align='center' justify='center'>
                <Title>Boilerplate React Native</Title>

            </Container>

            <Container hasPadding>

                <TextInput
                    label='Seu e-mail'
                    placeholder='Digite seu e-mail'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    error={formik.touched.email && formik.errors.email}
                />

                <Spacer />

                <TextInput
                    label='Sua senha'
                    placeholder='Digite sua senha'
                    secureTextEntry
                    autoCapitalize='none'
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    error={formik.touched.password && formik.errors.password}
                />

                <Spacer size={20} />

                <Button
                    block
                    background='success'
                    onPress={formik.handleSubmit}
                >
                    Entrar
                </Button>
            </Container>

        </Container>

    )
}

export default SignUp;