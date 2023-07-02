import {Link} from "react-router-dom";
import CartContent from "../components/CartContent";
import {getCart, getCartTotal} from "../api/CartService";
import React, {useEffect, useState} from "react";
import AuthService from "../api/AuthService";


const Cart =  () => {

    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => setCartTotal(getCartTotal()), 1000);
    }, [])

    return (
        <div id="cartPage">
            <br/>
            <CartContent />
            <br/>
            <div className="flexSpaceBetween borderTop sumBox">
                <span className="biggerText">Gesamtsumme: </span><span className="biggerText">{cartTotal}€</span>
            </div>
            <div className="flexRight toCheckoutButton">
                <Link to="/checkout" hidden={(getCart().length === 0 || AuthService.getCurrentUser() === null)}>
                    <button className="button headerButton">Zur Kasse</button>
                </Link>
                <button type="button" className="button btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden={(getCart().length !== 0 && AuthService.getCurrentUser() !== null)}>
                    Zur Kasse
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{AuthService.getCurrentUser() === null? "Bitte melde dich an" : "Nichts im Warenkorb"}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {AuthService.getCurrentUser() === null? "Du benötigst ein Skindividual Konto, um einzukaufen." : "Lege die gewünschten Artikel in den Warenkorb, um sie zu bestellen."}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn button Danke" data-bs-dismiss="modal">Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;