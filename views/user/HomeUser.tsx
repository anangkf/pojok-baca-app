import { useContext } from 'react';
import { Button, Text } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import Container from '../../components/common/Container';

const HomeUser = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;

  return (
    <Container
      style={{
        paddingVertical: 22,
      }}
    >
      <Text variant='headlineMedium' >Hello User</Text>
      <Button mode='elevated' onPress={() => logout()} >Keluar</Button>
    </Container>
  );
};

export default HomeUser;