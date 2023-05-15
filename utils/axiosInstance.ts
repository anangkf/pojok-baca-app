import axios from 'axios';
import CONST from './constant';

const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL_API
});

export default axiosInstance;