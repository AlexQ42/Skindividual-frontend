import {Link} from "react-router-dom";
import CartContent from "../components/CartContent";


const Cart =  () => {

    return (
        <div id="cartPage">
            <CartContent />
            <Link className="button headerButton" to="/checkout">Zur Kasse</Link>
        </div>
    );
}

export default Cart;