import EventBoxList from "../components/EventBoxList";
import Carousel from "../components/Carousel";

const Start =  () => {

    return (
        <div id="startPage">
            <Carousel/>
            <h3 className="container-fluid">Veranstaltungen</h3>
            <div className="container-fluid">
                <p>Wähle deinen Hauttyp:</p>
            </div>
            <EventBoxList class="container-fluid" query="/events?page=1&per-page=6"/>
        </div>
    );
}

export default Start;