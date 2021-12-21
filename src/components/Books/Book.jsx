import React, { Component } from 'react'
import books from '../../constants/books.json';


const displayBooks = books.map((book) => 
    <>
        <h5>ID: {book.book_id}</h5>
        <h3>Title: {book.title}</h3>
        <h4>Author: {book.author}</h4>
        <h5>Completed: {book.completed}</h5>
        <hr />
    </>
);

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: books,
            completedBooks: 0
        }
        // this.updateBookStatus = this.updateBookStatus.bind(this);
    }


    render() {
        return (
            <div>
                {displayBooks}
            </div>
        )
    }
}
