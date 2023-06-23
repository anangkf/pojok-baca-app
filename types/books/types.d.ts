interface Book {
  id: string;
  title: string;
  author: Author;
  publisher: Publisher;
  published: number;
  thumbnail: string;
  ebookUrl: string;
  genres: Genre[];
  pages: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

interface Author {
  id: string;
  name: string
}

interface Publisher {
  id: string;
  name: string
}

interface Genre {
  id: string;
  name: string
}