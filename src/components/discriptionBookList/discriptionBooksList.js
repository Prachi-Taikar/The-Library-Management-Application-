import { Link } from "react-router-dom";

function DiscriptionBooksList({ id, title, image, descrip, autherName, autherURL}) {
    return (
        <div className="description">
           
           <Link className= "description__title" to= {`/book/${id}`}> {title} </Link>
            <img className="description__img" src={image} alt="Book Cover" />
                <div className="description__description">
                    {descrip}
                </div>
                <a className="description__author" href={autherURL}>{autherName}</a>
        </div>
        
            )
}

export default DiscriptionBooksList;