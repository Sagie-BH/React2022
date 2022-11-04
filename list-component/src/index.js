import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from './Book.jsx';
import {books} from './books';



function BookList() {
  console.log('hello');
  return (
    <section className='bookList'>
     { books.map(book => (
         <Book key={book.id} book={book}/>
     )) } 
    </section>
  )
}


ReactDOM.render(
   <BookList />,
  document.getElementById('root')
);

