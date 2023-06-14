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
        <div className="eventDescriptionBox">
            <div className="flexLeft">
                <img className="eventExpertImage" src={imageCosmetician} alt=""></img>
            </div>
            <div className="eventDescriptionContent flexSpaceBetween">
                <div>
                    <h5 className="title">Name</h5>
                    <p className="text-start">{eventObject.description}</p>
                </div>
            </div>
        </div>
    )
}
export default EventDescriptionExpert;