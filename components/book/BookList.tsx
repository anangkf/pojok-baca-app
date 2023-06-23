import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import BookCard from './BookCard';
import { FlatList } from 'react-native';
import BookCardLoader from './BookCardLoader';

const BookList = ({ horizontal = true }: BookListProps) => {
  const { isLoading, books } = useContext(UserContext) as UserContextType;

  if(isLoading) return(
    <FlatList
      data={Array.from({ length: 5 })}
      renderItem={() => <BookCardLoader isLoading={isLoading} horizontal={horizontal} />}
      keyExtractor={(_, idx) => idx.toString()}
      horizontal={horizontal}
      numColumns={!horizontal ? 2 : undefined}
      style={{ marginVertical: 6 }}
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
      style={{ marginVertical: 4 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BookList;