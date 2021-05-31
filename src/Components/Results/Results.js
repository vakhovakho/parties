import calculateAllVotes from "../../helpers";
import PartyBar from "../PartyBar/PartyBar";
import './Results.css';

function Results({parties, maxVotes}) {
    const sumOfVotes = calculateAllVotes(parties);
    
    return (
        <div className="results">
            {
                parties.map((party, index) => <PartyBar key={index} party={party} maxVotes={maxVotes} sumOfVotes={sumOfVotes}/>)
            }
        </div>
    )
}

export default Results;