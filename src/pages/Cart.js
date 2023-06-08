import {Link} from "react-router-dom";


const Cart =  () => {

    return (
        <div id="cartPage">
            <Link className="button headerButton" to="/checkout">Zur Kasse</Link>
        </div>
    );
}

export default Cart;