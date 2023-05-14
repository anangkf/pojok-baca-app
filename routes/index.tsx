import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import LoginUser from '../views/auth/LoginUser';
import LoginAdmin from '../views/auth/LoginAdmin';
import RegisterUser from '../views/auth/RegisterUser';
import * as SplashScreen from 'expo-splash-screen';
import HomeUser from '../views/user/HomeUser';
import HomeAdmin from '../views/admin/HomeAdmin';
import { createDrawerNavigator } from '@react-navigation/drawer';

SplashScreen.preventAutoHideAsync();

export default function AppRouter() {
  const { isLoggedIn, determineAuthStatus, role } = useContext(AuthContext) as AuthContextType;

  const hideSplashScreenAsync = async () => {
    if (isLoggedIn !== null) {
      await SplashScreen.hideAsync();
    }
  };

  // get authentication state
  determineAuthStatus();
  hideSplashScreenAsync();

  const Stack = createNativeStackNavigator<StackParamsList>();
  const Drawer = createDrawerNavigator();

  if(isLoggedIn === null) return null;

  return (
    <NavigationContainer>
      {role === 'admin'
        ? <Drawer.Navigator >
          <Drawer.Screen
            name='HomeAdmin'
            component={HomeAdmin}
            options={{ drawerLabel: 'Beranda', headerTitle: 'Beranda' }}
          />
        </Drawer.Navigator>
        : <Stack.Navigator>
          {isLoggedIn === false
            ? <Stack.Group screenOptions={{ headerShown: false }} >
              <Stack.Screen name='LoginUser' component={LoginUser} />
              <Stack.Screen name='LoginAdmin' component={LoginAdmin} />
              <Stack.Screen name='RegisterUser' component={RegisterUser} />
            </Stack.Group>
          // : role === 'admin'
          //   ? <Drawer.Navigator screenOptions={{ drawerPosition: 'right' }} >
          //     <Drawer.Screen name='HomeAdmin' component={HomeAdmin} options={{ drawerLabel: 'Home' }} />
          //   </Drawer.Navigator>
            // ? <Stack.Group>
            //   <Stack.Screen name='HomeAdmin' component={HomeAdmin} />
            // </Stack.Group>
            : <Stack.Group>
              <Stack.Screen name='HomeUser' component={HomeUser} />
            </Stack.Group>
          }
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
