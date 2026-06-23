import React from 'react';
import './Bracket.css';
import BracketMatchup from './BracketMatchup.tsx';
import Connector from './Connector.tsx';
import { getMatchesCount } from './tournament-helper.ts';
import type { GameState } from './types.ts';

type BracketProps = {
  gameState: GameState;
  showMatchup: () => void;
};

function Bracket(props: BracketProps) {
  const buttonText = 'PLACEHOLDER';

  return (
    <>
      <main className="bracket">
        {[1, 2, 3, 4, 5, 6].map((round) => {
          return (
            <React.Fragment key={round}>
              <div className={`round round-${round}`}>
                {props.gameState.matches
                  .filter((value) => value.round === round)
                  .map((value, index) => {
                    return <BracketMatchup key={index} match={value} />;
                  })}
              </div>
              <div className={`connectors connectors-${round}`}>
                {Array.from({ length: getMatchesCount(round + 1) }).map((_, index) => {
                  return <Connector key={index} />;
                })}
              </div>
            </React.Fragment>
          );
        })}
      </main>
      <div role="button" id="bracket-action-button" className="button primary-button">
        {buttonText}
      </div>
    </>
  );
}

export default Bracket;
