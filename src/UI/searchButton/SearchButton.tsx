import { Link } from 'react-router-dom';
import classes from './SearchButton.module.css';

const Search = () => {
    return(
        <div className = {classes['open-search']}>
            <Link to = '/search'><button>Add a book</button></Link>
        </div>
    )
};


export default Search;