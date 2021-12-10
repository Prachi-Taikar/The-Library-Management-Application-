import BestBookGridItem from "../bestBookGridItem/bestBookGridItem";
import { useEffect, useState } from "react";
import loading from '../../img/loading.gif';

function BestBookBox() {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
      fetch('https://iifsd.herokuapp.com/books')
        .then ((response) => {
          return response.json();
        })
        .then ((data) => {
          setBookList(data);
        })
    },
    [])

    return (
        <div className="best-books-grid">
      <div className="best-books-grid__container container">
        <div className="best-books-grid__title">
          <h3 className="section-heading">THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h3>
        </div>
        <div className="best-books-grid__content">
          <ul className="best-books-grid__grid">
            
          {!bookList.length && <img src = {loading} alt = "loading..." /> }
          
          {bookList && bookList.length && bookList.map((book) => 
            ( <BestBookGridItem key ={book.id} title = {book.book_title} src = {book.cover_url} /> ))}
            </ul>
        </div>
        
        <div className="best-books-grid__cta">
          <a href="https://google.com" className="hero__btn btn btn--large btn--green">
            Read free for 30 days
          </a>
          <div className="hero__under-btn under-btn">
            Only ₹299/month after. Cancel anytime.
          </div>
        </div>
      </div>
    </div>
    )
}

export default BestBookBox;