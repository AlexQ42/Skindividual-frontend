import {useEffect, useState} from "react";
import {getEventList} from "../api/EventAccessor";
import EventBoxList from "./EventBoxList";

function EventBoxListContainer({query, showPagination, page, perPage}) {
    const [resultEventList, setResultEventList] = useState([]);
    const [apiResponse, setApiResponse] = useState([]);
    const [paginationInfo, setPaginationInfo] = useState([page, perPage]);
    const [message, setMessage] = useState("");

    let totalPages = apiResponse.last_page;
    let currentPage = apiResponse.current_page;

    useEffect(() => {
        updateComponent();
    }, [query, paginationInfo]);

    function updateComponent()
    {
        let fullQuery = ("/events?"+query+"page="+paginationInfo[0]+"&perpage="+paginationInfo[1]);
        async function fetchData()
        {
            getEventList(fullQuery).then((response) =>
            {
                setResultEventList(response.data.data);
                setApiResponse(response.data);
                if(response.last_page < response.current_page)
                {
                    fullQuery = ("/events?"+query+"page="+1+"&perpage="+paginationInfo[1]);
                    setPaginationInfo([1, paginationInfo[1]]);
                    getEventList(fullQuery).then((response) =>
                    {
                        setResultEventList(response.data.data);
                        setApiResponse(response.data);
                    });
                }
                setMessage("");
            },
                (error) =>
                {
                    console.log("Hi");
                    console.log(error);
                    const resMessage =
                        (
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    if(resMessage.includes("The enddate field must be a date after or equal to startdate."))
                    {
                        setMessage("Das Enddatum des Zeitraums muss gleich oder später als das Startdatum sein.")
                    }
                    else setMessage(resMessage);
                }
            );
        }
        fetchData();
    }

    function handlePaginationClick(key) {

        switch (key) {
            case "prev": if(currentPage > 1) setPaginationInfo([currentPage-1, perPage]); break;
            case "next": if(currentPage > 0 && currentPage < totalPages) setPaginationInfo([currentPage+1, perPage]); break;
            default: setPaginationInfo([key, perPage]);
        }

        updateComponent();
    }

    let pageButtonArray = [];

    for(let i = 1; i <= totalPages; i++)
    {
        pageButtonArray.push(
            <li key={i} className={"page-item "+(currentPage === i ? "active" : "")}>
                <button className="page-link" onClick={() => handlePaginationClick(i)}>{i}</button>
            </li>
        );
    }

    let paginationComponent = ""

    if(totalPages > 0 && showPagination) {
        paginationComponent = <nav>
            <ul className="pagination justify-content-center">
                <li className={"page-item "+(currentPage <= 1 ? "disabled" : "")}>
                    <button className="page-link reverse" onClick={() => handlePaginationClick("prev")}>›</button>
                </li>
                {pageButtonArray}
                <li className={"page-item "+(currentPage >= totalPages ? "disabled" : "")}>
                    <button className="page-link" onClick={() => handlePaginationClick("next")}>›</button>
                </li>
            </ul>
        </nav>
    }

    return <div className="eventBoxList">
        <p className="error alert alert-danger" hidden={message === ""}>{message}</p>
        <EventBoxList list={resultEventList} />
        <div className="paginationContainer">
            {paginationComponent}
        </div>
    </div>

}

export default EventBoxListContainer;