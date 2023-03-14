import React from "react";
import Shelf from "./Shelf";
import { useAppSelector } from '../store/bookSlice';

const Shelves = () => {
const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
const currentlyReading = allBooks.filter((book: any)=>book.shelf === "currentlyReading");
const whatToRead = allBooks.filter((book: any)=>book.shelf === "wantToRead");
const read = allBooks.filter((book: any)=>book.shelf === "read");

return  (
    <div>
    <Shelf title="Currently Reading" books={currentlyReading}  />
    <Shelf title="Want To Read" books={whatToRead}  />
    <Shelf title="Read" books={read} />
    </div>
)

}

export default Shelves;