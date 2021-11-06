import * as yup from 'yup';

export const signInScheme = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup
    .string()
    .min(5, 'A senha deve conter no mínimo 5 caracteres')
    .required('A senha é obrigatória!'),
});
