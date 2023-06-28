import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Image, View } from 'react-native';
import { Button, Chip, Divider, IconButton, Text } from 'react-native-paper';
import { Rating } from 'react-native-rating-element';
import theme from '../../styles/theme';
import getRandomBackgroundColor from '../../utils/getRandomBackgroundColor';

const BookData = ({ book }: BookDataProps) => {
  const screenWidth = Dimensions.get('screen').width;

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
          <Button mode='contained' onPress={() => {'';}} >Tambahkan ke Rak</Button>
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
          >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat necessitatibus sit? Voluptatem sed numquam recusandae tempore quisquam natus officiis rerum, commodi, nisi quibusdam eligendi? Amet eaque exercitationem error! Deserunt, quo pariatur! In maxime perspiciatis esse possimus enim est error autem earum sint natus qui dolores facere quibusdam libero tenetur, vitae, atque et! Non distinctio vel nihil perferendis et consectetur, assumenda vitae, atque dolorum sapiente beatae quasi labore minima sequi quisquam! Consequatur placeat labore earum a, dolores voluptate cumque quam suscipit natus dolorum assumenda fugiat quod corporis distinctio deleniti voluptatum aperiam facilis iusto soluta obcaecati iste ducimus explicabo accusantium? Unde?
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
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.pages}</Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Text variant='bodyMedium' style={{ width: 90 }} >Pembaca</Text>
            <Text variant='titleSmall' style={{ width: screenWidth - 110 }}>: {book?.pages} orang</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

export default BookData;