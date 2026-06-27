import './BracketMatchup.css';
import BracketMatchupPlayer from './BracketMatchupPlayer.tsx';
import type { Match } from './types.ts';

type BracketProps = {
  match: Match;
};

function BracketMatchup(props: BracketProps) {
  const player1 = props.match.player1;
  const player2 = props.match.player2;
  const winner = props.match.winner;
  const player1Eliminated = player2 !== undefined && winner !== undefined && player2.name === winner.name;
  const player2Eliminated = player1 !== undefined && winner !== undefined && player1.name === winner.name;

  return (
    <div className="bracket-matchup">
      <BracketMatchupPlayer player={player1} isEliminated={player1Eliminated} />
      <BracketMatchupPlayer player={player2} isEliminated={player2Eliminated} />
    </div>
  );
}

export default BracketMatchup;
