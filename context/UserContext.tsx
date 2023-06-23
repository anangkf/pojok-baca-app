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
    setIsLoading(true);
    const booksFromDB = await APIBooks.getAllBooks();
    setBooks(booksFromDB);
  };

  const [accountInfo, setAccountInfo] = useState<AccountInfoType | null>(null);

  const getAccountInfo = async () => {
    try {
      setIsLoading(true);
      const res = await APIAuth.getAccountInfo();
      setAccountInfo(res);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: CONST.TOAST_ERROR_TITLE,
        text2: `Error getting account info: ${error.response.data}`
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoading, setIsLoading,
        books, getAllBooks,
        accountInfo, getAccountInfo
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;