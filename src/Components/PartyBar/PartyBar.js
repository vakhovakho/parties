import './PartyBar.css';

function PartyBar({party, maxVotes, sumOfVotes}) {
    const calculateWidth = () => {
        if(maxVotes === 0) {
            return 0;
        }  

        return  6 * (party.votes / sumOfVotes * 100).toFixed(1);
    }

    const styles = {
        width: `${calculateWidth()}px`, 
        backgroundColor: party.color
    }
    return (
        <div className="party-bar" style={{borderColor: party.color, top: (party.position - 1) * 70}}>
            <div className="votes-bar" style={styles}>
            </div>
            <div className="votes">
                {maxVotes > 0 ? (party.votes / sumOfVotes * 100).toFixed(1) : 0}%
            </div>
        </div>
    );
}

export default PartyBar;