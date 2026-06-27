import './MatchupNav.css';
import { getRoundOffset } from './tournament-helper.ts';
import type { GameState } from './types.ts';

type MatchupNavProps = {
  gameState: GameState;
  showBracket: () => void;
  undo: (() => void) | undefined;
};

function MatchupNav(props: MatchupNavProps) {
  const matchIndex = props.gameState.currentMatch;
  const round = props.gameState.matches[matchIndex].round;
  const currentRoundOffset = getRoundOffset(round);
  const nextRoundOffset = getRoundOffset(round + 1);
  const matchNumberInRound = matchIndex - currentRoundOffset + 1; // +1 because human readable matches are not 0-indexed
  const totalMatchesInRound = nextRoundOffset - currentRoundOffset;

  return (
    <nav className="game-nav">
      <h1>{props.gameState.title}</h1>
      <ul>
        <li>
          Round {round} – {matchNumberInRound} / {totalMatchesInRound}
        </li>
        <li>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(100 * props.gameState.currentMatch) / props.gameState.matches.length}%` }}
            ></div>
          </div>
        </li>
        <li className="nav-button" role="button" onClick={props.showBracket}>
          See bracket
        </li>
        {props.undo && (
          <li className="nav-button" role="button" onClick={props.undo}>
            Undo
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MatchupNav;
