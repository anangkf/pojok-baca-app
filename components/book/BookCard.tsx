import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card
      key={book.id}
      style={{
        width: 150,
        marginVertical: 6,
        marginRight: 10,
        backgroundColor: '#FFFEFC'
      }}
    >

      <Card.Cover source={{ uri: book.thumbnail }} />

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