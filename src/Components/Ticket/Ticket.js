import './Ticket.css';

function Ticket({party, onClick}) {
    return (
        <div className="ticket" style={{borderColor: party.color}} onClick={() => onClick(party.id)}>
            {party.name}
        </div>
    );
}

export default Ticket;