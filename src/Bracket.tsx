import React from 'react';
import './Bracket.css';
import BracketMatchup from './BracketMatchup.tsx';
import Connector from './Connector.tsx';
import { getMatchesCount, getRoundOffset } from './tournament-helper.ts';
import type { GameState } from './types.ts';

type BracketProps = {
  gameState: GameState;
  showMatchup: () => void;
  undo: (() => void) | undefined;
};

function Bracket(props: BracketProps) {
  const rounds = [1, 2, 3, 4, 5, 6];
  const currentMatchIndex = props.gameState.currentMatch;
  const getButtonText = (): string => {
    // If the game is over
    if (props.gameState.winner) {
      return 'Play again';
    }

    const currentRound = props.gameState.matches[currentMatchIndex].round;
    const currentOffset = getRoundOffset(currentRound);

    // If it's the start of a round
    if (currentMatchIndex === currentOffset) {
      return `Start round ${currentRound}`;
    }

    // Otherwise, use a generic button text
    return 'Resume';
  };

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
      <nav className="bracket-nav">
        <ul>
          <li className="nav-button nav-button-primary" role="button" onClick={props.showMatchup}>
            {getButtonText()}
          </li>
          {props.undo && (
            <li className="nav-button" role="button" onClick={props.undo}>
              Undo
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Bracket;
