import {useEffect, useState} from "react";
import SkinTypeTag from "./SkinTypeTag";
import EventReviewsAverageTag from "./EventReviewsAverageTag";

const EventBox = ({ eventObject }) => {
    const [resultEvent, setResultEvent] = useState([]);

    useEffect(() => {

        setResultEvent(eventObject);

    }, [eventObject]);


    return <div className="eventBox flexLeft">
        <div className="imageTest"></div>
        <div className="eventBoxContent">
            <div className="flexSpaceBetween">
                <div>
                    <h4>{resultEvent === null? "name" : resultEvent.name}</h4>
                    <p className="text-start">{resultEvent === null? "place" : resultEvent.place}</p>
                    <p>{resultEvent === null? "date" : new Date(resultEvent.date).toLocaleDateString()}</p>
                </div>
                <div><EventReviewsAverageTag rating={resultEvent.rating} /> </div>
            </div>

            <br/>
            <div className="flexSpaceBetween textRight">
                <SkinTypeTag skinType={resultEvent.skinType}/>
                <h4 className="priceEventBox">{resultEvent === null? "XX" : resultEvent.price}€ <span>/ Person</span></h4>
            </div>
        </div>
    </div>
}

export default EventBox;