import { BottomSheetView } from '@gorhom/bottom-sheet';
import { Dimensions, View } from 'react-native';
import { Button, Chip, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const customTheme = { roundness: 13 };

const BottomSheetBookFilter = ({ handleModalDismissPress, handleContentLayout }: BottomSheetBookFilterProps) => {
  const { width: screenWidth } = Dimensions.get('screen');

  return (
    <BottomSheetView
      onLayout={handleContentLayout}
      style={{
        padding: 8,
        gap: 6
      }}
    >
      <View>
        <Text variant='labelLarge' >Tahun terbit</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 4 }} >
          <TextInput mode='outlined' theme={customTheme} style={{ width: screenWidth / 2.15, backgroundColor: '#fff' }} label='sesudah' keyboardType='numeric' />
          <TextInput mode='outlined' theme={customTheme} style={{ width: screenWidth / 2.15, backgroundColor: '#fff' }} label='sebelum' keyboardType='numeric' />
        </View>
      </View>
      <View>
        <Text variant='labelLarge' >Jumlah halaman</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 4 }} >
          <TextInput mode='outlined' theme={customTheme} style={{ width: screenWidth / 2.15, backgroundColor: '#fff' }} label='lebih dari' keyboardType='numeric' />
          <TextInput mode='outlined' theme={customTheme} style={{ width: screenWidth / 2.15, backgroundColor: '#fff' }} label='kurang dari' keyboardType='numeric' />
        </View>
      </View>
      {/* <View>
      <Text variant='labelLarge' >Kategori</Text>
    </View> */}
      <View>
        <Text variant='labelLarge' >Rating</Text>
        <View style={{ flexDirection: 'row', gap: 8 }} >
          <Chip mode='outlined' theme={customTheme} ><Icon name='star' color={'#FFD700'} size={14} />3 Keatas</Chip>
          <Chip mode='outlined' theme={customTheme} ><Icon name='star' color={'#FFD700'} size={14} />4 Keatas</Chip>
        </View>
      </View>
      <View>
        <Text variant='labelLarge' >Bahasa</Text>
        <View style={{ flexDirection: 'row', gap: 8 }} >
          <Chip mode='outlined' theme={customTheme} >Indonesia</Chip>
          <Chip mode='outlined' theme={customTheme} >English</Chip>
        </View>
      </View>
      <View>
        <Text variant='labelLarge' >Pembaca</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 4 }} >
          <TextInput mode='outlined' theme={customTheme} style={{ width: screenWidth / 2.15, backgroundColor: '#fff' }} label='lebih dari' keyboardType='numeric' />
          <TextInput mode='outlined' theme={customTheme} style={{ width: screenWidth / 2.15, backgroundColor: '#fff' }} label='kurang dari' keyboardType='numeric' />
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 6, gap: 6 }} >
          <Button onPress={handleModalDismissPress} >Batal</Button>
          <Button mode='contained' onPress={handleModalDismissPress} >Terapkan</Button>
        </View>
      </View>
    </BottomSheetView>
  );
};

export default BottomSheetBookFilter;