// 0 means that away won
// 1 means that homeTeam won
// [homeTeam, awayTeam]
function tournamentWinner(competitions, results) {
  const HOME_TEAM_WON = 1;
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let index = 0; index < competitions.length; index++) {
    const [awayTeam, homeTeam] = competitions[index];
    const winningTeam = results[index] === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateResults(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
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
