import './Menu.css';
import tournaments from './tournaments.ts';

type MenuProps = {
  setGameId: (id: number) => void;
  startGame: () => void;
};

function Menu(props: MenuProps) {
  const indexedTournaments = [...tournaments].map((value, index) => ({ ...value, index: index }));
  const sortedTournaments = [...indexedTournaments].sort((a, b) => a.title.localeCompare(b.title));
  const chooseGame = (gameId: number): void => {
    props.setGameId(gameId);
    props.startGame();
  };

  return (
    <main>
      <div className="menu">
        <h1>Bracket Game</h1>
        <div className="tournament-list">
          {sortedTournaments.map((value) => {
            return (
              <div
                key={value.index}
                role="button"
                className="button tournament-button"
                onClick={() => chooseGame(value.index)}
              >
                {value.title}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Menu;
