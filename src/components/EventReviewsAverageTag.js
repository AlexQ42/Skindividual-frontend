const EventReviewsAverageTag = ({rating}) =>
{
    return (<p className="reviewSmall"><span>&#9733; </span>{rating === null? "0" : parseFloat(rating).toFixed(1)}</p>);
}

export default EventReviewsAverageTag;