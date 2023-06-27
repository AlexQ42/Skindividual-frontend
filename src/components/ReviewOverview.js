import React, {useEffect, useState} from "react";
import {calculateAverageRating} from "../api/EventAccessor";

const ReviewOverview = ({event}) => {

    return(
        <div className="contentReview">
            <span><h4>Bewertung</h4></span>
            <div className="reviewCounter">
                <span>{calculateAverageRating(event)}/5 <span className="smallText">({} Bewertung)</span></span>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>5</b>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>4</b>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>3</b>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>2</b>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="bar flexSpaceBetween">
                <div>
                    <b>1</b>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewOverview;