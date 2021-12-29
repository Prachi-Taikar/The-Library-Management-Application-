import DiscriptionBooksList from "../discriptionBookList/discriptionBooksList";
import { useEffect, useState } from "react";

function DiscriptionBooks() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {

        fetch('https://iifsd.herokuapp.com/books')
        .then((response)=> {

                return response.json();
                })

                .then ((data) => {
                    setBookList(data);
                }
                )
    }, [])

    //Card== DiscriptionBooksList
    //CardList== DiscriptionBooks
    return (
        <div className="container description-list-wrapper">
            <div className="description-list">
                { bookList.length> 0 ? bookList.map((book) => 
                    (
                        <DiscriptionBooksList key ={book.id} id={book.id} title={book.book_title} image={ book.cover_url } descrip={ book.book_short_description } authorName={ book.authors[0]?.author_name } authorURL= 'https://google.com' /> 
                    )):
                <h2>Data loading.........</h2>
                }

            </div>
        </div>
    )
}
export default DiscriptionBooks;