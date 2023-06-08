import {useEffect, useState} from "react";
import EventBox from "./EventBox";
import {getEventList} from "../api/EventAccessor";

const EventBoxList = ({query}) => {
    const [resultEventList, setResultEventList] = useState([]);



    useEffect(() => {
        async function fetchData()
        {
            setResultEventList(await getEventList(query));
        }
        fetchData();
    }, [query]);



    return <div className="eventBoxList row">
        <div className="flexEventList">
            {
                resultEventList !== null ?
                    resultEventList.map((singleEvent, i) => <EventBox key={i} eventObject={singleEvent}></EventBox>)
                    : <p>Die Liste ist leer.</p>
            }
        </div>
    </div>
}

export default EventBoxList;