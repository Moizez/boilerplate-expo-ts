import React, { useEffect } from 'react';
import { colors } from '../../styles/theme.json'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { initialValuesEditProfile, editProfileSchema } from '../../schemas/formSchema'
import { Keyboard } from 'react-native'
import { updateUserRequest } from '../../store/modules/user/actions'
import { closeAlert } from '../../store/modules/storageless/actions';
import { GlobalState, TUser } from '../../utils/types';

import {
    Button, Container, ContainerKeyboardAvoiding, HelperText, Spacer,
    TextInput, Snackbar
} from '../../styles';

type ProfileEditProps = {
    props: TUser
}

const ProfileEdit = (props: ProfileEditProps) => {

    const { loading } = useSelector((state: GlobalState) => state.user)
    const { alert: { message, visible, color, time } } = useSelector((state: GlobalState) => state.storageless)
    const { profile } = props.route.params
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: initialValuesEditProfile,
        validationSchema: editProfileSchema,
        onSubmit: async (values) => {
            dispatch(updateUserRequest(values))

            Keyboard.dismiss()
        }
    })

    useEffect(() => {
        formik.setFieldValue('name', profile?.fullname)
    }, [])

    return (
        <>
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
                        loading={loading}
                    >
                        Atualizar
                    </Button>

                </ContainerKeyboardAvoiding>



            </Container>

            <Snackbar
                visible={visible}
                onDismiss={() => dispatch(closeAlert())}
                time={time}
                background={color}
            >
                {message}
            </Snackbar>
        </>
    )
}

export default ProfileEdit