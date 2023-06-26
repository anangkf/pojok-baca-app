interface IUserContextProps {
  children: | JSX.Element[] | JSX.Element | React.ReactElement | React.ReactElement[] | string;
}

enum Gender {
  male = 'male',
  female = 'female',
}

interface User {
  id: string;
  email: string;
  name: string;
  gender: Gender;
  passwordHash: string;
  birthdate?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

type AccountInfoType = Omit<User, 'deletedAt'>

type UserContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  books: Book[];
  getAllBooks: () => Promise<void>;
  accountInfo: User | null;
  getAccountInfo: () => Promise<void>;
  getTitle: (string) => void;
  title: string;
}
