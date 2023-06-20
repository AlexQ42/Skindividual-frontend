import {useEffect, useState} from "react";
import SkinTypeTag from "./SkinTypeTag";
import EventReviewsAverageTag from "./EventReviewsAverageTag";
import {Link} from "react-router-dom";

const EventBox = ({ eventObject }) => {
    const [resultEvent, setResultEvent] = useState([]);

    useEffect(() => {

        setResultEvent(eventObject);

    }, [eventObject]);


    return <div className="eventBox">
        <Link to={"/events/"+resultEvent.id} className="eventBoxLink flexLeft">
            <div className="imageInBox"></div>
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
        </Link>
        </div>
}

export default EventBox;