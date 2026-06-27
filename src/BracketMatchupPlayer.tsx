import './BracketMatchupPlayer.css';
import type { Player } from './types.ts';

type BracketMatchupPlayerProps = {
  isEliminated: boolean;
  player: Player | undefined;
};

function BracketMatchupPlayer(props: BracketMatchupPlayerProps) {
  return (
    <div className={`bracket-player${props.isEliminated ? ' eliminated' : ''}`}>
      <div
        className="bracket-player-seed"
        style={{
          backgroundColor: `${props.player ? props.player.background : 'black'}`,
          color: `${props.player ? props.player.foreground : 'white'}`,
        }}
      >
        {props.player ? props.player.seed : ''}
      </div>
      <div className="bracket-player-name">
        <span>{props.player ? props.player.name : ''}</span>
      </div>
    </div>
  );
}

export default BracketMatchupPlayer;
