import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import BookCard from './BookCard';
import { ScrollView } from 'react-native';
import BookCardLoader from './BookCardLoader';

const BookList = () => {
  const { isLoading, books } = useContext(UserContext) as UserContextType;

  if(isLoading) return(
    <ScrollView
      horizontal={true}
      style={{ marginVertical: 6, }}
      showsHorizontalScrollIndicator={false}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <BookCardLoader key={idx} isLoading={isLoading} />
      ))}
    </ScrollView>
  );

  return (
    <ScrollView
      horizontal={true}
      style={{ marginVertical: 4, }}
      showsHorizontalScrollIndicator={false}
    >
      {books?.map((book: Book) => {
        return (
          <BookCard key={book.id} book={book} />
        );
      })}
    </ScrollView>
  );
};

export default BookList;