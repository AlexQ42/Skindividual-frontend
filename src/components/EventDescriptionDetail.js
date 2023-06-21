import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventByID} from "../api/EventAccessor";

const EventDescriptionDetail = () => {

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
            <div className="eventDescriptionContent">
                <div className="detail1">
                    <h5>Was ist {eventObject.name}?</h5>
                    <span className="text-start">{eventObject.description}</span>
                </div>
                <div className="detail2">
                    <h5 className="detail2">Behandlungsablauf</h5>
                    <span className="text-start">{eventObject.description}</span>
                </div>
            </div>
        </div>
    )
}
export default EventDescriptionDetail;