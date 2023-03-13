import FilteredBooks from '../../Book-shelf/filteredBooks/FilteredBooks';
import SearchInput from '../../UI/SearchInput/SearchInput';
import { useAppSelector } from '../../store/bookSlice';
import { useDispatch } from 'react-redux';
import { Dispatcher } from '../../store/bookStore';
import { searchBooks } from '../../store/bookActions';

const Search = () => {
    const dispatch = useDispatch<Dispatcher>();
    const searchAllBooks =  (value: string) => {
      dispatch(searchBooks(value));
    }
    const filteredBookList: any = useAppSelector<any>((state) => state?.books?.searchResultBooks);
    console.log(filteredBookList)
    return(
        <div className = "app">
            { (
                <div>
                  <SearchInput onFilter = {searchAllBooks}/>
                  <FilteredBooks books = {filteredBookList} />
                </div>
              )
            }
        </div>
    )
};

export default Search;