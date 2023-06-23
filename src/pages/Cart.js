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
            <div className="flexRight">
                <p>Gesamtsumme: <span>{cartTotal}</span> €</p>
            </div>
            <div className="flexRight toCheckoutButton">
                <Link className="button headerButton" to="/checkout">Zur Kasse</Link>
            </div>
        </div>
    );
}

export default Cart;