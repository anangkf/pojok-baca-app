import { useContext } from 'react';
import { Button, Text } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import Container from '../../components/common/Container';

const HomeAdmin = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;

  return (
    <Container>
      <Text variant='headlineMedium' >Hello Admin</Text>
      <Button mode='elevated' onPress={() => logout()} >Keluar</Button>
    </Container>
  );
};

export default HomeAdmin;