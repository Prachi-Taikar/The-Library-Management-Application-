import FeaturedBox from "../featuredBox/featuredBox";

function FeaturedBoxList() {
    return (
        <div className="featured-boxes">
            <div className="featured-boxes__container container">
                <div className="featured-boxes__title-wrapper">
                    <h3 className="featured-boxes__title section-heading">All in one simple subscription</h3>
                    <p className="featured-boxes__description">
                        Enjoy music, movies, comics, kids books, and more at no extra cost.
                        As a Scribd subscriber, you get full premium-level access to services
                        for free from our partner companies.
                    </p>
                    <div className="featured-box-list">

                        <FeaturedBox/>
                        <FeaturedBox />
                        <FeaturedBox />
                        <FeaturedBox />
                        <FeaturedBox />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBoxList;