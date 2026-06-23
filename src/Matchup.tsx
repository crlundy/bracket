import './Matchup.css';
import type { GameState, Player } from './types';

type MatchupProps = {
  gameState: GameState;
  showBracket: () => void;
  submitMatchResult: (player: Player) => void;
};

function Matchup(props: MatchupProps) {
  const matchIndex = props.gameState.currentMatch;
  const match = props.gameState.matches[matchIndex];
  const player1 = match.player1;
  const player2 = match.player2;

  // Check that both players exist
  if (!player1 || !player2) {
    throw new Error(`Match #${matchIndex} does not have 2 players.`);
  }

  return <div>Matchup</div>;
}

export default Matchup;
