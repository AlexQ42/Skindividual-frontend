import {useEffect, useState} from "react";
import {getEventList} from "../api/EventAccessor";
import EventBoxList from "./EventBoxList";

function EventBoxListContainer({query, showPagination, page, perPage}) {
    const [resultEventList, setResultEventList] = useState([]);
    const [apiResponse, setApiResponse] = useState([]);
    const [paginationInfo, setPaginationInfo] = useState([page, perPage]);

    let totalPages = apiResponse.last_page;
    let currentPage = apiResponse.current_page;

    useEffect(() => {
        updateComponent();
    }, [query, paginationInfo]);

    function updateComponent()
    {
        // TODO always reset page to 1 when filter has changed

        let fullQuery = ("/events?"+query+"page="+paginationInfo[0]+"&perpage="+paginationInfo[1]);
        async function fetchData()
        {
            const data = await getEventList(fullQuery)
            setResultEventList(data.data);
            setApiResponse(data);
            if(data.last_page < data.current_page)
            {
                fullQuery = ("/events?"+query+"page="+1+"&perpage="+paginationInfo[1]);
                setPaginationInfo([1, paginationInfo[1]]);
                const data = await getEventList(fullQuery)
                setResultEventList(data.data);
                setApiResponse(data);
            }
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
                    <button className="page-link" onClick={() => handlePaginationClick("prev")}>Vorherige</button>
                </li>
                {pageButtonArray}
                <li className={"page-item "+(currentPage >= totalPages ? "disabled" : "")}>
                    <button className="page-link" onClick={() => handlePaginationClick("next")}>Nächste</button>
                </li>
            </ul>
        </nav>
    }

    return <div className="eventBoxList">
        <EventBoxList list={resultEventList} />
        <div className="paginationContainer">
            {paginationComponent}
        </div>
    </div>

}

export default EventBoxListContainer;