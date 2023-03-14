import React from "react";
import Book from '../Book-shelf/Book';
const Shelf=(props: any)=> {
return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((b:any)=>(
             <li key={b.id}>
             <Book book={b} />
             </li>
        ))}
      </ol>
    </div>
  </div>
)
}

export default Shelf;