import { Button, Text, TextInput } from 'react-native-paper';
import { Dimensions, View } from 'react-native';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import BookList from '../../../components/book/BookList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import SkeletonLoader from '../../../components/common/SkeletonLoader';
import CONST from '../../../utils/constant';

type AllBooksProps = BottomTabScreenProps<BottomTabsParamList, 'AllBooks', 'Tab'>

const AllBooks = ({ route }: AllBooksProps) => {
  const { getAllBooks, setIsLoading, isLoading, title, getTitle } = useContext(UserContext) as UserContextType;

  const { width: screenWidth } = Dimensions.get('screen');

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
          paddingBottom: CONST.BOTTOM_BAR_HEIGHT * 4.45
        }}
      >
        <SkeletonLoader visible={!isLoading} height={27} >
          <Text variant='headlineSmall' >{title}</Text>
        </SkeletonLoader>
        <TextInput
          mode='outlined'
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          // value={values.email}
          // error={Boolean(errors.email)}
          placeholderTextColor={'gray'}
          placeholder='judul, penulis atau kategori'
          autoCapitalize='none'
          outlineStyle={{
            borderRadius: CONST.TEXT_INPUT_ROUNDNESS
          }}
          left={<TextInput.Icon icon='search' />}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 }} >
          <Button
            icon={'filter'}
            onPress={() => {'';}}
            style={{
              width: screenWidth / 2.15,
            }}
          >
            Filter
          </Button>
          <Button
            icon={'sort'}
            onPress={() => {'';}}
            style={{
              width: screenWidth / 2.15,
            }}
          >
            Urutkan
          </Button>
        </View>
        <BookList horizontal={false} />
      </View>
    </SafeAreaView>
  );
};

export default AllBooks;