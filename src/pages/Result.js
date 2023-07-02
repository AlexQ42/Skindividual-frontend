import React, {useEffect, useState} from "react";
import TestPageBanner2 from "../components/TestPageBanner2";
import EventBoxListContainer from "../components/EventBoxListContainer";
import {getEventByID} from "../api/EventAccessor";
import {useParams} from "react-router-dom";

const Result =  () => {

    const { id } = useParams();
    const [eventObject, setEventObject] = useState([]);

    useEffect(() => {
        function fetchData()
        {
            getEventByID(id).then((result) =>
                {
                    result !== [] ? setEventObject(result[0]) : setEventObject([]);
                }
            )
        }
        fetchData();}, [id]);

    return (
    <div>
        <div>
            <TestPageBanner2/>
        </div>
        <div className="resultSkinTypeBox">
            <span><h3>Dein Hauttyp:</h3></span>
            <div className="resultSkinType">
                <span><h3 className="resultTitle flexCenter">Ergebnis</h3></span>
            </div>
            <div className="resultDescription">
                <div className="resultAttribute">
                    <span><h4>Eigenschaft</h4></span>
                    <span><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. Lorem ipsum dolor sit amet.</p></span>
                </div>
                <div>
                    <span><h4>Pflege</h4></span>
                    <span><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p></span>

                </div>
            </div>
            <div className="resultSaveButton flexRight">
                <button className="button">Im Profil speichern</button>
            </div>
        </div>
        <div>
            <span><h3>Empfohlen für dich:</h3></span>
            <EventBoxListContainer class="container-fluid" query={"skintype="+(eventObject.skinType)+"&"} page={1} perPage={4} showPagination={false}/><br/>
        </div>
    </div>
    );
}

export default Result;