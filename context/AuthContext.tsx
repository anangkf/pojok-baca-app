import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JWT from 'expo-jwt';
import CONST from '../utils/constant';

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: IAuthContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [role, setRole] = useState<string | null>('');

  const determineAuthStatus = async (): Promise<boolean> => {
    const accessToken = await getToken();
    setIsLoggedIn(Boolean(accessToken));

    if(accessToken) {
      const role = getRole(accessToken as string);
      setRole(role);
    }
    return Boolean(accessToken);
  };

  const login = async (accessToken: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      setRole('user');
      setIsLoggedIn(true);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      await AsyncStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      setRole('');
    } catch (error) {
      throw error;
    }
  };

  const loginAdmin = async (accessToken: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      setRole('admin');
      setIsLoggedIn(true);
    } catch (error) {
      throw error;
    }
  };

  const getToken = async (): Promise<string | null> => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    return accessToken;
  };

  const getRole = (accessToken: string): string | null => {
    const { role } = JWT.decode(accessToken, CONST.JWT_SECRET);

    return role;
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