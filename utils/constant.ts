import { BASE_URL_API, JWT_SECRET } from '@env';

const CONST = {
  BASE_URL_API: `${BASE_URL_API}/v1`,
  INIT_LOGIN_FORM: {
    email: '',
    password: ''
  },
  INIT_USER_REGISTER_FORM: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  },
  EMAIL_REGEX: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  TOAST_ERROR_TITLE: 'Uppsss...',
  TOAST_SUCCESS_TITLE: 'Yaay!',
  JWT_SECRET,
  TEXT_INPUT_ROUNDNESS: 12
};

export default CONST;