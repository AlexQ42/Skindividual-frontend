import {useEffect, useRef, useState} from "react";
import search from "../assets/search.svg";
import EventBoxListContainer from "./EventBoxListContainer";


const EventListFilterContainer = () => {

    const [skinTypeInput, setSkinTypeInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [eventTypeInput, setEventTypeInput] = useState('');
    const [placeInput, setPlaceInput] = useState('');
    const [sortInput, setSortInput] = useState('');
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const [query, setQuery] = useState('')

    const searchField = useRef(null);
    const skinTypeAllSelectButton = useRef(null)

    function handleSkinTypeInput(input)
    {
        setSkinTypeInput(input);
    }

    function handleApply()
    {
        let newQuery =
            (searchInput !== '' ? ("search="+searchInput+"&") : "") +
            (skinTypeInput !== '' ? ("skintype="+skinTypeInput+"&") : "") +
            (eventTypeInput !== '' ? ("eventtype="+eventTypeInput+"&") : "") +
            (placeInput !== '' ? ("place="+placeInput+"&") : "") +
            (sortInput !== '' ? ("sort="+sortInput+"&") : "");
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
        setQuery('');
        searchField.current.value = "";
        skinTypeAllSelectButton.current.checked = true;
    }

    return (
        <div className="eventListFilterContainer">
            <div className="skinTypeFilter">
                <input ref={skinTypeAllSelectButton} type="radio" className="btn-check" name="options" id="option1" autoComplete="off" onChange={e => {handleSkinTypeInput("");}}></input>
                <label className="btn btn-secondary skinTypeFilterButtonAll" htmlFor="option1">alle</label>
                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" onChange={e => {handleSkinTypeInput("normal");}}></input>
                <label className="btn btn-secondary skinTypeFilterButtonNormal" htmlFor="option2" >normal</label>
                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" onChange={e => {handleSkinTypeInput("oily");}}></input>
                <label className="btn btn-secondary skinTypeFilterButtonOily" htmlFor="option3" >ölig</label>
                <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" onChange={e => {handleSkinTypeInput("combination");}}></input>
                <label className="btn btn-secondary skinTypeFilterButtonCombination" htmlFor="option4" >Mischhaut</label>
                <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off" onChange={e => {handleSkinTypeInput("dry");}}></input>
                <label className="btn btn-secondary skinTypeFilterButtonDry" htmlFor="option5" >trocken</label>
                <input type="radio" className="btn-check" name="options" id="option6" autoComplete="off" onChange={() => {handleSkinTypeInput("sensitive");}}></input>
                <label className="btn btn-secondary skinTypeFilterButtonSensitive" htmlFor="option6">sensibel</label>
            </div>
            <div className="filtersAndSearch">
                <div className="searchContainer">
                    <input className="search" ref={searchField} type="search" onInput={e => setSearchInput(e.currentTarget.value)}/>
                    <button className="button searchButton" onClick={handleApply}><img src={search} alt="suchen"></img></button>
                </div>
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
                    <option defaultValue="" value="">Sortierung</option>
                    <option value="reviews">Bewertung</option>
                    <option value="date">Termin</option>
                    <option value="price">Preis</option>
                </select>
                <button className="button" onClick={handleApply}>Anwenden</button>
                <button className="button" onClick={handleResetFilters}>Zurücksetzen</button>
            </div>
            <EventBoxListContainer className="container-fluid" query={query} showPagination={true} page={1} perPage={6}/>
        </div>
    )
}

export default EventListFilterContainer;

