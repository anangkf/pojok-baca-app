import * as Yup from 'yup';
import CONST from '../utils/constant';

export const LoginUserValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(CONST.EMAIL_REGEX, 'Email tidak valid')
    .required('Email tidak boleh kosong'),
  password: Yup.string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password tidak boleh kosong'),
});