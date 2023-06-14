import {useEffect, useState} from "react";
import {getEventByID, getEventList} from "../api/EventAccessor";
import {useParams} from "react-router-dom";
import EventDescriptionDetail from "./EventDescriptionDetail";
import EventDescriptionExpert from "./EventDescriptionExpert";
import EventDescriptionFaq from "./EventDescriptionFaq";

const EventDescription = () => {

    const { id } = useParams();
    const [eventObject, setEventObject] = useState([]);
    const [showComponent, setShowComponent] = useState (<EventDescriptionDetail/>)

    useEffect(() => {
        async function fetchData()
        {
            const result = await getEventByID(id);
            result !== [] ? setEventObject(result[0]) : setEventObject([]);
        }
        fetchData();}, [id]);

    function handleClick(key) {
        switch(key) {
            case 'detail':
                setShowComponent(<EventDescriptionDetail/>);
                break;
            case 'expert':
                setShowComponent(<EventDescriptionExpert/>);
                break;
            case 'faq':
                setShowComponent(<EventDescriptionFaq/>);
                break;
        }
    }

    return (
        <div className="eventDescription">
            <div className="eventDescriptionSelection">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked={true} onClick={(e) => handleClick("detail")}></input>
                    <label className="btn btn-secondary eventDescriptionDetail" htmlFor="option1" >Details</label>
                    <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" onClick={(e) =>handleClick("expert")}></input>
                    <label className="btn btn-secondary eventDescriptionExpert" htmlFor="option2">Experte</label>
                    <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" onClick={(e)=> handleClick("faq")}></input>
                    <label className="btn btn-secondary eventDescriptionFaq" htmlFor="option3">FAQ</label>
                </div>
            </div>
            {showComponent}
        </div>
    )
}
export default EventDescription;