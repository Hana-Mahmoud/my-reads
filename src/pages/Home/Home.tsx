import { useEffect } from 'react';
import Header from '../../UI/header/Header';
import BookShelf from '../../Book-shelf/BookShelf/BookShelf';
import SearchButton from '../../UI/searchButton/SearchButton';
import { useAppSelector } from '../../store/bookSlice';
import { useDispatch } from 'react-redux';
import { Dispatcher } from '../../store/bookStore';
import { getAllBooksApi } from '../../store/bookActions';

const Home = () => {
    const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
    const dispatch = useDispatch<Dispatcher>();

    useEffect(()=>{
        dispatch(getAllBooksApi())
    },[dispatch]);

    return(
        <div className='app' role="HomeWrapper">
            <div>
                <Header />
                <BookShelf books = {allBooks}/>
                <SearchButton />
            </div>
        </div>
    )
};

export default Home;