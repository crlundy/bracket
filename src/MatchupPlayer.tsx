import './MatchupPlayer.css';
import type { Player } from './types';

type MatchupPlayerProps = {
  info: Player;
  onWinHandler: () => void;
};

function MatchupPlayer(props: MatchupPlayerProps) {
  const hasImage = props.info.image && props.info.image.length;

  return (
    <div className={`matchup-player ${hasImage ? 'has-image' : 'no-image'}`} onClick={props.onWinHandler}>
      {hasImage && (
        <div
          className="matchup-player-image"
          style={{ backgroundColor: `${props.info.background}80`, backgroundImage: `url('${props.info.image}')` }}
        ></div>
      )}
      <div
        className="matchup-player-name"
        style={{ backgroundColor: `${props.info.background}`, color: `${props.info.foreground}` }}
      >
        {props.info.name}
      </div>
    </div>
  );
}

export default MatchupPlayer;
