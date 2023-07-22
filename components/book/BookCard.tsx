import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Dimensions, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookCard = ({ book, horizontal }: BookCardProps) => {
  const navigation = useNavigation<NavigationProp<BottomTabsParamList>>();

  const { width: screenWidth } = Dimensions.get('window');
  const marginRight = screenWidth * 0.03;
  const width = horizontal ? 150 : (screenWidth / 2) - marginRight;

  return (
    <Card
      key={book.id}
      style={{
        width,
        marginVertical: 6,
        marginRight,
        backgroundColor: '#FFFEFC'
      }}
      onPress={() => navigation.navigate('BookDetails', { bookId: book.id })}
    >
      <Card.Cover source={{ uri: book.thumbnail }} style={{ height: width * 1.5 }} />
      <Card.Title
        title={book.title}
        titleVariant='labelMedium'
        titleNumberOfLines={2}
      />
      <Card.Content
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 6,
        }}
      >
        <Text variant='bodySmall'>{book.author.name}</Text>
        <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
          <Text variant='bodySmall'>{book.rating}</Text>
          <Icon name='star' color={'#FFD700'} size={12} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default BookCard;