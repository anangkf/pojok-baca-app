import { Text, TextInput } from 'react-native-paper';
import CONST from '../../utils/constant';
import Container from '../../components/common/Container';

const SearchScreen = () => {
  return (
    <Container
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12
      }}
    >
      <Text variant='labelLarge' style={{ alignSelf: 'center', fontSize: 16 }} >
        Cari
      </Text>
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
    </Container>
  );
};

export default SearchScreen;