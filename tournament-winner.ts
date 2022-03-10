// 0 means that away won
// 1 means that homeTeam won
// [homeTeam, awayTeam]
function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };
  const HOME_TEAM_WON = 1;

  for (let index = 0; index < competitions.length; index++) {
    const result = results[index];
    const [homeTeam, awayTeam] = competitions[index];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
  }

  return currentBestTeam;
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
