import Ticket from "../Ticket/Ticket";
import './TicketBox.css';

function TicketBox({parties, updateHandler}) {
    return (
        <div className="ticket-box">
            {
                parties.map((party, index) => <Ticket key={index} party={party} onClick={updateHandler} />)
            }
        </div>
    )
}

export default TicketBox;