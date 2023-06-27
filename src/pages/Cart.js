import {Link} from "react-router-dom";
import CartContent from "../components/CartContent";
import {getCartTotal} from "../api/CartService";
import {useEffect, useState} from "react";


const Cart =  () => {

    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => setCartTotal(getCartTotal()), 1000);
    }, [])

    return (
        <div id="cartPage">
            <CartContent />
            <br/>
            <div className="flexSpaceBetween borderTop sumBox">
                <span className="biggerText">Gesamtsumme: </span><span className="biggerText">{cartTotal}€</span>
            </div>
            <div className="flexRight toCheckoutButton">
                <Link to="/checkout"><button className="button headerButton">Zur Kasse</button></Link>
            </div>
        </div>
    );
}

export default Cart;