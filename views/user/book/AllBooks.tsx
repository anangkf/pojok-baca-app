import { Button, Text, TextInput } from 'react-native-paper';
import { Dimensions, View } from 'react-native';
import { useContext, useEffect, useCallback } from 'react';
import { UserContext } from '../../../context/UserContext';
import BookList from '../../../components/book/BookList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import SkeletonLoader from '../../../components/common/SkeletonLoader';
import CONST from '../../../utils/constant';
import { BottomSheetModalProvider, BottomSheetModal, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useBottomSheetUtils from '../../../hooks/useBottomSheetUtils';
import BottomSheetBookFilter from '../../../components/book/BottomSheetBookFilter';

type AllBooksProps = BottomTabScreenProps<BottomTabsParamList, 'AllBooks', 'Tab'>

const AllBooks = ({ route }: AllBooksProps) => {
  const { getAllBooks, setIsLoading, isLoading, title, getTitle } = useContext(UserContext) as UserContextType;

  const { width: screenWidth } = Dimensions.get('screen');

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
    Promise
      .all([getAllBooks(), getTitle(route.params?.sort)])
      .finally(() => setIsLoading(false));
  }, [route]);

  return (
    <GestureHandlerRootView
      style={{
        padding: 6,
        paddingBottom: CONST.BOTTOM_BAR_HEIGHT * 6.85
      }}
    >
      <BottomSheetModalProvider>
        <SafeAreaView
        >
          <View
            // style={{
            //   padding: 6,
            //   paddingBottom: CONST.BOTTOM_BAR_HEIGHT * 4.45
            // }}
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
            <BookList horizontal={false} />
            {/* bottom sheet */}
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
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default AllBooks;