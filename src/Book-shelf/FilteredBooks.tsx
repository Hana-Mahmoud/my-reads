import Book from './Book';
import { useAppSelector } from '../store/bookSlice';


const FilteredBooks = (props: any) => {
  const filteredBookList: any = useAppSelector<any>((state) => state?.books?.searchResultBooks);
  const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
  const chosenBooksFiltered = allBooks.filter((book:any) => filteredBookList.find((book2:any) => book.id === book2.id )) 
  const mergedBooks= filteredBookList.map((obj:any) => chosenBooksFiltered.find((o:any) => o.id === obj.id) || obj);


    return (
        <div>
        {
          props.books.length === 0 && <div className = 'not-available'>
              <p>No books available</p>
            </div>
        }
        {props.books && 
      <div className="search-books-results">
      <ol className="books-grid">
        {mergedBooks.map((b:any)=>(
         <li key={b.id}>
         <Book book={b}/>
         </li>
         ))}
      </ol>
    </div>
        }

      </div>
    )
};

export default FilteredBooks;