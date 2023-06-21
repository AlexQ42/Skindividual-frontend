import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventByID} from "../api/EventAccessor";
import imageCosmetician from "../assets/imageCosmetician.png";
import imageMicroneedling from "../assets/imageMicroneedling.svg";

const EventDescriptionExpert = () => {

    const { id } = useParams();
    const [eventObject, setEventObject] = useState([]);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        async function fetchData()
        {
            const result = await getEventByID(id);
            result !== [] ? setEventObject(result[0]) : setEventObject([]);
        }
        fetchData();}, [id]);

    return (
        <div className="eventDescriptionBox flexLeft">
            <div className="eventDescriptionContent flexSpaceBetween">
                <div>
                    <img className="eventExpertImage" src={imageCosmetician} alt=""></img>
                </div>
                <div>
                    <h5 className="title">Name</h5>
                    <span>Dr. Vinsloev</span>
                    <div className="eventExpertText">
                        <h5 className="title">Beschreibung</h5>
                        <span className="text-start">{eventObject.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventDescriptionExpert;