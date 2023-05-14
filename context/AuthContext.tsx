import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useState } from 'react';

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: IAuthContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const determineAuthStatus = async (): Promise<boolean> => {
    const accessToken = await getToken();
    console.log(accessToken);
    setIsLoggedIn(Boolean(accessToken));
    setRole('user');
    return Boolean(accessToken);
  };

  const login = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      setIsLoggedIn(false);
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
    return 'user';
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn, determineAuthStatus,
        login, logout, getToken,
        getRole, role
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;