import React, {useEffect, useState} from 'react';
import CartEventItem from "../components/CartEventItem";
import cartThumbnail from "../assets/cartThumbnail.svg";
import {getCart} from "../api/CartService";


const CartContent = () => {

    let component = this;

    const [cartObjects, setCartObjects] = useState([]);
    const [updateState, setUpdateState] = useState(0);


    useEffect(() => {
        setCartObjects(getCart() ?? [])
    }, [])


    return (
        <div>
            <img className="cartImg" src={cartThumbnail} alt=""></img>
            {(cartObjects !== null && cartObjects.length !== 0)
                ? cartObjects.map((object, i) => <CartEventItem key={i} event={object.event} amount={object.amount}></CartEventItem>)
                : <p className="emptyListText">Gähnende Leere...</p>}
        </div>
    );
};

export default CartContent;