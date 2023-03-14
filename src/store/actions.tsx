import * as BookAPI from '../BooksAPI';
import { Dispatch } from "redux";
import { bookAction } from './slice';

export const getAllBooksApi = () => (dispatch: Dispatch) => {
    BookAPI.getAll().then(books =>{
      dispatch(bookAction.getAllBooks(books));
    }
    );
  };

export const updateBook = (book : any , shelf : string, bookList: any) => (dispatch : Dispatch ) => {
    BookAPI.update(book, shelf).then(() =>{
    let newBooks = [];
    newBooks = bookList.map((item: any) => {
        if (item.id === book.id ) {
          return {...item, shelf: shelf as string};
        }
        return item;
      });
    dispatch(bookAction.updateBook(newBooks));
  }
  );
};

export const searchBooks = (query: string) => (dispatch: Dispatch) => {
  BookAPI.search(query,20).then(books => {
    if (!Array.isArray(books)) {
      books = [];
    }
    dispatch(bookAction.searchBooks(books));
  });
};