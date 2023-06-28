type BookCardLoaderProps = {
  isLoading: boolean;
  horizontal?: boolean;
}

type BookCardProps = {
  book: Book;
  horizontal?: boolean;
}

type BookListProps = {
  horizontal?: boolean;
}

type BookDataProps = {
  book: Book | null;
}

type BookDataLoaderProps = {
  isLoading: boolean;
}