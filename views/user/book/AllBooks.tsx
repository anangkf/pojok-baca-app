import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import BookList from '../../../components/book/BookList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import SkeletonLoader from '../../../components/common/SkeletonLoader';

type AllBooksProps = BottomTabScreenProps<BottomTabsParamList, 'AllBooks', 'Tab'>

const AllBooks = ({ route }: AllBooksProps) => {
  const { getAllBooks, setIsLoading, isLoading, title, getTitle } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    Promise
      .all([getAllBooks(), getTitle(route.params?.sort)])
      .finally(() => setIsLoading(false));
  }, [route]);

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 6,
          paddingBottom: 60
        }}
      >
        <SkeletonLoader visible={!isLoading} height={20} >
          <Text variant='headlineSmall' >{title}</Text>
        </SkeletonLoader>
        <BookList horizontal={false} />
      </View>
    </SafeAreaView>
  );
};

export default AllBooks;