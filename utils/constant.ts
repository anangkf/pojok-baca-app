import { BASE_URL_API } from '@env';

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
  TOAST_SUCCESS_TITLE: 'Yaay!'
};

export default CONST;