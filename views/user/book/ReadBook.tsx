import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import APIBooks from '../../../apis/book.api';
import Pdf from 'react-native-pdf';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import CONST from '../../../utils/constant';

type ReadBookProps = BottomTabScreenProps<BottomTabsParamList, 'ReadBook', 'Tab'>

const ReadBook = ({ route }: ReadBookProps) => {
  const [userBook, setUserBook] = useState<BookInShelf | undefined>();

  useEffect(() => {
    APIBooks.readBookInshelf(route.params.userBookId)
      .then((res) => setUserBook(res));
  }, [route]);
  console.log(userBook);
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Pdf
        source={{ uri: userBook?.book.ebookUrl, cache: true }}
        page={userBook?.pagesRead}
        horizontal={true}
        renderActivityIndicator={(progress) => (
          <>
            <ActivityIndicator />
            <Text variant='bodySmall' >{progress}%</Text>
          </>
        )}
        enablePaging={true}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError={(error: any) => {
          console.log(error);
          const errMsg = error?.response?.data?.message || error.message;
          Toast.show({
            type: 'error',
            text1: CONST.TOAST_ERROR_TITLE,
            text2: errMsg
          });
        }}
      />
    </SafeAreaView>
  );
};

export default ReadBook;