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

type BottomSheetBookFilterProps = {
  handleModalDismissPress: () => void;
  handleContentLayout: ({ nativeEvent: { layout: { height }, }, }: {
    nativeEvent: {
        layout: {
            height: number;
        };
    };
}) => void;
}