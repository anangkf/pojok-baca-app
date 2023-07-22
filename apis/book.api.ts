import axiosInstance from '../utils/axiosInstance';

const APIBooks = {
  getAllBooks: async () => {
    const res = await axiosInstance.get('/book');
    return res.data;
  },
  getBookById: async (id: string) => {
    const res = await axiosInstance.get(`/book/${id}`);
    return res.data;
  },
  getBooksInShelf: async () => {
    const res = await axiosInstance.get('/user/book');
    return res.data;
  },
  addBookToShelf: async (data: AddBookToShelfArgs) => {
    const res = await axiosInstance.post('/user/book', data);
    return res.data;
  },
  searchBooks:async (keyword: string) => {
    const res = await axiosInstance.get(`/book?search=${keyword}`);
    return res.data;
  }
};

export default APIBooks;