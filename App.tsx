import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import AppRouter from './routes';
import AuthProvider from './context/AuthContext';

export default function App() {

  return (
    <AuthProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <AppRouter />
      </PaperProvider>
    </AuthProvider>
  );
}