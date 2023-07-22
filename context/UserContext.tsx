import { createContext, useState } from 'react';
import APIBooks from '../apis/book.api';
import APIAuth from '../apis/auth.api';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import CONST from '../utils/constant';

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: IUserContextProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const getAllBooks = async ():Promise<void> => {
    try {
      setIsLoading(true);
      const booksFromDB = await APIBooks.getAllBooks();
      setBooks(booksFromDB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || error.message;
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: errMsg
      });
    }
  };

  const [bookDetail, setBookDetail] = useState<Book | null>(null);

  const getBookDetail =async (bookId: string) => {
    try {
      setIsLoading(true);
      const book = await APIBooks.getBookById(bookId);
      setBookDetail(book);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || error.message;
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: errMsg
      });
    }
  };

  const [accountInfo, setAccountInfo] = useState<AccountInfoType | null>(null);

  const getAccountInfo = async () => {
    try {
      setIsLoading(true);
      const res = await APIAuth.getAccountInfo();
      setAccountInfo(res);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || error.message;
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: `Error getting account info: ${errMsg}`
      });
    }
  };

  const [title, setTitle] = useState('');
  const getTitle = (params: string) => {
    const capitalizedTitle = params
      .split('-')
      .map((part: string) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
      .join(' ');
    setTitle(capitalizedTitle);
  };

  const [usersBookShelf, setUsersBookShelf] = useState<BookInShelf[] | null>(null);

  const getBooksInShelf = async () => {
    try {
      setIsLoading(true);
      const res = await APIBooks.getBooksInShelf();
      setUsersBookShelf(res);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || error.message;
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: errMsg
      });
    }
  };

  const [addingBookToShelf, setAddingBookToShelf] = useState(false);
  const addBookToShelf = async ({ bookId }: AddBookToShelfArgs) => {
    try {
      setAddingBookToShelf(true);
      const res: BookInShelf = await APIBooks.addBookToShelf({ bookId });

      let newState: BookInShelf[];
      if(usersBookShelf) {
        newState = usersBookShelf?.concat(res);
      } else {
        newState = [res];
      }
      setUsersBookShelf(newState);

      Toast.show({
        text1: CONST.TOAST_SUCCESS_TITLE,
        text2: 'Berhasil menambahkan buku ke rak!'
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || error.message;
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: errMsg
      });
    } finally {
      setAddingBookToShelf(false);
    }
  };

  const [searchResults, setSearchResults] = useState<Book[]>();

  const searchBooks = async (keyword: string) => {
    try {
      setIsLoading(true);
      const res = await APIBooks.searchBooks(keyword);
      setSearchResults(res);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || error.message;
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: errMsg
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoading, setIsLoading,
        books, getAllBooks,
        accountInfo, getAccountInfo,
        title, getTitle,
        bookDetail, getBookDetail,
        usersBookShelf, getBooksInShelf, addBookToShelf,
        addingBookToShelf, setAddingBookToShelf,
        searchBooks, searchResults, setSearchResults,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;