// 0 means that away won
// 1 means that homeTeam won
// [homeTeam, awayTeam]
function tournamentWinner(competitions, results) {
  const HOME_TEAM = 1;
  let winner = "";
  const scores = { [winner]: 0 };

  for (let index = 0; index < competitions.length; index++) {
    const [homeTeam, awayTeam] = competitions[index];
    const result = results[index];
    const currentWinner = result === HOME_TEAM ? homeTeam : awayTeam;

    updateResults(currentWinner, 3, scores);

    if (scores[currentWinner] > scores[winner]) {
      winner = currentWinner;
    }
  }

  return winner;
}

function updateResults(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
