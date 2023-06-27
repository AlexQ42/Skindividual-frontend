import React from "react";

const CheckoutEventBox = ({ticket}) =>
{
    return <div className="eventBox checkoutEventBox">
        <h5>{(ticket !== undefined ? ticket.amount : "") + " x " + (ticket !== undefined ? ticket.event.name : "")}</h5>
        <p>{(ticket !== undefined ? new Date(ticket.event.date).toLocaleDateString() : "") + " in " + (ticket !== undefined ? ticket.event.place : "")}</p>
    </div>
}

export default CheckoutEventBox;