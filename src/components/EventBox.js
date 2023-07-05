import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {calculateAverageRating} from "../api/EventAccessor";
import SkinTypeTag from "./SkinTypeTag";
import EventReviewsAverageTag from "./EventReviewsAverageTag";

const EventBox = ({ eventObject }) => {
    const [resultEvent, setResultEvent] = useState([]);

    useEffect(() => {

        setResultEvent(eventObject);

    }, [eventObject]);

    const image = "../event"+resultEvent.id+".jpg";

    return <div className="eventBox">
        <Link to={"/events/"+resultEvent.id} className="eventBoxLink flexLeft">
            <div className="imageInBox" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"}}></div>
            <div className="eventBoxContent">
                <div className="flexSpaceBetween">
                    <div>
                        <h4>{resultEvent === null? "name" : resultEvent.name}</h4>
                        <p className="text-start">{resultEvent === null? "place" : resultEvent.place}</p>
                        <p>{resultEvent === null? "date" : new Date(resultEvent.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <EventReviewsAverageTag rating={calculateAverageRating(resultEvent)} />
                    </div>
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