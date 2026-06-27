type GameHistory = {
  past: GameState[];
  present: GameState;
  future: GameState[];
};

type GameState = {
  currentMatch: number;
  matches: Match[];
  title: string;
  winner?: Player;
};

type Match = {
  nextMatch: number;
  player1?: Player;
  player2?: Player;
  round: number;
  winner?: Player;
};

type Player = {
  background?: string;
  foreground?: string;
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
  background?: string;
  foreground?: string;
  image?: string;
  name: string;
  score?: number;
};

export type { GameHistory, GameState, Match, Player, Tournament, UnseededPlayer };
