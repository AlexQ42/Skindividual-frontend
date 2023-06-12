import Carousel from "../components/Carousel";
import EventListFilterContainer from "../components/EventListFilterContainer";

const Start =  () => {

    return (
        <div id="startPage">
            <Carousel/>
            <h3 className="container-fluid headline">Veranstaltungen</h3>
            <div className="container-fluid">
                <p>Filter:</p>
            </div>
            <EventListFilterContainer />
        </div>
    );
}

export default Start;