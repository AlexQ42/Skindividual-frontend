import React from 'react';
import ImgCart2 from "../assets/ImgCart2.svg";
import SkinTypeTag from "./SkinTypeTag";
import Counter from "./Counter";
import bin from "../assets/bin.png";
import {changeAmountInCart, deleteFromCart} from "../api/CartService";



const CartEventItem = ({event, amount}) => {

    const counterCallback = (counterValue) => {
        changeAmountInCart(event, counterValue);
    }

    function handleDelete()
    {
        deleteFromCart(event);
        window.location.reload();
    }

    return (
    <div className="eventBox2 itemC">
        <img className="PicCart " src={ImgCart2} alt=""></img>
        <div className="flexSpaceBetween widthInherit">
            <div className="heading">
                <h2>{event.name}</h2>
                <p>{event.place}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <div>
                <div  className="flexCart">
                   <div className="cartItemMargin">
                       <SkinTypeTag skinType={event.skinType}/>
                   </div>
                    <div className="counter cartItemMargin">
                        <Counter initialValue={amount} counterCallback={counterCallback}/>
                    </div>
                    <button className="button"><img onClick={() => handleDelete()} className="buttonImage buttonImageNoMargin" src={bin} alt="löschen"></img></button>
                    <h4 className="priceEventBox counter">{event.price}€ <span>/ Person</span> </h4>
                </div>
            </div>
        </div>


    </div>

    );
};

export default CartEventItem;