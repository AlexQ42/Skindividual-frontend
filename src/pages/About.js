

const About =  () => {

    return (
        <div id="aboutPage">
            <input id="inputEmail" type="text"/>
            <input id="inputPassword" type="password"/>
            <button onClick={login()}>Anmelden</button>
            <EventBoxList class="container-fluid" query="/events?page=1&per-page=6"/>
        </div>
    );
}

export default About;