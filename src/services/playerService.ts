export interface Player {
  id: number;
  name: string;
  wins: number;
  losses: number;
  totalScore: number;
}

const players: Player[] = [
  { id: 1, name: "ShadowStrike", wins: 15, losses: 5, totalScore: 28500 },
  { id: 2, name: "NoobMaster", wins: 3, losses: 12, totalScore: 4200 },
  { id: 3, name: "ProGamer99", wins: 0, losses: 0, totalScore: 0 },
];

export function getPlayerById(id: number): Player | undefined {
  return players.find(player => player.id === id);
}

export function calculatePerformanceRating(player: Player) {
  const totalGames = player.wins + player.losses;

  if (totalGames === 0) {
    return {
      id: player.id,
      name: player.name,
      rating: 0,
      totalGames: 0,
    };
  }

  const rawRating =
    (player.wins / totalGames) * 100 +
    player.totalScore / totalGames;

  const rating = Number(rawRating.toFixed(2));

  return {
    id: player.id,
    name: player.name,
    rating,
    totalGames,
  };
}


