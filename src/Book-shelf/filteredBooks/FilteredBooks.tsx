import classes from '../BookShelf.module.css';
import Book from '../Book/Book';

const FilteredBooks = (props: any) => {
    return (
        <div>
        {
          props.books.length === 0 && <div className = {classes['not-available']}>
              <p>No books available</p>
            </div>
        }
        {props.books && 
        <div>
          <div className = {classes.bookshelf}>
            <div className = {classes.displayFlex}>
              {props.books.map((book: any) => (
                <Book key = {book.id} bookInfo = {
                  {
                    id : book.id,
                    title: book.title,
                    publisher: book.publisher,
                    imgUrl: book.imageLinks.thumbnail,
                    shelf: book.shelf,
                  }
                } />
              ))}
            </div>
          </div>
        </div>
        }

      </div>
    )
};

export default FilteredBooks;