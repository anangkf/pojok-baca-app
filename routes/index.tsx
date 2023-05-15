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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';

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
  const Tab = createBottomTabNavigator();

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
        : isLoggedIn === false
          ? <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginUser' component={LoginUser} />
            <Stack.Screen name='LoginAdmin' component={LoginAdmin} />
            <Stack.Screen name='RegisterUser' component={RegisterUser} />
          </Stack.Navigator>
          : <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen
              name='HomeUser'
              component={HomeUser}
              options={{
                tabBarLabel: 'Beranda',
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon='home' iconColor={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name='Buku'
              component={HomeUser}
              options={{
                tabBarLabel: 'Buku',
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon='leanpub' iconColor={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name='UserAkun'
              component={HomeUser}
              options={{
                tabBarLabel: 'Akun',
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon='user' iconColor={color} size={size} />
                )
              }}
            />
          </Tab.Navigator>
          // <Stack.Group>
          //   <Stack.Screen name='HomeUser' component={HomeUser} />
          // </Stack.Group>
      }
    </NavigationContainer>
  );
}
