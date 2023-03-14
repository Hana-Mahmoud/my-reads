import Book from './Book';
import { useAppSelector } from '../store/bookSlice';


const FilteredBooks = (props: any) => {
  const filteredBookList: any = useAppSelector<any>((state) => state?.books?.searchResultBooks);

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
        {filteredBookList.map((b:any)=>(
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