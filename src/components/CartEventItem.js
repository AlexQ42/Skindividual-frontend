import React from 'react';
import ImgCart2 from "../assets/ImgCart2.svg";
import SkinTypeTag from "./SkinTypeTag";
import Counter from "./Counter";



const CartEventItem = () => {
    return (
    <div className="eventBox2 itemC">
        <img className="PicCart " src={ImgCart2} alt=""></img>
        <div className="heading">
            <h2> Microneedling </h2>
            <p> München </p>
            <p> 15.07.2023 </p>
        </div>
        <div  className="flexCart">
           <SkinTypeTag  skinType="dry"/>
            <div className="counter">
                <Counter/>
            </div>
            <h4 className="priceEventBox counter">{"21"}€ <span>/ Person</span> </h4>
        </div>


    </div>

    );
};

export default CartEventItem;