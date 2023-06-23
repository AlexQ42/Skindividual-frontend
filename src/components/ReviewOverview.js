import React, {useEffect, useState} from "react";
import {calculateAverageRating} from "../api/EventAccessor";

const ReviewOverview = ({event}) => {


    return(
        <div className="reviewOverviewInner">
            <span><h4>Bewertung</h4></span>
            {calculateAverageRating(event)}
        </div>
    )
}

export default ReviewOverview;