import './Game.css';
import GameNav from './GameNav.tsx';
import Bracket from './Bracket.tsx';
import Matchup from './Matchup.tsx';
import { useState } from 'react';
import { createMatches } from './tournament-helper.ts';
import tournaments from './tournaments.ts';
import type { GameHistory, GameState, Player } from './types.ts';

type GameProps = {
  exit: () => void;
  gameId: number;
};

function Game(props: GameProps) {
  const [showBracket, setShowBracket] = useState<boolean>(true);

  // Initialize the game state
  const initialGameState: GameState = {
    currentMatch: 0,
    matches: createMatches(tournaments[props.gameId].players),
  };
  const [gameHistory, setGameHistory] = useState<GameHistory>({
    past: [],
    present: initialGameState,
    future: [],
  });

  function applyMove(winner: Player): GameHistory {
    // Verify the move is valid
    const matchId = gameHistory.present.currentMatch;
    const match = gameHistory.present.matches[matchId];
    const nextMatch = gameHistory.present.matches[match.nextMatch];
    if (match.player1 !== winner && match.player2 !== winner) {
      throw new Error(`${winner} is not in match #${matchId}.`);
    } else if (match.winner) {
      throw new Error(`A winner was already recorded for match #${matchId}.`);
    } else if (nextMatch.player1 && nextMatch.player2) {
      throw new Error(`There are already 2 players in the next match #${match.nextMatch}.`);
    }

    // Prepare the new game state
    const newGameState: GameState = structuredClone(gameHistory.present);

    // Mark the winner
    newGameState.matches[matchId].winner = winner;
    newGameState.currentMatch = newGameState.currentMatch + 1;

    // Add this player to the next round
    const newNextMatch = newGameState.matches[newGameState.matches[matchId].nextMatch];
    if (newNextMatch.player1 === undefined) {
      newNextMatch.player1 = winner;
    } else {
      newNextMatch.player2 = winner;
    }

    // Build the new game history
    const newGameHistory = {
      past: [...gameHistory.past, gameHistory.present],
      present: newGameState,
      future: [],
    };

    // TODO: If it's a new round, update the showBracket status

    return newGameHistory;
  }

  function submitMatchResult(winner: Player): void {
    setGameHistory(applyMove(winner));
  }

  return (
    <>
      <GameNav />
      {showBracket && <Bracket gameState={gameHistory.present} showMatchup={() => setShowBracket(false)} />}
      {!showBracket && (
        <Matchup
          gameState={gameHistory.present}
          submitMatchResult={submitMatchResult}
          showBracket={() => setShowBracket(true)}
        />
      )}
    </>
  );
}

export default Game;
