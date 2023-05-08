import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import LoginUser from '../views/auth/LoginUser';
import LoginAdmin from '../views/auth/LoginAdmin';
import RegisterUser from '../views/auth/RegisterUser';
import AuthLoader from '../views/auth/AuthLoader';

export default function AppRouter() {
  const { isLoggedIn, determineAuthStatus, role } = useContext(AuthContext) as AuthContextType;

  // get authentication state
  determineAuthStatus();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn === null
          ? <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AuthLoader' component={AuthLoader} />
          </Stack.Group>
          : isLoggedIn === false
            ? <Stack.Group>
              <Stack.Screen name='LoginUser' component={LoginUser} />
              <Stack.Screen name='LoginAdmin' component={LoginAdmin} />
              <Stack.Screen name='RegisterUser' component={RegisterUser} />
            </Stack.Group>
            : role === 'admin'
              ? <Stack.Group>
                <Stack.Screen name='HomeAdmin' component={LoginAdmin} />
              </Stack.Group>
              : <Stack.Group>
                <Stack.Screen name='HomeUser' component={LoginUser} />
              </Stack.Group>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
