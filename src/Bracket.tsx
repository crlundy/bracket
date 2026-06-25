import React from 'react';
import './Bracket.css';
import BracketMatchup from './BracketMatchup.tsx';
import Connector from './Connector.tsx';
import { getMatchesCount, getRoundOffset } from './tournament-helper.ts';
import type { GameState } from './types.ts';

type BracketProps = {
  gameState: GameState;
  showMatchup: () => void;
};

function Bracket(props: BracketProps) {
  const rounds = [1, 2, 3, 4, 5, 6];
  const currentMatchIndex = props.gameState.currentMatch;
  const currentRound = props.gameState.matches[currentMatchIndex].round;
  const currentOffset = getRoundOffset(currentRound);
  const buttonText = currentMatchIndex === currentOffset ? `Start round ${currentRound}` : 'Resume';

  return (
    <>
      <main>
        <div className="bracket">
          {rounds.map((round) => {
            return (
              <React.Fragment key={round}>
                <div className={`round round-${round}`}>
                  {props.gameState.matches
                    .filter((value) => value.round === round)
                    .map((value, index) => {
                      return <BracketMatchup key={index} match={value} />;
                    })}
                </div>
                {round !== rounds[-1] && (
                  <div className={`connectors connectors-${round}`}>
                    {Array.from({ length: getMatchesCount(round + 1) }).map((_, index) => {
                      return <Connector key={index} />;
                    })}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </main>
      <div className="bracket-action" onClick={props.showMatchup}>
        <span>{buttonText}</span>
      </div>
    </>
  );
}

export default Bracket;
