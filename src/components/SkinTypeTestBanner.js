import {Link} from "react-router-dom";

const SkinTypeTestBanner = () => {
    return (
        <div className="skinTypeTestBanner">
            <div className="testBannerInner">
                <div className="testTitel">
                    <h2>Was ist dein</h2>
                    <h1>Hauttyp?</h1>
                </div>
                <div className="textTextButton">
                    <div className="testText">
                        <h4>Kennst du schon deinen Hauttyp?</h4>
                        <p>Er ist die Grundlage für deine ideale Skincare-Routine. Finde mithilfe unseres <b>5-Minuten-Onlinetests</b> ganz einfach heraus, welche Pflege deiner Haut gut tut!</p>
                    </div>
                    <Link className="button carouselButton" to="/Test">
                        <span>zum Hauttyp-Test</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SkinTypeTestBanner;