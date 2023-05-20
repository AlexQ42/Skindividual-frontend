import {useEffect, useState} from "react";

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
                    <p>{resultEvent === null? "place" : resultEvent.place}</p>
                    <p>{resultEvent === null? "date" : new Date(resultEvent.date).toLocaleDateString()}</p>
                </div>
                <div><p className="reviewSmall"><span>&#9733;</span> 5</p></div>
            </div>
            <br/>
            <div className="flexSpaceBetween textRight">
                <p className="skinTypeTag">{resultEvent === null? "skintype" : resultEvent.skinType}</p>
                <h4 className="priceEventBox">{resultEvent === null? "XX" : resultEvent.price}€ <span>/ Person</span></h4>
            </div>
        </div>
    </div>
}

export default EventBox;