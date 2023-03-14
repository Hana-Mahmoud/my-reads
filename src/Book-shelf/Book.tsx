import React from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../store/bookActions";
import { useAppSelector } from "../store/bookSlice";
import { Dispatcher } from "../store/bookStore";

const Book=(props: any)=> {
        const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
        const dispatch = useDispatch<Dispatcher>();
    
        const updateBookStatus = (event: any) => {
          const shelf = event.target.value
          const book = props.book;
          dispatch(updateBook(book,shelf,allBooks))
        }
return(
    <div className='book'>
            <div className='book-top'>
              <div
                className='book-cover'  style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    `url(${props.book.imageLinks.thumbnail})`
                }}
              ></div>
              <div className="book-shelf-changer">
                <select defaultValue={props.book.shelf ? props.book.shelf : "none"} onChange = {updateBookStatus}>
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className='book-title'>{props.book.title}</div>
            <div className='book-authors'>{props.book.publisher}</div>
          </div>
)
    }
    
    export default Book;