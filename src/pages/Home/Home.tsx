import { useEffect } from 'react';
import Header from '../../UI/header/Header';
import SearchButton from '../../UI/searchButton/SearchButton';
import { useDispatch } from 'react-redux';
import { Dispatcher } from '../../store/store';
import { getAllBooksApi } from '../../store/actions';
import Shelves from '../../Book-shelf/Shelves';

const Home = () => {
    const dispatch = useDispatch<Dispatcher>();

    useEffect(()=>{
        dispatch(getAllBooksApi())
    },[dispatch]);

    return(
        <div className='app' role="HomeWrapper">
            <div>
                <Header />
                <Shelves/>
                <SearchButton />
            </div>
        </div>
    )
};

export default Home;