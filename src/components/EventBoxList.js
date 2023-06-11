import {useEffect, useState} from "react";
import EventBox from "./EventBox";
import {getEventList} from "../api/EventAccessor";

const EventBoxList = ({query}) => {
    const [resultEventList, setResultEventList] = useState([]);



    useEffect(() => {
        async function fetchData()
        {
            setResultEventList(await getEventList(query));
            console.log(resultEventList.current_page);  //TODO is undefined!
        }
        fetchData();
    }, [query]);


    return <div className="eventBoxList row">
        <div className="flexEventList">
            {(resultEventList !== null && resultEventList.length !== 0)
                ? resultEventList.map((singleEvent, i) => <EventBox key={i} eventObject={singleEvent}></EventBox>)
                : <p className="emptyListText">Keine Ergebnisse</p>}

        </div>
    </div>
}

export default EventBoxList;