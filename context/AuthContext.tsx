import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import JWT from 'expo-jwt';
// import CONST from '../utils/constant';

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: IAuthContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const determineAuthStatus = async (): Promise<boolean> => {
    const accessToken = await getToken();
    setIsLoggedIn(Boolean(accessToken));
    return Boolean(accessToken);
  };

  const login = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
      setRole('user');
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      setRole('');
    } catch (error) {
      console.log(error);
    }
  };

  const loginAdmin = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
      setRole('admin');
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async (): Promise<string | null> => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    return accessToken;
  };

  const [role, setRole] = useState('');

  const getRole = (accessToken: string): string => {
    // const decoded = JWT.decode(accessToken, CONST.JWT_SECRET);
    return 'user';
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn, determineAuthStatus,
        login, logout, getToken,
        loginAdmin,
        getRole, role
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;