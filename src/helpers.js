function calculateAllVotes(parties) {
    return parties.reduce((accumulator, party) => accumulator + party.votes, 0)
}

export default calculateAllVotes;