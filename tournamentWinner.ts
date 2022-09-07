function tournamentWinner(competitions, results) {
  // 1 in results = hometeamWon, 0 away team won

  const HOME_TEAM_WON = 1;
  let currentWinner = "";
  const scores = { [currentWinner]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    let winner = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateWinner(scores, winner);

    if (scores[winner] > scores[currentWinner]) {
      currentWinner = winner;
    }
  }

  return currentWinner;
}

function updateWinner(scores, winner) {
  if (scores[winner]) scores[winner] += 3;

  scores[winner] = 0;
}
