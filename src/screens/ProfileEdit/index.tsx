import React from 'react';
import { colors } from '../../styles/theme.json'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { initialValuesSignUp, signUpSchema } from '../../schemas/formSchema'
import { Keyboard } from 'react-native'
import { navigate } from '../../utils/rootNavigation';

import { Button, Container, ContainerKeyboardAvoiding, HelperText, Spacer, TextInput, Title, Touchable } from '../../styles';

const ProfileEdit = (props: any) => {

    const { profile } = props.route.params
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: initialValuesSignUp,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {


            Keyboard.dismiss()
        }
    })

    return (
        <Container align='center' justify='center' hasPadding>


            <ContainerKeyboardAvoiding align='center' justify='center'>

                <TextInput
                    label='Nome'
                    placeholder='Digite seu nome'
                    placeholderTextColor={formik.touched.name && formik.errors.name ? colors.danger : colors.secondary}
                    value={formik.values.name}
                    onChangeText={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    //@ts-ignore
                    error={formik.touched.name && formik.errors.name}
                />
                {formik.touched.name && formik.errors.name &&
                    <HelperText>
                        {formik.touched.name && formik.errors.name}
                    </HelperText>
                }

                <Spacer size={20} />

                <Button
                    block
                    background='secondary'
                    onPress={formik.handleSubmit}
                >
                    Atualizar
                </Button>

            </ContainerKeyboardAvoiding>

        </Container>
    )
}

export default ProfileEdit