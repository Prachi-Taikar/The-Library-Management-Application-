import RatingDataItems from "../ratingDataItems/ratingDataItems";

function RatingData() {
    return (
        <div className="rating-data">
            <div className="rating-data__container container">

            <RatingDataItems />
            <RatingDataItems />
            <RatingDataItems />
            <RatingDataItems />

            </div>
        </div>
    )
}

export default RatingData;