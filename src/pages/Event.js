import {useParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {getEventByID} from "../api/EventAccessor";
import imageMicroneedling from "../assets/imageMicroneedling.svg";
import karte from "../assets/karte.svg";
import SkinTypeTag from "../components/SkinTypeTag";
import EventDescription from "../components/EventDescription";
import EventBoxListContainer from "../components/EventBoxListContainer";
import ReviewOverview from "../components/ReviewOverview";
import {putInCart} from "../api/CartService";


const Event =  () => {

    const { id } = useParams();
    const [eventObject, setEventObject] = useState([]);
    const [ticketCounterValue, setTicketCounterValue] = useState(1);
    const ticketCounter = useRef(null);
    const imageUrl = "../event"+eventObject.id+".jpg";

    useEffect(() => {
        function fetchData()
        {
            getEventByID(id).then((result) =>
                {
                    result !== [] ? setEventObject(result[0]) : setEventObject([]);
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
        if(ticketCounterValue < 10 && ticketCounterValue < eventObject.availableSpots) setTicketCounterValue(ticketCounterValue+1);
    }

    function handleDecrementTickets() {
        if(ticketCounterValue > 1) setTicketCounterValue(ticketCounterValue-1);
    }

    return (
        <div id="eventPage">
            <br/>
            <div className="eventPageContent flexLeft">
                <div className="eventImage">
                    <img className="eventPageImage" src={imageUrl} alt=""></img>
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
                        <span className="marginTop"><h3 className="priceEventBox eventPageSubTitle">{eventObject.price}€<span> pro Person</span></h3></span>
                    </div>
                    <div className="amountInCart flexSpaceBetween marginTop">
                        <button className="button decrement" onClick={handleDecrementTickets}>-</button>
                        <input className="amountInput" ref={ticketCounter} readOnly type="text" value={ticketCounterValue} min="1" max="10"/>
                        <button className="button increment" onClick={handleIncrementTickets}>+</button>
                        <button className="button inCartButton" onClick={() => putInCart(eventObject, ticketCounterValue)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            In den Warenkorb
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Warenkorb</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Erfolgreich zum Warenkorb hinzugefügt!
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn button grey" data-bs-dismiss="modal">Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <EventDescription/>
            </div>
            <div className= "cardReviewComponent flexSpaceBetween">
                <div className="cardPageImage">
                    <img className="cardImage" src={karte} alt=""></img>
                </div>
                <div>
                    <ReviewOverview event={eventObject}/>
                </div>
            </div>
            <div>
                <h3 className="container-fluid">Andere Kunden interessierten sich auch für:</h3><br/>
                <EventBoxListContainer class="container-fluid" query={"skintype="+(eventObject.skinType)+"&"} page={1} perPage={4} showPagination={false}/><br/>
            </div>
        </div>
    )
}

export default Event;