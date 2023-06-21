import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getEventByID} from "../api/EventAccessor";
import imageMicroneedling from "../assets/imageMicroneedling.svg";
import karte from "../assets/karte.svg";
import SkinTypeTag from "../components/SkinTypeTag";
import EventDescription from "../components/EventDescription";
import EventBoxListContainer from "../components/EventBoxListContainer";
import ReviewOverview from "../components/ReviewOverview";

const Event =  () => {

    const { id } = useParams();
    const [eventObject, setEventObject] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [ticketCounterValue, setTicketCounterValue] = useState(1);
    const ticketCounter = useRef(null);


    useEffect(() => {
        function fetchData()
        {
            getEventByID(id).then((result) =>
                {
                    result !== [] ? setEventObject(result[0]) : setEventObject([]);
                    console.log(result);
                    setReviews(result[0].reviews);
                    console.log(reviews);
                }
            )

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
                <div className="eventImage">
                    <img className="eventPageImage" src={imageMicroneedling} alt=""></img>
                </div>
                <div className="eventInfoContainer">
                    <h2>{eventObject.name}</h2>
                    <SkinTypeTag skinType={eventObject.skinType}/>
                    <h5 className="eventPageSubTitle">Ort:</h5>
                    <span className="text-start">{getAddress(eventObject.place)}</span>
                    <h5 className="eventPageSubTitle">Termin:</h5>
                    <span>{new Date(eventObject.date).toLocaleDateString()}</span>
                    <div className="flexSpaceBetween">
                        <div>
                            <h5 className="eventPageSubTitle">Freie Plätze:</h5>
                            <span className="text-start">{eventObject.availableSpots + " Plätze"}</span>
                        </div>
                        <span><h3 className="priceEventBox eventPageSubTitle">{eventObject.price}€<span> pro Person</span></h3></span>
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
            <div>
            <EventDescription/>
            </div>
            <div className= "flexSpaceBetween">
                <div>
                    <img className="eventPageImage" src={karte} alt=""></img>
                </div>
                <div>
                    <ReviewOverview reviews={reviews}/>
                </div>
            </div>
            <div>
            <h3 className="container-fluid">Andere Kunden interessierten sich auch für:</h3>
            <EventBoxListContainer class="container-fluid" query={"skintype="+(eventObject.skinType)+"&"} page={1} perPage={4} showPagination={false}/>
            </div>
        </div>
    )
}

export default Event;