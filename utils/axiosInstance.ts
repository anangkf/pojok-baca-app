import axios from 'axios';
import CONST from './constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL_API
});

axiosInstance.interceptors.request.use(
  async (req) => {
    const { url, headers } = req;
    // if(url?.includes('vaccine') || url?.includes('sessions') || url?.includes('bookings') || url?.includes('profile') || url?.includes('dashboard')){
    headers.Authorization = `Bearer ${await AsyncStorage.getItem('accessToken')}`;
    // }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axiosInstance;