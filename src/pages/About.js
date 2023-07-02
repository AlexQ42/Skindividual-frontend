import Carousel from "../components/Carousel";
import individual from "../assets/individual.png"
import professional from "../assets/professional.png"
import nachhaltig from "../assets/nachhaltig.png"

const About =  () => {

    return (
        <div id="aboutPage">
            <Carousel showButton={false} />
            <h3 className="container-fluid headlineAbout">Unsere Philosophie</h3>
            <p className="aboutPageTextContainer">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est aliquyam erat.</p>
            <br></br>
            <h4 className="container-fluid headline">Individuelle Pflege</h4>
            <p className="aboutPageTextContainer">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                <br></br>Labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <img src={individual} className="aboutPageImage1" alt=""/>
            <h4 className="container-fluid headline">Professionelle Behandlungen, die wirken</h4>
            <p className="aboutPageTextContainer">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            <img src={professional} className="aboutPageImage2" alt=""/>
            <h4 className="container-fluid headline">Nachhaltigkeit</h4>
            <p className="aboutPageTextContainer">Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam:</p>
            <br></br>
                <ul>
                    <li>Nonumy eirmod tempor invidunt ut labore et dolore magna</li>
                    <li>Aliquyam erat, sed diam voluptua</li>
                    <li>At vero eos et accusam et justo duo dolores et ea rebum</li>
                    <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
                </ul>
            <p className="aboutPageTextContainer">Labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
            <img src={nachhaltig} className="aboutPageImage3" alt=""/>
        </div>
    );
}

export default About;