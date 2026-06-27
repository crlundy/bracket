import './Matchup.css';
import MatchupNav from './MatchupNav.tsx';
import MatchupPlayer from './MatchupPlayer.tsx';
import type { GameState, Player } from './types';

type MatchupProps = {
  gameState: GameState;
  showBracket: () => void;
  submitMatchResult: (player: Player) => void;
  undo: (() => void) | undefined;
};

function Matchup(props: MatchupProps) {
  const matchIndex = props.gameState.currentMatch;
  const match = props.gameState.matches[matchIndex];

  // Check that the match exists
  if (match === undefined) {
    throw new Error(`Match #${matchIndex} does not exist.`);
  }

  const player1 = match.player1;
  const player2 = match.player2;

  // Check that both players exist
  if (!player1 || !player2) {
    throw new Error(`Match #${matchIndex} does not have 2 players.`);
  }

  return (
    <>
      <MatchupNav gameState={props.gameState} showBracket={props.showBracket} undo={props.undo} />
      <main>
        <div className="matchup">
          <MatchupPlayer info={player1} onWinHandler={() => props.submitMatchResult(player1)} />
          <MatchupPlayer info={player2} onWinHandler={() => props.submitMatchResult(player2)} />
        </div>
      </main>
    </>
  );
}

export default Matchup;
