import { Link } from 'react-router-dom';
import classes from './SearchInput.module.css';


const SearchInput = (props: any) => {

    const onFilterBooks = (event: any) => {
        props.onFilter(event.target.value);
    };

    return(
        <div className = {classes['search-books']}>
            <div className = {classes['search-books-bar']}>
            <Link to = '/home'>
                <button className = {classes['close-search']}>
                    Close
                </button>
            </Link>
                <div className = {classes['search-books-input-wrapper']}>
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange = {onFilterBooks}
                    />
                </div>
            </div>
            <div className = {classes['search-books-results']}>
                <ol className = {classes['books-grid']}></ol>
            </div>
        </div>
    )
};

export default SearchInput;