import React, {useEffect, useState} from 'react';
import CartEventItem from "../components/CartEventItem";
import cartThumbnail from "../assets/cartThumbnail.png";
import {getCart} from "../api/CartService";


const CartContent = () => {


    const [cartObjects, setCartObjects] = useState([]);


    useEffect(() => {
        setCartObjects(getCart() ?? [])
    }, [])


    return (
        <div>
            <img className="cartImg" src={cartThumbnail} alt="Warenkorb"></img>
            {(cartObjects !== null && cartObjects.length !== 0)
                ? cartObjects.map((object, i) => <CartEventItem key={i} event={object.event} amount={object.amount}></CartEventItem>)
                : <p className="emptyListText">Gähnende Leere...</p>}
        </div>
    );
};

export default CartContent;