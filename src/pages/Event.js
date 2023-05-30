import EventBoxList from "../components/EventBoxList";

const Event =  () => {

    return (
        <div id="eventPage">
            <input id="inputEmail" type="text"/>
            <input id="inputPassword" type="password"/>
            <EventBoxList class="container-fluid" query="/events?page=1&per-page=4"/>
        </div>
    );
}

export default Event;