import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { Card, ProgressBar, Text } from 'react-native-paper';

const BookShelfCard = ({ item, horizontal }: BookShelfCardProps) => {
  const navigation = useNavigation<NavigationProp<BottomTabsParamList>>();

  const { width: screenWidth } = Dimensions.get('window');
  const marginRight = screenWidth * 0.025;
  const width = horizontal ? 150 : (screenWidth / 2) - marginRight;

  const progress = Number((item.pagesRead / item.book.pages).toFixed(1));

  return (
    <Card
      key={item.id}
      style={{
        width,
        marginVertical: 6,
        marginRight,
        backgroundColor: '#FFFEFC'
      }}
      onPress={() => navigation.navigate('ReadBook', { userBookId: item.id })}
    >
      <Card.Cover source={{ uri: item.book.thumbnail }} style={{ height: width * 1.5 }} />
      <Card.Title
        title={item.book.title}
        titleVariant='labelMedium'
        titleNumberOfLines={2}
      />
      <Card.Content
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <ProgressBar style={{ width: width * 0.7 }} progress={progress} />
        <Text variant='labelSmall' >{progress * 100}%</Text>
      </Card.Content>
    </Card>
  );
};

export default BookShelfCard;