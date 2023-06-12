import EventBox from "./EventBox";

const EventBoxList = ({list}) => {



    return <div className="flexEventList">
            {(list !== null && list.length !== 0)
                ? list.map((singleEvent, i) => <EventBox key={i} eventObject={singleEvent}></EventBox>)
                : <p className="emptyListText">Keine Ergebnisse</p>}
        </div>
}

export default EventBoxList;