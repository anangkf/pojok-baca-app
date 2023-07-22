import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import BookCard from './BookCard';
import { FlatList, RefreshControl } from 'react-native';
import BookCardLoader from './BookCardLoader';

const BookList = ({ horizontal = true }: BookListProps) => {
  const { isLoading, setIsLoading, books, getAllBooks } = useContext(UserContext) as UserContextType;

  const onRefresh = () => {
    getAllBooks()
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

  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <BookCard book={item} horizontal={horizontal} />}
      keyExtractor={(item) => item.id}
      horizontal={horizontal}
      numColumns={!horizontal ? 2 : undefined}
      style={{ marginBottom: 12 }}
      showsHorizontalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
    />
  );
};

export default BookList;