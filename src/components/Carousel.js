import {Link} from "react-router-dom";


const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div id="carousel1" className="carouselItem">
                        <h2 className="carouselHeadline">Schönheit <br/>im Einklang mit der Natur</h2>
                        <p className="carouselSubHeadline">Wir legen Wert auf Natürlichkeit und Nachhaltigkeit</p>
                        <Link to="/about" className="button carouselButton">Mehr über Skindividual</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <div id="carousel2" className="carouselItem">
                        <h2 className="carouselHeadline"><br/>Deine Haut in guten Händen</h2>
                        <p className="carouselSubHeadline">Genieße Behandlungen von professionellen Kosmetiker:innen</p>
                        <Link to="/about" className="button carouselButton">Mehr über Skindividual </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <div id="carousel3" className="carouselItem">
                        <h2 className="carouselHeadline">Entdecke Behandlungen, <br/>die perfekt zu deinem Hauttyp passen</h2>
                        <p className="carouselSubHeadline">Skincare-Events - so individuell wie deine Haut</p>
                        <Link to="/about" className="button carouselButton">Mehr über Skindividual</Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;