import {useEffect, useState} from 'react';
import React from 'react';
import payPal from "../assets/PayPal.svg"
import klarna from "../assets/Klarna.svg"
import visa from "../assets/visa.svg"
import masterCard from "../assets/MasterCard.svg"
import {postOrder} from "../api/OrderAccessor";
import {getCart, getCartTotal} from "../api/CartService";
import {getUser} from "../api/UserAccessor";
import CheckoutEventBox from "./CheckoutEventBox";



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
                <div>
                    <p>Anrede:</p>
                    <span>
                        <input className="input radioB"
                               type="radio"
                               name="option"
                               value="Keine"
                               defaultChecked={true}
                        />
                        <span className="qq">Keine</span>
                    </span>
                    <span>
                        <input className="input radioB radioBMann"
                               type="radio"
                               name="option"
                               value="Frau"
                        />
                        <span className="qq">Frau</span>
                    </span>
                    <span>
                        <input className="input radioB radioBMann"
                               type="radio"
                               name="option"
                               value="Herr"
                        />
                        <span className="qq">Herr</span>
                    </span>
                </div>
                <br/>
                <div className="bottomForm flexSpaceBetween">
                    <span className="nameInputs">
                        <p>Vorname:*</p>
                        <input className="input" type="text" defaultValue={user !== null? user.firstname : ""}/>
                    </span>
                    <span>
                        <p>Nachname:*</p>
                        <input className="input" type="text" defaultValue={user !== null? user.lastname : ""}/>
                    </span>
                </div>
                <br/>

                <div className="flexSpaceBetween">
                    <div className="emailTelInputs">
                        <label htmlFor="email"> E-Mail:*</label>
                        <br/>
                        <input name="email" className="input" type="text" defaultValue={user !== null? user.email : ""}/>
                    </div>

                    <div>
                        <label htmlFor="telefonNr"> Telefonnummer:*</label>
                        <br/>
                        <input name="telefonNr" className="input" type="text" />
                    </div>
                </div>

                <p className="Pflichtfeld">*=Pflichtfelder</p>

                <div className="SummeB">
                    <div className="Zahlungsart">Zahlungsart</div>
                    <div className="payment">
                        <span>
                            <input className="input radioB"
                                   type="radio"
                                   name="optionZ"
                                   value="PayPal"
                            />
                        </span>
                        <img className="bImage paypal" src={payPal} alt="Paypal"></img>
                        <span>
                            <input className="input radioB spaceLeft"
                                   type="radio"
                                   name="optionZ"
                                   value="Klarna"
                            />
                            <img className="bImage" src={klarna} alt="Klarna"></img>
                        </span>
                        <span>
                            <input className="input radioB spaceLeft"
                                   type="radio"
                                   name="optionZ"
                                   value="Visa"
                            />
                            <img className="bImage visa" src={visa} alt="Visa Card"></img>
                        </span>
                        <span>
                            <input className="input radioB spaceLeft"
                                   type="radio"
                                   name="optionZ"
                                   value="MasterCard"
                            />
                            <img className="bImage master" src={masterCard} alt="Mastercard"></img>
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid2 ">
                <div className="SummeBox secondContainer">
                    <h3> Bestellübersicht </h3>
                    {
                        showCartContentList()
                    }
                    <div className="Rabatt checkoutBox formBox">
                        <div>
                            <h4> Rabatt </h4>
                            <div className="flexSpaceBetween">
                                <input className="input" type="text"/>
                                <button className="keinButton notRegisteredLink applyDiscountLink"> Rabatt anwenden </button>
                            </div>
                        </div>

                    </div>
                    <div className="checkoutBox formBox sumBox">
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