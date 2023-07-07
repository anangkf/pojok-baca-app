import { useContext, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { UserContext } from '../../../context/UserContext';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CONST from '../../../utils/constant';
import BookShelf from '../../../components/book/BookShelf';

const UsersBook = () => {
  const { height } = Dimensions.get('screen');
  const { getBooksInShelf, setIsLoading } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    getBooksInShelf()
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView
      style={{
        padding: 6,
        height: height - CONST.BOTTOM_BAR_HEIGHT * 1.65,
      }}
    >
      <Text variant='headlineSmall'>Rak Buku-ku</Text>
      <BookShelf horizontal={false} />
    </SafeAreaView>
  );
};

export default UsersBook;