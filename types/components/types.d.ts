type StackParamsList = {
  LoginUser: undefined;
  LoginAdmin: undefined;
  RegisterUser: undefined;
  HomeAdmin: undefined;
}

type BottomTabsParamList = {
  HomeUser: undefined;
  Cari: undefined;
  Buku: undefined;
  AllBooks: {sort: 'semua' | 'best-seller' | 'mungkin-kamu-suka' | 'baru-rilis'};
  BookDetails: {bookId: string;};
  UserAkun: undefined;
}

type ContainerProps = {
  children: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[] | string;
  style?: object
}

type FlexWrapperProps = {
  children: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[] | string;
  style?: object
}

type ScrollableContainerProps = {
  children: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[] | string;
  style?: object
}