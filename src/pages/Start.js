import Carousel from "../components/Carousel";
import EventListFilterContainer from "../components/EventListFilterContainer";

const Start =  () => {

    return (
        <div id="startPage">
            <Carousel/>
            <h3 className="container-fluid">Veranstaltungen</h3>
            <div className="container-fluid">
                <p>Wähle deinen Hauttyp:</p>
            </div>
            <EventListFilterContainer />
        </div>
    );
}

export default Start;