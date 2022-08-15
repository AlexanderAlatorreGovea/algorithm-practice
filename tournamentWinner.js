function tournamentWinner(competitions, results) {
  const HOME_TEAM_WON = 1;
  let currentWinner = "";
  const scores = { [currentWinner]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    let [homeTeam, awayTeam] = competitions[i];
    let winner = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam;
    getCurrentWinner(scores, winner);

    if (scores[winner] > scores[currentWinner]) {
      currentWinner = winner;
    }
  }

  return currentWinner;
}

function getCurrentWinner(scores, winner) {
  if (!scores[winner]) scores[winner] = 0;

  scores[winner] += 3;
}
