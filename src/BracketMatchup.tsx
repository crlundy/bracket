import './BracketMatchup.css';
import type { Match } from './types.ts';

type BracketProps = {
  match: Match;
};

function BracketMatchup(props: BracketProps) {
  const player1 = props.match.player1;
  const player2 = props.match.player2;
  const winner = props.match.winner;

  return (
    <div className="bracket-matchup">
      <div className={`player ${player2 === winner ? 'eliminated' : ''}`}>
        <div className="player-seed">
          <span>{player1 ? player1.seed : ''}</span>
        </div>
        <div className="player-name">
          <span>{player1 ? player1.name : ''}</span>
        </div>
      </div>
      <div className={`player ${player1 === winner ? 'eliminated' : ''}`}>
        <div className="player-seed">
          <span>{player2 ? player2.seed : ''}</span>
        </div>
        <div className="player-name">
          <span>{player2 ? player2.name : ''}</span>
        </div>
      </div>
    </div>
  );
}

export default BracketMatchup;
