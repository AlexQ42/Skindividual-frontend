const EventReviewsAverageTag = ({rating}) =>
{
    let isNull = (rating === null || rating < 1);
    return (<p className={"reviewSmall "+(isNull? "noReviewsBackground" : "")}><span>&#9733; </span>{isNull? "" : rating}</p>);
}

export default EventReviewsAverageTag;