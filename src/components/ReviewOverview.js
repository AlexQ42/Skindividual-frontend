import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

const ReviewOverview = ({reviews}) => {

    const [reviewState, setReviewState] = useState([])

    useEffect(()=>{
        setReviewState(reviews);
    })
    function getRating() {

        if(reviewState !== [] && reviewState !== undefined)
        {
            console.log(reviewState)
            let array = reviewState;
            let rating = 0;
            for(let i=0; i<array.length; i++)
            {
                rating += array[i].value;
            }
            rating /= (array.length);
            return rating;
        }
        return "Error"
    }

    return(
        <div className="reviewOverviewInner">
            <span><h4>Bewertung</h4></span>
            {getRating()}
        </div>
    )
}

export default ReviewOverview;