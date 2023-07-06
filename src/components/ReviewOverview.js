import React, {useEffect, useState} from "react";
import {calculateAverageRating} from "../api/EventAccessor";

const ReviewOverview = ({event}) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        setReviews(event.reviews ?? [])
    }, [event])

    function calculateReviewBar(stars)
    {
        if(event.reviews !== undefined) {
            let reviews = event.reviews;
            let counter = 0;
            reviews.forEach(review => {
                if(review.value === stars) counter++;
            });
            if(isNaN(counter/reviews.length*100))
            {
                return 0;
            }
            else return counter/reviews.length*100;
        }
    }

    return(
        <div className="contentReview">
            <span><h4>Bewertung</h4></span>
            <div className="reviewCounter">
                <span className="bigText"> {reviews.length > 0 ? (calculateAverageRating(event)) : "noch keine Bewertungen"}</span>
                <span className="smallText">{reviews.length > 0
                    ? (reviews.length === 1 ? " / 5 Sterne ("+reviews.length+" Bewertung)" : " / 5 Sterne ("+reviews.length+" Bewertungen)")
                    : ""}</span>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>5</b>
                </div>
                <div className="progress">
                    <div className="progress-bar green" role="progressbar" style={{width: calculateReviewBar(5)+"%"}} aria-valuenow={calculateReviewBar(5)}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>4</b>
                </div>
                <div className="progress">
                    <div className="progress-bar green" role="progressbar" style={{width: calculateReviewBar(4)+"%"}} aria-valuenow={calculateReviewBar(4)}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>3</b>
                </div>
                <div className="progress">
                    <div className="progress-bar green" role="progressbar" style={{width: calculateReviewBar(3)+"%"}} aria-valuenow={calculateReviewBar(3)}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>2</b>
                </div>
                <div className="progress">
                    <div className="progress-bar green" role="progressbar" style={{width: calculateReviewBar(2)+"%"}} aria-valuenow={calculateReviewBar(2)}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>1</b>
                </div>
                <div className="progress">
                    <div className="progress-bar green" role="progressbar" style={{width: calculateReviewBar(1)+"%"}} aria-valuenow={calculateReviewBar(1)}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewOverview;