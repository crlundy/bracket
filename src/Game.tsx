import './Game.css';
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
    title: tournaments[props.gameId].title,
  };

  // Initialize the game history
  const [gameHistory, setGameHistory] = useState<GameHistory>({
    past: [],
    present: initialGameState,
    future: [],
  });

  const showMatchup = (): void => {
    // If there's a winner, then we should exit instead
    if (gameHistory.present.winner) {
      props.exit();
    } else {
      setShowBracket(false);
    }
  };

  const submitMatchResult = (winner: Player): void => {
    // Log the result
    setGameHistory(applyMove(gameHistory, winner));

    // Note that gameHistory has not been updated yet, so currentMatch is the match that was just completed
    const currentMatch = gameHistory.present.currentMatch;
    const currentRound = currentMatch === 0 ? 1 : gameHistory.present.matches[currentMatch].round;
    const nextRound =
      currentMatch === gameHistory.present.matches.length - 1
        ? -1
        : gameHistory.present.matches[currentMatch + 1].round;

    // If the next match is a different round, then we should review the bracket
    if (currentRound !== nextRound) {
      setShowBracket(true);
    }
  };

  const canUndo = gameHistory.past.length > 0;
  const undo = (): void => {
    setGameHistory(applyUndo(gameHistory));
  };

  return (
    <>
      {showBracket && (
        <Bracket gameState={gameHistory.present} showMatchup={showMatchup} undo={canUndo ? undo : undefined} />
      )}
      {!showBracket && (
        <Matchup
          gameState={gameHistory.present}
          showBracket={() => setShowBracket(true)}
          submitMatchResult={submitMatchResult}
          undo={canUndo ? undo : undefined}
        />
      )}
    </>
  );
}

function applyUndo(gameHistory: GameHistory): GameHistory {
  const newGameHistory = structuredClone(gameHistory);
  const previousState = newGameHistory.past.pop();

  // If there is nothing to undo
  if (previousState === undefined) {
    return gameHistory;
  }

  // Finish building the reverted game state
  newGameHistory.future.push(newGameHistory.present);
  newGameHistory.present = previousState;

  return newGameHistory;
}

function applyMove(gameHistory: GameHistory, winner: Player): GameHistory {
  const matchId = gameHistory.present.currentMatch;
  const match = gameHistory.present.matches[matchId];
  const nextMatch = gameHistory.present.matches[match.nextMatch];

  // Verify that the winner is playing in the current match
  if (match.player1 !== winner && match.player2 !== winner) {
    throw new Error(`${winner} is not in match #${matchId}.`);
  }

  // Verify that the match has not already been won
  if (match.winner) {
    throw new Error(`A winner was already recorded for match #${matchId}.`);
  }

  // Verify that, if there is a next match, that it does not already have both players
  if (nextMatch && nextMatch.player1 && nextMatch.player2) {
    throw new Error(`There are already 2 players in the next match #${match.nextMatch}.`);
  }

  // Prepare the new game state
  const newGameState = structuredClone(gameHistory.present);

  // Mark the winner
  newGameState.matches[matchId].winner = winner;
  newGameState.currentMatch = newGameState.currentMatch + 1;

  // Add this player to the next round, or if this was the final match, mark them as the overall winner
  if (nextMatch) {
    const newNextMatch = newGameState.matches[newGameState.matches[matchId].nextMatch];

    // If the first seat is full, put the winner in the second seat
    if (newNextMatch.player1 === undefined) {
      newNextMatch.player1 = winner;
    } else {
      newNextMatch.player2 = winner;
    }
  } else {
    newGameState.winner = winner;
  }

  // Build the new game history
  const newGameHistory = {
    past: [...gameHistory.past, gameHistory.present],
    present: newGameState,
    future: [],
  };

  return newGameHistory;
}

export default Game;
