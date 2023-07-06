import React, {useEffect, useState} from 'react';
import CartEventItem from "../components/CartEventItem";
import cartThumbnail from "../assets/cartThumbnail.png";
import {deleteFromCart, getCart, getCartTotal} from "../api/CartService";


const CartContent = () => {


    const [cartObjects, setCartObjects] = useState([]);
    const [cartTotal, setCartTotal] = useState(0)

    const deleteCallback = (event) =>
    {
        deleteFromCart(event);
    }

    useEffect(() => {
        setCartObjects(getCart() ?? [])
        setCartTotal(getCartTotal() ?? 0)
    }, [cartObjects, cartTotal])


    return (
        <div>
            <div>
                <img className="cartImg" src={cartThumbnail} alt="Warenkorb"></img>
                {(cartObjects !== null && cartObjects.length !== 0)
                    ? cartObjects.map((object, i) => <CartEventItem key={i} event={object.event} amount={object.amount} deleteCallback={deleteCallback}></CartEventItem>)
                    : <p className="emptyListText">Gähnende Leere...</p>}
            </div>
            <br/>
            <div className="flexSpaceBetween borderTop sumBox">
                <span className="biggerText">Gesamtsumme: </span><span className="biggerText">{cartTotal}€</span>
            </div>
        </div>
    );
};

export default CartContent;