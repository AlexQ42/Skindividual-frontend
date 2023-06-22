import React from 'react';
import CartEventItem from "../components/CartEventItem";
import cartThumbnail from "../assets/cartThumbnail.svg";


const CartContent = () => {
    return (
        <div>
            <img className="cartImg" src={cartThumbnail} alt=""></img>
            <CartEventItem />
        </div>
    );
};

export default CartContent;