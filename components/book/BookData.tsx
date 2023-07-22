import { useState, useContext } from 'react';
import { Dimensions } from 'react-native';
import { Image, View } from 'react-native';
import { Button, Chip, Divider, IconButton, Text } from 'react-native-paper';
import { Rating } from 'react-native-rating-element';
import theme from '../../styles/theme';
import getRandomBackgroundColor from '../../utils/getRandomBackgroundColor';
import { UserContext } from '../../context/UserContext';

const BookData = ({ book }: BookDataProps) => {
  const screenWidth = Dimensions.get('screen').width;

  const { addBookToShelf, addingBookToShelf } = useContext(UserContext) as UserContextType;

  const [descLines, setDescLines] = useState(10);
  const [isDescToogled, setisDescToogled] = useState(false);

  const toggleDesc = () => {
    setDescLines(isDescToogled ? 10 : 999);
    setisDescToogled(!isDescToogled);
  };

  return (
    <View>
      {/* thumbnail */}
      <Image
        source={{ uri: book?.thumbnail }}
        style={{ height: 270, width: 180, borderRadius: 12, alignSelf: 'center' }}
      />
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 8,
          gap: 1
        }}
      >
        {/* title, author, rating */}
        <Text variant='labelLarge' style={{ textAlign: 'center' }} >{book?.title}</Text>
        <Text variant='bodyMedium' >{book?.author?.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }} >
          <Rating rated={book?.rating} size={18} readonly />
          <Text variant='bodyMedium' >{book?.rating}</Text>
        </View>
        {/* button */}
        <View
          style={{
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center'
          }}
        >
          <Button
            mode='contained'
            onPress={() => addBookToShelf({ bookId: book?.id as string })}
            loading={addingBookToShelf}
          >
            Tambahkan ke Rak
          </Button>
          <IconButton
            icon={'heart'}
            mode='outlined'
            iconColor='#EB347D'
            style={{
              borderColor: 'rgba(235, 52, 125, 0.85)',
              borderWidth: 2,
              borderRadius: 12
            }}
            onPress={() => {'hello';}}
          />
        </View>
      </View>

      <Divider bold={true} style={{ width: screenWidth }} />

      <View style={{ padding: 4, gap: 6, paddingBottom: 28 }} >
        {/* chip */}
        <View>
          <Text variant='labelLarge'>Kategori</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4, gap: 6 }}>
            {book?.genres.map((genre) => (
              <Chip key={genre.id} style={{ borderRadius: 16, backgroundColor: getRandomBackgroundColor() }} >
                {genre.name}
              </Chip>
            ))}
          </View>
        </View>
        {/* deskripsi */}
        <View>
          <Text variant='labelLarge'>Deskripsi</Text>
          <Text
            variant='bodyMedium'
            numberOfLines={descLines}
            style={{
              textAlign: 'justify',
            }}
            ellipsizeMode='middle'
          >
            {book?.description}
          </Text>
          <Text
            variant='labelLarge'
            onPress={toggleDesc}
            style={{
              alignSelf: 'flex-start',
              color: theme.colors.primary,
            }}
          >
              Tampilkan lebih {isDescToogled ? ' sedikit' : ' banyak' }
          </Text>
        </View>

        <Divider bold={true} style={{ width: screenWidth }} />

        {/* detail */}
        <View style={{ width: screenWidth }}>
          <Text variant='labelLarge'>Detail Buku</Text>
          <View style={{ flexDirection: 'row' }} >
            <Text variant='bodyMedium' style={{ width: 90 }} >Penerbit</Text>
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.publisher.name}</Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Text variant='bodyMedium' style={{ width: 90 }} >Tahun terbit</Text>
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.published}</Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Text variant='bodyMedium' style={{ width: 90 }} >Halaman</Text>
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.pages}</Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Text variant='bodyMedium' style={{ width: 90 }} >Bahasa</Text>
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.language}</Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Text variant='bodyMedium' style={{ width: 90 }} >Pembaca</Text>
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.readers.length} orang</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookData;