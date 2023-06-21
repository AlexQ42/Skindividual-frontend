const EventReviewsAverageTag = ({rating}) =>
{
    return (<p className="reviewSmall"><span>&#9733; </span>{rating === null? "0.0" : rating}</p>);
}

export default EventReviewsAverageTag;