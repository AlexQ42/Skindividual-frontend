import React, {useRef, useState} from 'react';


const Counter = () =>{
    const [ticketCounterValue, setTicketCounterValue] = useState(1);
    const ticketCounter = useRef(null);

    function handleIncrementTickets() {
        if(ticketCounterValue < 10) setTicketCounterValue(ticketCounterValue+1);
    }

    function handleDecrementTickets() {
        if(ticketCounterValue > 1) setTicketCounterValue(ticketCounterValue-1);
    }

    return(
        <div className="amountInCart flexSpaceBetween">
            <button className="button decrement" onClick={handleDecrementTickets}>-</button>
            <input className="amountInput" ref={ticketCounter} readOnly type="text" value={ticketCounterValue} min="1" max="10"/>
            <button className="button increment" onClick={handleIncrementTickets}>+</button>
        </div>
    );
};

export default Counter;