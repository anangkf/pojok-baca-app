import { useEffect, useContext } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { UserContext } from '../../../context/UserContext';
import { RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookData from '../../../components/book/BookData';
import BookDataLoader from '../../../components/book/BookDataLoader';

type BookDetailsProps = BottomTabScreenProps<BottomTabsParamList, 'BookDetails', 'Tab'>

const BookDetails = ({ route }: BookDetailsProps) => {
  const { bookId } = route.params;
  const { bookDetail, getBookDetail, isLoading, setIsLoading } = useContext(UserContext) as UserContextType;

  const fetchBookDetail = () => {
    getBookDetail(bookId)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchBookDetail();
  }, [bookId]);

  if(isLoading) return <BookDataLoader isLoading={isLoading} />;

  return (
    <SafeAreaView style={{ alignItems: 'center', }}>
      <ScrollView
        style={{
          paddingHorizontal: 8,
          paddingTop: 14,
          // paddingBottom: 40,
        }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchBookDetail} />}
      >
        <BookData book={bookDetail} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetails;