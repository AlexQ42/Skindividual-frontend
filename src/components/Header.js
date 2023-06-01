import {Link} from "react-router-dom";
import account from "../assets/account.svg";
import cart from "../assets/cart.svg"

const Header =  () => {

    return (
        <div id="header" className="container-fluid">
            <div className="flexSpaceBetween headerContainer">
                <Link id="logo" to="/">Skindividual.</Link>
                <div>
                    <Link className="button headerButton" to="/login">
                        <img className="buttonImage" src={account} alt=""></img>
                        <span>Anmelden</span>
                    </Link>
                    <Link className="button headerButton" to="/cart">
                        <img className="buttonImage" src={cart} alt=""></img>
                        <span>Warenkorb</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;