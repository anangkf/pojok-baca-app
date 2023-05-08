import { useContext } from 'react';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../context/AuthContext';

function LoginUser() {
  const { login, logout } = useContext(AuthContext) as AuthContextType;

  return (
    <SafeAreaView style={{ backgroundColor: 'teal', height: '100%' }} >
      <Text variant='titleLarge'>Hello RN Paper</Text>
      <Button mode='contained' onPress={() => login('user access token')} >Login</Button>
      <Button mode='elevated' onPress={() => logout()} >Logout</Button>
    </SafeAreaView>
  );
}

export default LoginUser;
