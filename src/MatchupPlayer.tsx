import './MatchupPlayer.css';
import type { Player } from './types';

type MatchupPlayerProps = {
  info: Player;
  onWinHandler: () => void;
};

function MatchupPlayer(props: MatchupPlayerProps) {
  return (
    <div className="matchup-player">
      <div className="player-card" onClick={props.onWinHandler}>
        <div className="player-card-name">{props.info.name}</div>
      </div>
    </div>
  );
}

export default MatchupPlayer;
