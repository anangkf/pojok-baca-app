import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AppRouter from './routes';
import AuthProvider from './context/AuthContext';
import theme from './styles/theme';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if(!fontsLoaded) return null;

  return (
    <AuthProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PaperProvider
          settings={{
            icon: props => <AwesomeIcon {...props} />
          }}
          theme={theme}
        >
          <StatusBar style="auto" />
          <AppRouter />
          <Toast />
        </PaperProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
}