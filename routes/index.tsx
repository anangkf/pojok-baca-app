import { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import LoginUser from '../views/auth/LoginUser';
import LoginAdmin from '../views/auth/LoginAdmin';
import RegisterUser from '../views/auth/RegisterUser';
import * as SplashScreen from 'expo-splash-screen';
import HomeUser from '../views/user/HomeUser';

SplashScreen.preventAutoHideAsync();

export default function AppRouter() {
  const { isLoggedIn, determineAuthStatus, role, getRole } = useContext(AuthContext) as AuthContextType;

  const hideSplashScreenAsync = async () => {
    if (isLoggedIn !== null) {
      await SplashScreen.hideAsync();
    }
  };

  // get authentication state
  determineAuthStatus();
  hideSplashScreenAsync();

  useEffect(() => {
    getRole('user');
  }, [role]);

  const Stack = createNativeStackNavigator<StackParamsList>();

  if(isLoggedIn === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn === false
          ? <Stack.Group screenOptions={{ headerShown: false }} >
            <Stack.Screen name='LoginUser' component={LoginUser} />
            <Stack.Screen name='LoginAdmin' component={LoginAdmin} />
            <Stack.Screen name='RegisterUser' component={RegisterUser} />
          </Stack.Group>
          : role === 'admin'
            ? <Stack.Group>
              <Stack.Screen name='HomeAdmin' component={LoginAdmin} />
            </Stack.Group>
            : <Stack.Group>
              <Stack.Screen name='HomeUser' component={HomeUser} />
            </Stack.Group>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
