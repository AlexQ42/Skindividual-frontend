import React from 'react';
import SkinTypeTag from "./SkinTypeTag";
import Counter from "./Counter";
import bin from "../assets/bin.png";
import {changeAmountInCart, deleteFromCart} from "../api/CartService";
import {Link} from "react-router-dom";



const CartEventItem = ({event, amount, deleteCallback}) => {

    const counterCallback = (counterValue) => {
        changeAmountInCart(event, counterValue);
    }
    const imageUrl = "../event"+event.id+".jpg";


    return (
    <div className="eventBox2 itemC">
        <img className="PicCart " src={imageUrl} alt=""></img>
        <div className="flexSpaceBetween widthInherit">
            <Link to={"/events/"+event.id} className="heading noLink">
                <h2>{event.name}</h2>
                <p>{event.place}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
            </Link>
            <div>
                <div  className="flexCart">
                   <div className="cartItemMargin">
                       <SkinTypeTag skinType={event.skinType}/>
                   </div>
                    <div className="counter cartItemMargin">
                        <Counter initialValue={amount} counterCallback={counterCallback} upperLimit={event.availableSpots ?? 1}/>
                    </div>
                    <button className="button"><img onClick={() => deleteCallback(event)} className="buttonImage buttonImageNoMargin" src={bin} alt="löschen"></img></button>
                    <h4 className="priceEventBox counter">{event.price}€ <span>/ Person</span> </h4>
                </div>
            </div>
        </div>


    </div>

    );
};

export default CartEventItem;