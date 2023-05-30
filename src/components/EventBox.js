import {useEffect, useState} from "react";

const EventBox = ({ eventObject }) => {
    const [resultEvent, setResultEvent] = useState([]);

    useEffect(() => {

        setResultEvent(eventObject);

    }, [eventObject]);


    function getSkinTypeColor(skinType) {
        switch(skinType) {
            case 'dry':
                return '#FBEAD1';
            case 'oily':
                return '#DFD7F2';
            case 'combination':
                return '#F3D1D2';
            case 'normal':
                return '#AAC8D6';
            case 'sensitive':
                return '#C6E5E7';
            default:
                return '#B6C7B9';
        }
    }

    return <div className="eventBox flexLeft">
        <div className="imageTest"></div>
        <div className="eventBoxContent">
            <div className="flexSpaceBetween">
                <div>
                    <h4>{resultEvent === null? "name" : resultEvent.name}</h4>
                    <p className="text-start">{resultEvent === null? "place" : resultEvent.place}</p>
                    <p>{resultEvent === null? "date" : new Date(resultEvent.date).toLocaleDateString()}</p>
                </div>
                <div><p className="reviewSmall"><span>&#9733;</span> {resultEvent === null || resultEvent.rating === null? "0" : parseFloat(resultEvent.rating).toFixed(1)}</p></div>
            </div>
            <br/>
            <div className="flexSpaceBetween textRight">
                <p className="skinTypeTag" style={{backgroundColor: getSkinTypeColor(resultEvent === null? '' : resultEvent.skinType)}}>
                    {resultEvent === null? "skintype" : resultEvent.skinType}</p>
                <h4 className="priceEventBox">{resultEvent === null? "XX" : resultEvent.price}€ <span>/ Person</span></h4>
            </div>
        </div>
    </div>
}

export default EventBox;