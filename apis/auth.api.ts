/* eslint-disable no-useless-catch */
import axiosInstance from '../utils/axiosInstance';

const APIAuth = {
  loginUser: async (credential: LoginBodyType) => {
    try {
      const res = await axiosInstance.post('/auth/user/login', credential);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  registerUser: async (body: RegisterUserBodyType) => {
    try {
      const res = await axiosInstance.post('/auth/user/register', body);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
};

export default APIAuth;