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
import SearchScreen from '../views/user/SearchScreen';
import AdminBook from '../views/admin/AdminBook';
import AllBooks from '../views/user/book/AllBooks';
import BlankScreen from '../views/BlankScreen';
import BookDetails from '../views/user/book/BookDetails';
import CONST from '../utils/constant';
import UsersBook from '../views/user/book/UsersBook';
import AdminPostBook from '../views/admin/AdminPostBook';

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
  const Tab = createBottomTabNavigator<BottomTabsParamList>();

  if(isLoggedIn === null) return null;

  return (
    <NavigationContainer>
      {isLoggedIn === false
        ? <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='LoginUser' component={LoginUser} />
          <Stack.Screen name='LoginAdmin' component={LoginAdmin} />
          <Stack.Screen name='RegisterUser' component={RegisterUser} />
        </Stack.Navigator>
        : role === 'admin'
          ? <Drawer.Navigator screenOptions={{ drawerLabelStyle: { fontFamily: 'Poppins' } }} backBehavior='order' >
            <Drawer.Screen
              name='HomeAdmin'
              component={HomeAdmin}
              options={{ drawerLabel: 'Beranda', headerTitle: 'Beranda' }}
            />
            <Drawer.Screen name='AdminBook' component={AdminBook} options={{ drawerLabel: 'Buku', headerTitle: 'Buku' }} />
            <Drawer.Screen name='AdminPostBook' component={AdminPostBook} options={{ drawerLabel: 'Tambah Buku', headerTitle: 'Tambah Buku' }} />
          </Drawer.Navigator>
          : <Tab.Navigator
            id='Tab'
            backBehavior='order'
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: { fontFamily: 'Poppins' },
              tabBarStyle: { height: CONST.BOTTOM_BAR_HEIGHT, paddingVertical: 6 },
              tabBarHideOnKeyboard: true,
            }}
          >
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
              name='AllBooks'
              component={AllBooks}
              initialParams={{ sort: 'semua' }}
              options={{
                tabBarItemStyle: { display: 'none' }
              }}
            />
            <Tab.Screen
              name='BookDetails'
              component={BookDetails}
              // initialParams={{ sort: 'all' }}
              options={{
                tabBarItemStyle: { display: 'none' }
              }}
            />
            <Tab.Screen
              name='Cari'
              component={SearchScreen}
              options={{
                tabBarLabel: 'Cari',
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon='search' iconColor={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name='Buku'
              component={UsersBook}
              options={{
                tabBarLabel: 'Buku',
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon='leanpub' iconColor={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name='UserAkun'
              component={BlankScreen}
              options={{
                tabBarLabel: 'Akun',
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon='user' iconColor={color} size={size} />
                )
              }}
            />
          </Tab.Navigator>
      }
    </NavigationContainer>
  );
}
