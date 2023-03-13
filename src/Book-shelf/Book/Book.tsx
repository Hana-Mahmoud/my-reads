import classes from './Book.module.css';
import ChangerButton from '../../UI/Button/ChangerButton';

const Book = (props: any) => {
    return(
        <div className = {classes['bookshelf-books']}>
            <ol className = {classes['books-grid']}>
                <li>
                    <div className = {classes.book}>
                    <div className = {classes['book-top']}>
                        <div
                        className = {classes['book-cover']}
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            `url(${props.bookInfo.imgUrl})`,
                        }}
                        ></div>
                        <ChangerButton book = {props.bookInfo}/>
                    </div>
                    <div className = {classes['book-title']}>{props.bookInfo.title}</div>
                    {props.bookInfo.authors && props.bookInfo.authors.map((author: any) => (
                        <div key = {author} className = {classes['book-authors']}>{author}</div>
                    ))}
                    </div>
                </li>
            </ol>
        </div>
    )
};

export default Book;