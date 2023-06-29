import {useEffect, useState} from 'react';
import React from 'react';
import payPal from "../assets/PayPal.svg"
import klarna from "../assets/Klarna.svg"
import visa from "../assets/visa.svg"
import masterCard from "../assets/MasterCard.svg"
import {postOrder} from "../api/OrderAccessor";
import {getCart, getCartTotal} from "../api/CartService";
import {getUser} from "../api/UserAccessor";
import EventBox from "./EventBox";
import {get} from "axios";
import Checkout from "../pages/Checkout";
import CheckoutEventBox from "./CheckoutEventBox";
//import Popup from 'reactjs-popup';




const FormCheckOut = () => {

    const [user, setUser] = useState(null)


    useEffect( () => {
        function fetchData() {
            getUser().then((response) => setUser(response))
        }
        fetchData();
    }, []);


    function handleCheckout()
    {
        let order = [];
        let cart = getCart();
        if(cart !== [])
        {
            let event_id = 0;
            let amount = 0;
            cart.forEach((element) =>
            {
                event_id = element.event.id.toString();
                amount = element.amount.toString();
                order.push({event_id, amount});
            })
            postOrder(order);
        }
    }

    function showCartContentList() {
        let cart = getCart() ?? [];
        return <div> {cart.length > 0 ? cart.map((ticket, i) => <CheckoutEventBox key={i} ticket={ticket}></CheckoutEventBox>)
            : <p className="emptyListText">nichts im Warenkorb</p>}</div>
    }

    return (
        <div className="grid-container">
            <div className="formular grid1">
                <p>
                    <label>
                        <input className="input radioB"
                               type="radio"
                               name="option"
                               value="Frau"
                               defaultChecked={true}
                        />
                        <span className="qq">Frau</span>
                    </label>
                    <label>
                        <input className="input radioB radioBMann"
                               type="radio"
                               name="option"
                               value="Herr"
                        />
                        <span className="qq">Herr</span>
                    </label>
                </p>
                <div className="bottomForm">
                    <label className="firstNameLabel">
                        <p>Vorname:*</p>
                        <input className="input" type="text" defaultValue={user !== null? user.firstname : ""}/>
                    </label>
                    <label>
                        <p>Nachname:*</p>
                        <input className="input" type="text" defaultValue={user !== null? user.lastname : ""}/>
                    </label>
                </div>
                <p></p>

                <label className="firstNameLabel">
                    <p> E-Mail:*</p>
                    <input className="input" type="text" defaultValue={user !== null? user.email : ""}/>
                </label>

                <label>
                    <p className="telefonNr"> Telefonnummer:*</p>
                    <input className="input" type="text" />
                </label>
                <p className="Pflichtfeld">*=Pflichtfelder</p>

                <div className="SummeB">
                    <div className="Zahlungsart">Zahlungsart</div>
                        <span>
                            <input className="input radioB"
                                   type="radio"
                                   name="optionZ"
                                   value="PayPal"
                            />
                        </span>
                        <img className="bImage paypal" src={payPal} alt=""></img>
                        <label>
                            <input className="input radioB spaceLeft"
                                   type="radio"
                                   name="optionZ"
                                   value="Klarna"
                            />
                            <img className="bImage" src={klarna} alt=""></img>
                        </label>
                        <label>
                            <input className="input radioB spaceLeft"
                                   type="radio"
                                   name="optionZ"
                                   value="Visa"
                            />
                            <img className="bImage visa" src={visa} alt=""></img>
                        </label>
                        <label>
                            <input className="input radioB spaceLeft"
                                   type="radio"
                                   name="optionZ"
                                   value="MasterCard"
                            />
                            <img className="bImage master" src={masterCard} alt=""></img>
                        </label>
                </div>
            </div>
            <div className="grid2 ">
                <div className="SummeBox secondContainer">
                    <h3> Bestellübersicht </h3>
                    {
                        showCartContentList()
                    }
                    <label className="Rabatt eventBox sumBox" style={{display:'flex'}}>
                        <div>
                            <h4> Rabatt </h4>
                            <input className="input" type="text"/>
                            <button className="keinButton notRegisteredLink applyDiscountLink"> Rabatt anwenden </button>
                        </div>

                    </label>
                    <br/>
                    <div className="eventBox sumBox">
                        <h4>Summe</h4>
                        <div className="Summe flexSpaceBetween">
                            <span>Bestellwert:</span> <span>{getCartTotal()}€</span>
                        </div>
                        <div className="Summe flexSpaceBetween bigText borderTop">
                            <span>Gesamtsumme:</span> <span>{getCartTotal()}€</span>
                        </div>
                    </div>
                </div>
                <div className="flexRight marginTop">
                    <button type="button" className="button btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleCheckout}>
                        Jetzt kaufen
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Vielen Dank für deinen Einkauf!</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Du bekommst in Kürze eine E-Mail mit deinem Ticket.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary Danke" data-bs-dismiss="modal">Danke!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FormCheckOut;