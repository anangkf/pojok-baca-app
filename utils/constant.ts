import { BASE_URL_API } from '@env';

const CONST = {
  BASE_URL_API: `${BASE_URL_API}/v1`,
  INIT_LOGIN_FORM: {
    email: '',
    password: ''
  },
  EMAIL_REGEX: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
};

export default CONST;