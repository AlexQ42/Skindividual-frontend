import EventBoxList from "../components/EventBoxList";
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getEventByID, getEventList} from "../api/EventAccessor";
import imageMicroneedling from "../assets/imageMicroneedling.svg";
import SkinTypeTag from "../components/SkinTypeTag";
import EventBoxListContainer from "../components/EventBoxListContainer";

const Event =  () => {

    const { id } = useParams();
    const [eventObject, setEventObject] = useState([]);
    const [ticketCounterValue, setTicketCounterValue] = useState(1);
    const ticketCounter = useRef(null);


    useEffect(() => {
        async function fetchData()
        {
            const result = await getEventByID(id);
            result !== [] ? setEventObject(result[0]) : setEventObject([]);
        }
        fetchData();}, [id]);

    function getAddress(place) {
        switch(place) {
            case 'Hamburg':
                return 'Hafenstraße 235, 20095 Hamburg';
            case 'Berlin':
                return 'Ludwigsfelder Straße 70, 12629 Berlin';
            case 'Nürnberg':
                return 'Malvenweg 28, 89275 Nürnberg';
            case 'München':
                return 'Marktgasse 7, 92526 München';
            default:
                return 'Adresse';
        }
    }

    function handleIncrementTickets() {
        if(ticketCounterValue < 10) setTicketCounterValue(ticketCounterValue+1);
    }

    function handleDecrementTickets() {
        if(ticketCounterValue > 1) setTicketCounterValue(ticketCounterValue-1);
    }

    return (
        <div id="eventPage">
            <div className="flexLeft">
                <img className="eventPageImage" src={imageMicroneedling} alt=""></img>
                <div className="eventInfoContainer container-fluid">
                    <h2>{eventObject.name}</h2>
                    <SkinTypeTag skinType={eventObject.skinType}/>
                    <h4 className="eventPageSubTitle">Ort:</h4>
                    <p className="text-start">{getAddress(eventObject.place)}</p>
                    <h4 className="eventPageSubTitle">Termin:</h4>
                    <p>{new Date(eventObject.date).toLocaleDateString()}</p>
                    <div className="flexSpaceBetween">
                        <div>
                            <h4 className="eventPageSubTitle">Freie Plätze:</h4>
                            <p className="text-start">{eventObject.availableSpots + " Plätze"}</p>
                        </div>
                        <h3 className="priceEventBox eventPageSubTitle">{eventObject.price}€ <span> pro Person</span></h3>
                    </div>
                    <button onClick={handleDecrementTickets}>-</button>
                    <input ref={ticketCounter} readOnly type="text" value={ticketCounterValue} min="1" max="10"/>
                    <button onClick={handleIncrementTickets}>+</button>
                    <button>In den Warenkorb</button>
                </div>
            </div>
            <h3 className="container-fluid">Andere Kunden interessierten sich auch für:</h3>
            <EventBoxListContainer class="container-fluid" query={"skintype="+(eventObject.skinType)+"&"} page={1} perPage={4} showPagination={false}/>
        </div>
    );
}

export default Event;