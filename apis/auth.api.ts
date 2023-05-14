import axiosInstance from '../utils/axiosInstance';

const APIAuth = {
  login: async (credential: LoginBodyType) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = await axiosInstance.post('/auth/user/login', credential);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
};

export default APIAuth;