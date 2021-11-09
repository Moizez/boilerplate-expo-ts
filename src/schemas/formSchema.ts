import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup
    .string()
    .min(5, 'A senha deve conter no mínimo 5 caracteres')
    .required('A senha é obrigatória!')
});

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'O seu nome deve ter no mínimo 3 caracteres')
    .required('O nome é obrigatório!'),
  email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup
    .string()
    .min(5, 'A senha deve conter no mínimo 5 caracteres')
    .required('A senha é obrigatória!'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais.').required('A confirmação de senha é obrigatória!'),
});
