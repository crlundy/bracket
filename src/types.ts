type GameHistory = {
  past: GameState[];
  present: GameState;
  future: GameState[];
};

type GameState = {
  currentMatch: number;
  matches: Match[];
};

type Match = {
  nextMatch: number;
  player1?: Player;
  player2?: Player;
  round: number;
  winner?: Player;
};

type Player = {
  color?: string;
  image?: string;
  name: string;
  score?: number;
  seed: number;
};

type Tournament = {
  description?: string;
  players: UnseededPlayer[];
  title: string;
};

type UnseededPlayer = {
  color?: string;
  image?: string;
  name: string;
  score?: number;
};

export type { GameHistory, GameState, Match, Player, Tournament, UnseededPlayer };
