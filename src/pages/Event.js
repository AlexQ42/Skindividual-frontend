import EventBoxList from "../components/EventBoxList";
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getEventByID, getEventList} from "../api/EventAccessor";
import imageMicroneedling from "../assets/imageMicroneedling.svg";
import SkinTypeTag from "../components/SkinTypeTag";
import EventDescription from "../components/EventDescription";

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
            <div className="eventPageContent flexLeft">
                <img className="eventPageImage" src={imageMicroneedling} alt=""></img>
                <div className="eventInfoContainer container-fluid">
                    <h2>{eventObject.name}</h2>
                    <SkinTypeTag skinType={eventObject.skinType}/>
                    <h5 className="eventPageSubTitle">Ort:</h5>
                    <p className="text-start">{getAddress(eventObject.place)}</p>
                    <h5 className="eventPageSubTitle">Termin:</h5>
                    <p>{new Date(eventObject.date).toLocaleDateString()}</p>
                    <div className="flexSpaceBetween">
                        <div>
                            <h5 className="eventPageSubTitle">Freie Plätze:</h5>
                            <p className="text-start">{eventObject.availableSpots + " Plätze"}</p>
                        </div>
                        <h3 className="priceEventBox eventPageSubTitle">{eventObject.price}€ <span> pro Person</span></h3>
                    </div>
                    <div className="amountInCart flexSpaceBetween">
                        <button className="button decrement" onClick={handleDecrementTickets}>-</button>
                        <input className="amountInput" ref={ticketCounter} readOnly type="text" value={ticketCounterValue} min="1" max="10"/>
                        <button className="button increment" onClick={handleIncrementTickets}>+</button>
                        <button className="button inCartButton">
                           In den Warenkorb
                        </button>
                    </div>
                </div>
            </div>
            <EventDescription/>
            <h3 className="container-fluid">Andere Kunden interessierten sich auch für:</h3>
            <EventBoxList class="container-fluid" query={"/events?skintype="+(eventObject.skinType)+"&page=1&per-page=4"}/>
        </div>
    );
}

export default Event;