import classes from './ChangerButton.module.css';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../store/bookActions';
import { Dispatcher } from '../../store/bookStore';
import { useAppSelector } from '../../store/bookSlice';

const ChangerButton = (props: any) => {
    const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
    const dispatch = useDispatch<Dispatcher>();

    const updateBookStatus = (event: any) => {
      const shelf = event.target.value
      const book = props.book;
      dispatch(updateBook(book,shelf,allBooks))
    }

    return(
        <div className = {classes['book-shelf-changer']}>
            <select onChange = {updateBookStatus} defaultValue = 'none'>
                <option value="none" disabled>
                Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
            </select>
        </div>
    )
}

export default ChangerButton;