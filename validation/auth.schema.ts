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

export const RegisterUserValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nama tidak boleh kosong'),
  email: Yup.string()
    .matches(CONST.EMAIL_REGEX, 'Email tidak valid')
    .required('Email tidak boleh kosong'),
  password: Yup.string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password tidak boleh kosong'),
  confirmPassword: Yup.string()
    .test(
      'passwordConfirmation',
      'Password tidak sesuai',
      (value, ctx) => value === ctx.parent.password
    ),
  gender: Yup.string()
    .required('Pilih salah satu Gender'),
});

export const LoginAdminValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(CONST.EMAIL_REGEX, 'Email tidak valid')
    .required('Email tidak boleh kosong'),
  password: Yup.string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password tidak boleh kosong'),
});