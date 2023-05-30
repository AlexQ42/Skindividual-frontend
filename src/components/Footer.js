import {Link} from "react-router-dom";

const Footer =  () => {

    return (
        <div id="footer">
            <Link to="/about">Über uns</Link>
            <Link to="/imprint">Kontakt | Datenschutz | Impressum</Link>
        </div>
    );
}

export default Footer;