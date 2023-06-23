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
  },
  loginAdmin: async (credential: LoginBodyType) => {
    try {
      const res = await axiosInstance.post('/auth/admin/login', credential);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  getAccountInfo: async () => {
    try {
      const res = await axiosInstance.get('/auth/me');
      return res.data;
    } catch (error) {
      throw error;
    }
  }
};

export default APIAuth;