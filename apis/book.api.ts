import axiosInstance from '../utils/axiosInstance';

const APIBooks = {
  getAllBooks: async () => {
    const res = await axiosInstance.get('/book');
    return res.data;
  },
  getBookById: async (id: string) => {
    const res = await axiosInstance.get(`/book/${id}`);
    return res.data;
  }
};

export default APIBooks;