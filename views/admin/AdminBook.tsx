import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import BookList from '../../components/book/BookList';

const AdminBook = () => {
  const { getAllBooks, setIsLoading } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    getAllBooks().finally(() => setIsLoading(false));
  }, []);

  return (
    <View
      style={{
        padding: 6,
        paddingBottom: 30
      }}
    >
      <Text variant='headlineSmall' >Daftar Buku</Text>
      <BookList horizontal={false} />
    </View>
  );
};

export default AdminBook;