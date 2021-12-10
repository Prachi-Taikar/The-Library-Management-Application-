
function FeaturedBox() {
    return (
        <div className="featured-box">
            <div className="featured-box__img">
                <a href="https://google.com"><img src="images\books.svg" alt="Book Icon" /></a>
            </div>
            <div className="featured-box__body">
                <h3 className="featured-box__body-title">Books</h3>
                <p className="featured-box__body-description">
                    Enjoy popular Books when you subscribe.   <br />
                    Get instant access to millions of eBooks for only ₹299/month.
                </p>
            </div>
        </div>
    )
}

export default FeaturedBox;