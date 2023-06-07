import EventBoxList from "./EventBoxList";
import {useEffect, useRef, useState} from "react";

const EventListFilterContainer = () => {

    const [skinTypeInput, setSkinTypeInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [eventTypeInput, setEventTypeInput] = useState('');
    const [placeInput, setPlaceInput] = useState('');
    const [sortInput, setSortInput] = useState('');
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const [query, setQuery] = useState('/events?page=1&per-page=6')

    const searchField = useRef(null);
    const skinTypeAllSelectButton = useRef(null)

    function handleSkinTypeInput(input)
    {
        setSkinTypeInput(input);
    }

    function handleApply()
    {
        let newQuery =
            "/events?" +
            (searchInput !== '' ? ("search="+searchInput+"&") : "") +
            (skinTypeInput !== '' ? ("skintype="+skinTypeInput+"&") : "") +
            (eventTypeInput !== '' ? ("eventtype="+eventTypeInput+"&") : "") +
            (placeInput !== '' ? ("place="+placeInput+"&") : "") +
            (sortInput !== '' ? ("sort="+sortInput+"&") : "") +
            "page=1&per-page=6";
        console.log(query);
        setQuery(newQuery);
    }

    function handleResetFilters()
    {
        setSkinTypeInput("");
        setEventTypeInput("");
        setPlaceInput("");
        setSearchInput("");
        setSortInput("");
        setQuery('/events?page=1&per-page=6');
        searchField.current.value = "";
        skinTypeAllSelectButton.current.checked = true;
    }

    return (
        <div className="eventListFilterContainer">
            <div id="skinTypeFilter">
                <input ref={skinTypeAllSelectButton} type="radio" className="btn-check" name="options" id="option1" autoComplete="off" onChange={e => handleSkinTypeInput("")}></input>
                <label className="btn btn-secondary" htmlFor="option1">alle</label>
                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" onChange={e => handleSkinTypeInput("normal")}></input>
                <label className="btn btn-secondary" htmlFor="option2" >normal</label>
                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" onChange={e => setSkinTypeInput("oily")}></input>
                <label className="btn btn-secondary" htmlFor="option3" >ölig</label>
                <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" onChange={e => setSkinTypeInput("combination")}></input>
                <label className="btn btn-secondary" htmlFor="option4" >Mischhaut</label>
                <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off" onChange={e => setSkinTypeInput("dry")}></input>
                <label className="btn btn-secondary" htmlFor="option5" >trocken</label>
                <input type="radio" className="btn-check" name="options" id="option6" autoComplete="off" onChange={() => setSkinTypeInput("sensitive")}></input>
                <label className="btn btn-secondary" htmlFor="option6">sensibel</label>
            </div>
            <input className="search" ref={searchField} type="text" onInput={e => setSearchInput(e.currentTarget.value)}/>
            <button onClick={handleApply}>Suchen</button>
            <select className="form-select dropdown" aria-label="Select event type" onChange={(e) => setEventTypeInput(e.target.value)}>
                <option defaultValue="" value="">Eventtyp</option>
                <option value="treatment">Behandlung</option>
                <option value="counselling">Beratung</option>
                <option value="course">Kurs</option>
                <option value="wellness">Wellness</option>
            </select>
            <select className="form-select dropdown" aria-label="Select place" onChange={(e) => setPlaceInput(e.target.value)}>
                <option defaultValue="" value="">Ort</option>
                <option value="Berlin">Berlin</option>
                <option value="Hamburg">Hamburg</option>
                <option value="München">München</option>
                <option value="Nürnberg">Nürnberg</option>
            </select>
            <select className="form-select dropdown" aria-label="Select sorting" onChange={(e) => setSortInput(e.target.value)}>
                <option defaultValue="" value="">Sortieren nach</option>
                <option value="reviews">Bewertung</option>
                <option value="date">Termin</option>
                <option value="price">Preis</option>
            </select>
            <button onClick={handleApply}>Anwenden</button>
            <button onClick={handleResetFilters}>Zurücksetzen</button>
            <EventBoxList className="container-fluid" query={query}/>
        </div>
    )
}

// hier Paging Buttons und Filter und Suchleiste einbauen und damit die query bauen, die dann an EventBoxList übergeben wird

export default EventListFilterContainer;

