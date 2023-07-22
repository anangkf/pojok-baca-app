import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import BookCard from './BookCard';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import BookCardLoader from './BookCardLoader';
import { RouteProp, useRoute } from '@react-navigation/native';
import NotFound from '../common/NotFound';

const SearchResults = () => {
  const route: RouteProp<BottomTabsParamList, 'SearchScreen'> = useRoute();
  const { isLoading, setIsLoading, searchBooks, searchResults } = useContext(UserContext) as UserContextType;

  const onRefresh = () => {
    searchBooks(route.params.keyword)
      .finally(() => setIsLoading(false));
  };

  if(isLoading) return(
    <FlatList
      data={Array.from({ length: 5 })}
      renderItem={() => <BookCardLoader isLoading={isLoading} horizontal={false} />}
      keyExtractor={(_, idx) => idx.toString()}
      horizontal={false}
      numColumns={2}
      style={{ marginBottom: 4 }}
      showsHorizontalScrollIndicator={false}
    />
  );

  if(searchResults) {
    if(searchResults?.length < 1) return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      >
        <NotFound text='Upss... Buku yang kamu cari tidak ada!' />
      </ScrollView>
    );
  }

  return (
    <FlatList
      data={searchResults}
      renderItem={({ item }) => <BookCard book={item} horizontal={false} />}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={2}
      style={{ marginBottom: 12 }}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
    />
  );
};

export default SearchResults;