import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventByID} from "../api/EventAccessor";

const EventDescriptionFaq = () => {

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
                    <h5 className="title">Vorteile</h5>
                    <p className="text-start">{eventObject.description}</p>
                </div>
                <div className="detail2">
                    <h5 className="title">Personen, die diese Behandlung vermeiden sollten:</h5>
                    <p className="text-start">{eventObject.description}</p>
                </div>
                <div className="detail2">
                    <h5 className="title">Wie schmerzhaft ist die Behandlung?</h5>
                    <p className="text-start">{eventObject.description}</p>
                </div>
            </div>
        </div>
    )
}
export default EventDescriptionFaq;