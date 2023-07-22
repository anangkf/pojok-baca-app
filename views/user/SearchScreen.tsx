import { useEffect, useState, useContext, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { Button, Text, TextInput } from 'react-native-paper';
import CONST from '../../utils/constant';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserContext } from '../../context/UserContext';
import SearchResults from '../../components/book/SearchResults';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomSheetBookFilter from '../../components/book/BottomSheetBookFilter';
import useBottomSheetUtils from '../../hooks/useBottomSheetUtils';

type SearchScreenProps = {
  navigation: NativeStackScreenProps<BottomTabsParamList, 'SearchScreen'>['navigation']
}

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const { height, width: screenWidth } = Dimensions.get('screen');

  const { searchBooks, setIsLoading, searchResults } = useContext(UserContext) as UserContextType;

  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword] = useDebounce(keyword, 500);

  const onSearchChange = (text: string) => {
    setKeyword(text);
    navigation.setParams({
      keyword: text,
    });
  };

  const {
    bottomSheetRef,
    animatedHandleHeight,
    animatedContentHeight,
    animatedSnapPoints,
    handleContentLayout,
    handleModalDismissPress,
    handleModalPresentPress
  } = useBottomSheetUtils(['65%', '90%']);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
    ),
    []
  );

  useEffect(() => {
    if(debouncedKeyword) {
      searchBooks(debouncedKeyword)
        .finally(() => setIsLoading(false));
    }
  }, [debouncedKeyword]);

  return (
    <GestureHandlerRootView
      style={{
        padding: 6,
        paddingBottom: CONST.BOTTOM_BAR_HEIGHT * 3.8
        // paddingBottom: CONST.BOTTOM_BAR_HEIGHT * 6.85
      }}
    >
      <BottomSheetModalProvider>
        <SafeAreaView
          style={{
            padding: 6,
            height: height - CONST.BOTTOM_BAR_HEIGHT * 1.65,
          }}
        >
          <Text variant='labelLarge' style={{ alignSelf: 'center', fontSize: 16 }} >
            Cari
          </Text>
          <TextInput
            mode='outlined'
            onChangeText={onSearchChange}
            value={keyword}
            placeholderTextColor={'gray'}
            placeholder='judul, penulis atau kategori'
            autoCapitalize='none'
            outlineStyle={{
              borderRadius: CONST.TEXT_INPUT_ROUNDNESS
            }}
            left={<TextInput.Icon icon='search' />}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2, display: searchResults ? undefined : 'none' }} >
            <Button
              icon={'filter'}
              onPress={() => handleModalPresentPress()}
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

          <SearchResults />

          <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            backdropComponent={renderBackdrop}
            enablePanDownToClose={true}
            keyboardBehavior='fillParent'
          >
            <BottomSheetBookFilter
              handleContentLayout={handleContentLayout}
              handleModalDismissPress={handleModalDismissPress}
            />
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default SearchScreen;