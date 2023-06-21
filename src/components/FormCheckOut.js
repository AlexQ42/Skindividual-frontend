import {useState} from 'react';
import React from 'react';
import payPal from "../assets/PayPal.svg"
import klarna from "../assets/Klarna.svg"
import visa from "../assets/visa.svg"
import masterCard from "../assets/MasterCard.svg"
//import Popup from 'reactjs-popup';




const FormCheckOut = () => {
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
                        Frau
                    </label>
                    <label>
                        <input className="input radioB radioBMann"
                               type="radio"
                               name="option"
                               value="Mann"
                        />
                        Mann
                    </label>
                </p>
                <div className="bottomForm">
                    <label className="firstNameLabel">
                        <p>Vorname:*</p>
                        <input className="input" type="text" />
                    </label>
                    <label>
                        <p>Nachname:*</p>
                        <input className="input" type="text" />
                    </label>
                </div>
                <p></p>

                <label className="firstNameLabel">
                    <p> E-Mail:*</p>
                    <input className="input" type="text" />
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
                    <label className="eventBox produktPadding">
                        Hier kommt unser Produkt rein
                    </label>
                    <p></p>
                    <label className="Rabatt" style={{display:'flex'}}>
                        <p>
                            <h4> Rabatt </h4>
                            <input className="input"type="text"/>
                            <button className="keinButton" style={{textDecoration:'underline black'}}> Rabatt anwenden </button>
                        </p>

                    </label>
                    <p></p>
                    <label className="Summe">
                        <h4>Summe</h4>
                        <p> Hier ist die Summe</p>
                    </label>
                    <p></p>
                    <button type="button" className="button btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Kaufen
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