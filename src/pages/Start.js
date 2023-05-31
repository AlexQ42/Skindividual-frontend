import {login} from "../api/LoginManager";
import EventBoxList from "../components/EventBoxList";

const Start =  () => {

    return (
        <div id="startPage">
            <input id="inputEmail" type="text"/>
            <input id="inputPassword" type="password"/>
            <button onClick={login()}>Anmelden</button>
            <EventBoxList class="container-fluid" query="/events?page=1&per-page=6"/>
        </div>
    );
}

export default Start;