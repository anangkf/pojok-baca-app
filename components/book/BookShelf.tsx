import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import BookCardLoader from './BookCardLoader';
import BookShelfCard from './BookShelfCard';
import NotFound from '../common/NotFound';

const BookShelf = ({ horizontal = true }: BookShelfProps) => {
  const { isLoading, setIsLoading, usersBookShelf, getBooksInShelf } = useContext(UserContext) as UserContextType;

  const onRefresh = () => {
    getBooksInShelf()
      .finally(() => setIsLoading(false));
  };

  if(isLoading) return(
    <FlatList
      data={Array.from({ length: 5 })}
      renderItem={() => <BookCardLoader isLoading={isLoading} horizontal={horizontal} />}
      keyExtractor={(_, idx) => idx.toString()}
      horizontal={horizontal}
      numColumns={!horizontal ? 2 : undefined}
      style={{ marginBottom: 4 }}
      showsHorizontalScrollIndicator={false}
    />
  );

  if(usersBookShelf) {
    if(usersBookShelf?.length < 1) return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      >
        <NotFound text='Upss... Belum ada buku di rak mu!' />
      </ScrollView>
    );
  }

  return (
    <FlatList
      data={usersBookShelf}
      renderItem={({ item }) => <BookShelfCard item={item} horizontal={horizontal} />}
      keyExtractor={(item) => item.id}
      horizontal={horizontal}
      numColumns={!horizontal ? 2 : undefined}
      style={{ marginBottom: 12 }}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
    />
  );
};

export default BookShelf;