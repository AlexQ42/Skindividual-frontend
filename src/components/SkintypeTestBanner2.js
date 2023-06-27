import bannerlpers from "../assets/bannerlpers.svg";
import {Link} from "react-router-dom";
const SkinTypeTestBanner2 = () => {
    return (
    <div className="bannerBackground">
        <div className="flexLeft">
            <img src={bannerlpers} alt="Banner"></img>
        </div>
        <div className="bannerText">
            <div className="testText">
                <span>Er ist die Grundlage für deine ideale Skincare-Routine. Finde mithilfe unseres <b>5-Minuten-Onlinetests</b> ganz einfach heraus, welche Pflege deiner Haut gut tut!</span>
            </div>
            <div>
                <Link className="button carouselButton" to="/Test">
                    <span>zum Hauttyp-Test</span>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default SkinTypeTestBanner2;