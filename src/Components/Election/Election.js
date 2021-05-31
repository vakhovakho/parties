import { useState } from "react";
import Results from "../Results/Results";
import TicketBox from "../TicketBox/TicketBox";
import './Election.css';

function Election({parties}) {
    const [partiesData, setPartiesData] = useState(parties);
    const [maxVotes, setMaxVotes] = useState(0);

    const findParty = (parties, partyId) => parties.find(party => party.id === partyId);

    const reorderPositions = parties => {
        const onlyVotes = parties.map((party, index) => ({index: index, votes: party.votes}));
        onlyVotes.sort((a,b) => b.votes - a.votes);
        onlyVotes.forEach((element, index) => {
            parties[element.index].position = index + 1;
        });
    }

    const updateVotes = partyId => {
        const newData = partiesData.map(party => ({...party}));
        const currentParty = findParty(newData, partyId);
        if(currentParty) {
            currentParty.votes++;
            if(currentParty.votes > maxVotes) {
                setMaxVotes(currentParty.votes);
            }

            reorderPositions(newData);
            setPartiesData(newData);
        }
    }

    return (
        <div className="election">
            <TicketBox parties={parties} updateHandler={updateVotes} />
            <Results parties={partiesData} maxVotes={maxVotes}/>
        </div>
    )
}

export default Election;