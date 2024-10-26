import TicketNum from "../TicketNum/TicketNum";
import "./Ticket.css"
export default function Ticket({ticket}) {
    return (
        <>
        <p>Ticket Number!</p>
        <div className="Ticket">
            {ticket.map( (num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
        </>
    );
}